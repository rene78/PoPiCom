// import webcomponents
import './components/app-searchuser.js';
import './components/app-stats.js';
import './components/app-picturetable.js';
import './components/app-chart.js';
import FetchPics from './data/fetchPics.js';


const userNameFromLocalStorage = localStorage.getItem('username');
//Check url hash and localStorage for previously saved Commons user name.
//If there is one --> fetch pics from this user again (prioritize url hash over localStorage)
if (location.hash || userNameFromLocalStorage) {
  const userNameWithoutHash = (location.hash || userNameFromLocalStorage).slice(1);//remove hash symbol
  const fetchPicsFromLSUser = FetchPics.getPics(userNameWithoutHash);
  fetchPicsFromLSUser.fetchElements();
  localStorage.setItem('username', "#" + userNameWithoutHash);//if hash and localStorage had different values: Save hash value to LS
//If not --> open empty start page with infobox opened (cause it can be assumed that this is a new user)
} else {
  const infobox = document.querySelector(".infobox");
  infobox.classList.toggle("show");
}

// Uncommend lines below to load example user data for testing purposes
// import PubSub from './data/pubsub.js';
// import { demoTitleAndCount } from './data/examples.js';
// const pubsub = PubSub;
// pubsub.publish('PicsDownload', demoTitleAndCount, "Demo");