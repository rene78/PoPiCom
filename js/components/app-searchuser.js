import RootElement from '../helpers/app-rootelement.js';
import FetchPics from '../data/fetchPics.js';

export default class appSearchUser extends RootElement {
  constructor() {
    super();
    this.renderData();
    this.fetchPics = FetchPics;
  }
  renderData() {
    this.innerHTML = `
    <input id="autoComplete" type="text" tabindex="1">
    `;
    const self = this; //used to bind "this" to function
    // The autoComplete.js Engine instance creator
    const autoCompletejs = new autoComplete({
      data: {
        src: async () => {
          // Loading placeholder text
          document.querySelector("#autoComplete").setAttribute("placeholder", "Loading...");
          // Fetch External Data Source
          const input = document.querySelector("#autoComplete").value;
          const inpCapFirst = input[0].toUpperCase() + input.slice(1);
          // Commons fetch parameters
          const params = {
            action: "query",
            list: "allusers",
            format: "json", //format of returned file
            auprefix: inpCapFirst,
            origin: "*" //CORS
          };
          // User search query
          // const query = document.querySelector("#autoComplete").value;
          // Fetch External Data Source
          let url = "https://commons.wikimedia.org/w/api.php?";
          // console.log(params);
          Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
          console.log(url);
          const source = await fetch(url);
          // Format data into JSON
          const usersArr = await source.json();
          console.log(usersArr.query.allusers);

          // Return Fetched data
          return usersArr.query.allusers;
        },
        key: ["name"],
        cache: false
      },
      // query: {
      //   manipulate: function (query) {
      //     return query.replace("pizza", "burger");
      //   },
      // },
      // trigger: {
      //   event: ["input", "focusin", "focusout"]
      // },
      placeHolder: "Commons User Name...",
      threshold: 3,                        // Min. Chars length to start Engine | (Optional)
      debounce: 300,                       // Post duration for engine to start | (Optional)
      searchEngine: "strict",
      highlight: true,
      maxResults: 5,
      resultsList: {
        render: true
      },
      noResults: function () {
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = "No Results";
        document.querySelector("#autoComplete_list").appendChild(result);
      },
      onSelection: function (feedback) {
        document.querySelector("#autoComplete").blur(); //remove focus from input field ("gonna get small again")
        const userName = feedback.selection.value.name;
        const pics = self.fetchPics.getPics(userName);
        pics.fetchElements();
        // Clear Input
        document.querySelector("#autoComplete").value = "";
        // Change placeholder with the selected value
        document.querySelector("#autoComplete").setAttribute("placeholder", userName);
        // Concole log autoComplete data feedback
        console.log(feedback);
      }
    });

    // Toggle event for search input
    // function below creates 2 event listeners
    // showing & hidding results list onfocus / blur
    ["focus", "blur"].forEach(function (eventType) {
      const resultsList = document.querySelector("#autoComplete_list");

      document.querySelector("#autoComplete").addEventListener(eventType, function () {
        // Hide results list & show other elements
        if (eventType === "blur") {
          // action("dim");
          resultsList.style.display = "none";
        } else if (eventType === "focus") {
          // Show results list & hide other elemennts
          // action("light");
          resultsList.style.display = "block";
        }
      });
    });
  }
  
  // searchPics(userName) {
  //   const pics = this.fetchPics.getPics(userName);
  //   pics.fetchElements();
  // }
}

customElements.define('app-searchuser', appSearchUser);