//fetches pictures from API. Returns json list of pic details (name, usage count)
import PubSub from './pubsub.js';

export default new class FetchPics { //"new", because we want to export an instance of the class

  constructor() {
    this.pubsub = PubSub;
    // this.fetchData = this.fetchData.bind(this);
  }

  getPics(userName) {
    console.log("You entered this text: " + userName);
    const self = this; //used to bind "this" to function

    const pageIdsArr = [];
    const hardPicLimit = 44; //Set to 22000 pictures (22000pics/500picsPerQuery=44)
    let hardPicLimitCounter = 1;
    let url = "https://commons.wikimedia.org/w/api.php?";
    //docs: https://www.mediawiki.org/wiki/API:Allimages
    const params = {
      action: "query",
      list: "allimages",
      aiuser: userName, //user from whom to get picture data
      aisort: "timestamp", //sort according to date
      ailimit: "500", //number of pictures to return. Max is 500
      aiprop: "url", //what type of data to return. keep empty to return the bare minimum
      format: "json", //format of returned file
      origin: "*" //CORS
    };

    function createURL() {
      Object.keys(params).forEach(function (title) { url += "&" + title + "=" + params[title]; });
      // console.log(url); //https://commons.wikimedia.org/w/api.php?action=query&list=allimages&aiuser=Renek78&aisort=timestamp&ailimit=500&aiprop=
    }

    function fetchElements() {
      createURL();
      addSpinner(); //show spinner animation and blur background
      fetch(url)
        .then(response => response.json())
        .then(response => {
          if (response.query.allimages.length === 0) {
            // console.warn("User has not uploaded any pictures");
            const modalObj = {
              text: "User <b>" + userName + "</b> has not uploaded any pictures",
              type: "information"
            }
            self.pubsub.publish('InfoMessage', modalObj, userName);
            removeSpinner(); //hide animation
            return;
          }
          //copy all the picture ids into array pageIdsArr
          for (let i = 0; i < response.query.allimages.length; i++) {
            const descriptionshorturl = response.query.allimages[i].descriptionshorturl;
            const cutPos = descriptionshorturl.search("curid=");
            const pageid = descriptionshorturl.slice(cutPos + 6);
            pageIdsArr.push(pageid);
          }
          //if returned json has a key named "continue", write value to "params.lecontinue" and do another fetch
          if (response.continue != undefined && hardPicLimitCounter < hardPicLimit) {
            params.aicontinue = response.continue.aicontinue;//update aicontinue in order to fetch remaining entries
            // console.log(params);
            fetchElements();
            hardPicLimitCounter++;
            if (hardPicLimitCounter === hardPicLimit) {
              // console.warn("User has more than 22000 pictures. Only 22000 can be shown in this app!");
              const modalObj = {
                text: "User <b>" + userName + "</b> has uploaded more than 22000 pictures. The first 22000 will be shown. Please wait...",
                type: "information"
              }
              self.pubsub.publish('InfoMessage', modalObj, userName);
            }
          } else {
            //console.log(pageIdsArr);
            getUsageCount(pageIdsArr);
            //console.log(response.query.allimages);
          }
        })
        .catch(error => {
          console.log(error);
          // removeSpinner(); //hide animation
        });
      //-----------------------------------------------------------------------

      function getUsageCount(pageIdsArr) {
        // let url = "https://www.mediawiki.org/w/api.php?action=query&prop=globalusage&gulimit=20&titles=File:Ferrari%20Roma%20in%20Basel.png";
        // Documentation: https://www.mediawiki.org/w/api.php?action=help&modules=query%2Bglobalusage
        const params = {
          action: "query",
          prop: "globalusage|imageinfo", //imageinfo needed for thumbnail url
          format: "json", //format of returned file
          gulimit: "500", //number of uses to return. Max is 500
          pageids: "",
          iiprop: "url", //get thumbnail url
          iiurlwidth: "200", //thumbnail url width=200px
          origin: "*" //CORS
        };

        //Split into subarrays of 50 elements each.
        const namesArr2D = [];

        while (pageIdsArr.length) namesArr2D.push(pageIdsArr.splice(0, 50));
        // console.log(namesArr2D);

        let APIResponseCounter = 0;
        let finalLoop = false;

        for (let i = 0; i < namesArr2D.length; i++) {
          // console.log(finalLoop);
          let url = "https://commons.wikimedia.org/w/api.php?";
          params.pageids = getTitles(i);
          // console.log(params);
          Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
          // console.log(url);
          fetch(url)
            .then(response => response.json())
            .then(response => {
              if (APIResponseCounter == namesArr2D.length - 1) finalLoop = true; //Set to true on final loop
              APIResponseCounter++;
              // console.log(finalLoop);
              extractTitleAndCount(response, finalLoop)/*console.log(response);*/
            })
            .catch(error => {
              console.log(error);
              // removeSpinner(); //hide animation
            });
        }

        function getTitles(i) {
          return namesArr2D[i].join("|");
        }

        const titleCountObj = {
          "headings": [
            "#",
            "Thumbnail",
            "Name"
          ],
          "data": []
        };

        function extractTitleAndCount(usageCountObj, finalLoop) {
          // console.log(usageCountObj);
          const fileCount = Object.keys(usageCountObj.query.pages).length;
          for (let i = 0; i < fileCount; i++) {
            const title = Object.values(usageCountObj.query.pages)[i].title;
            const titleAsURI = "<a href='https://commons.wikimedia.org/wiki/" + title + "'>" + title.slice(5) + "</a>";
            const thumbnailURI = Object.values(usageCountObj.query.pages)[i].imageinfo[0].thumburl;
            const thumbnailURIasIMG = "<img class='lazy' data-src='" + thumbnailURI + "'/>";
            const count = (Object.values(usageCountObj.query.pages)[i].globalusage).length;
            titleCountObj.data.push([count, thumbnailURIasIMG, titleAsURI]);
          }
          // console.log(finalLoop);
          if (finalLoop) {
            // console.log(titleCountObj);
            removeSpinner(); //hide animation
            self.pubsub.publish('PicsDownload', titleCountObj, userName);
          }
        }
      }
    }

    const spinner = document.querySelector("#loading-animation");
    const content = document.querySelector("#content");
    function addSpinner() {
      spinner.classList.remove("hide");
      content.classList.add("grey-blur");
    }

    function removeSpinner() {
      spinner.classList.add("hide");
      content.classList.remove("grey-blur");
    }

    const getPicsObj = {
      fetchElements
    }
    return getPicsObj;
  }
}