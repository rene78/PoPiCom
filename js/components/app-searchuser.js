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
    <h2>Enter a user name</h2>
    <form class="user-search-form">
      <input type="text" id="user" placeholder="Commons user name" />
      <button id="search-btn">Search</button>
    </form>
    `;
    document.querySelector("#search-btn").addEventListener("click", this.searchPics);
  }

  searchPics(ev) {
    ev.preventDefault();
    // const getPics = new FetchPics();
    // getPics.fetchData(document.querySelector('#user').value);

    this.fetchPics.fetchData(document.querySelector('#user').value);

    // console.log("You entered this text: " + document.querySelector('#user').value);
  }
}

customElements.define('app-searchuser', appSearchUser);