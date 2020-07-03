import RootElement from '../helpers/app-rootelement.js';

export default class appStats extends RootElement {
  constructor() {
    super();
    this.renderData();
  }

  renderData(userName, nPics, nUsages) {
    this.innerHTML = `
    <p>User xxx uploaded xxx pictures which are used on xx Wikimedia pages</p>
    `;
  }
}

customElements.define('app-stats', appStats);