import RootElement from '../helpers/app-rootelement.js';

class appSearchUser extends RootElement {
  constructor() {
    super();
    this.renderData();
  }

  renderData() {
    this.innerHTML = `
    <h2>Enter a user name</h2>
    <form class="user-search-form">
      <input type="text" id="user" placeholder="Commons user name" />
      <button id="search-btn">Search</button>
    </form>
    `
    document.querySelector("#search-btn").addEventListener("click", this.searchPics);
  }

  searchPics(ev) {
    ev.preventDefault();
    console.log("You entered this text: "+document.querySelector('#user').value);
  }
}

customElements.define('app-searchuser', appSearchUser);

export default appSearchUser;