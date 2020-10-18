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
    <a href="https://github.com/rene78/PopComPics" class="github-corner"
      aria-label="View source on GitHub" title="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250"
        style="fill:#64CEAA; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">

        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" class="github-triangle-svg"></path>

        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm">
        </path>

        <path
          d="M111,111 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor" class="octo-body">
        </path>
      </svg>
    </a>

    <a href="#" class="info-triangle" aria-label="View information about PopComPics" title="View information about PopComPics">
      <svg width="80" height="80" viewBox="0 0 250 250"
        style="fill:#64CEAA; position: absolute; top: 0; border: 0; left: 0;" aria-hidden="true">
        <path d="M0,0 L0,250 L250,0 Z" class="info-triangle-svg"></path>
      </svg>
    </a>

    <div class="info-symbol">
      <svg width="70" height="70" viewBox="0 0 250 250"
        style="fill:white; position: absolute; top: 0; border: 0; left: 0;" aria-hidden="true" pointer-events="none";>
        <g>
          <path d="m80 15c-35.88 0-65 29.12-65 65s29.12 65 65 65 65-29.12 65-65-29.12-65-65-65zm0 10c30.36 0 55 24.64 55 55s-24.64 55-55 55-55-24.64-55-55 24.64-55 55-55z"/>
          <path d="m57.373 18.231a9.3834 9.1153 0 1 1 -18.767 0 9.3834 9.1153 0 1 1 18.767 0z" transform="matrix(1.1989 0 0 1.2342 21.214 28.75)"/>
          <path d="m90.665 110.96c-0.069 2.73 1.211 3.5 4.327 3.82l5.008 0.1v5.12h-39.073v-5.12l5.503-0.1c3.291-0.1 4.082-1.38 4.327-3.82v-30.813c0.035-4.879-6.296-4.113-10.757-3.968v-5.074l30.665-1.105"/>
        </g>
      </svg>
    </div>

    <div class="infobox">
      <div>
        <span title="Close" class="close-infobox-button">X</span>
        <h2><img src="img/favicon-32x32.png" alt="Popcorn bag" width="32" height="32" style="vertical-align:middle"> PopComPics <img src="img/favicon-32x32.png" alt="Popcorn bag" width="32" height="32" style="vertical-align:middle"></h2>
        <p>Have you ever asked yourself how popular your pictures are on Wikipedia, Wikivoyage, Wikidata and other
        Wikimedia sites?</p>
        <p><b>Pop</b>ular <b>Com</b>mons <b>Pics</b> will tell you just that! Simply enter your user
        name and get a list with all your images and the usage count for each. Furthermore there is a chart with your
        Top 10 most used pictures.</p>
        <p>If you find this tool useful you can donate some Satoshis to me &#128527;.</p>
        <div class="tallypay" data-user="rene78" data-size="button" data-button_text="Donate via Lightning" id="tc_panel_rene78-1550"><div id="tc_tip_button-rene78-1550" class="tc_tip_button" style="display: inline-block;">	<div style="display:inline-block">Spende via Lightning</div></div></div>
      </div>
    </div>

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
            aulimit: "5",
            auwitheditsonly: "true",
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
        //Write username to local storage. When page website opened the next time this user will be loaded again.
        localStorage.setItem('username', "#" + userName); //the hash symbol simplifies the function in main.js
        //Write usernam to url after hash
        window.location.hash = userName;
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

    // Get the infobox modal
    const infobox = document.querySelector(".infobox");

    // When the user clicks anywhere outside of the infobox, close it
    window.onclick = function (event) {
      if (event.target == infobox) {
        infobox.classList.toggle("show");
      }
    }

    //Define all elements that can toggle display of infobox
    const elementsThatToggleInfobox = document.querySelectorAll(".close-infobox-button, .info-triangle, .tallypay");
    // console.log(elementsThatToggleInfobox);

    elementsThatToggleInfobox.forEach(function (elem) {
      elem.addEventListener("click", function () {
        infobox.classList.toggle("show");
      });
    });
  }
}

customElements.define('app-searchuser', appSearchUser);