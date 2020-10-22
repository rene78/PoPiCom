import RootElement from '../helpers/app-rootelement.js';
import PubSub from '../data/pubsub.js';

export default class appStats extends RootElement {
  constructor() {
    super();
    this.pubsub = PubSub;
    // this.renderData();//initial render

    // subscribe to any of these events, get metadata, pass data to renderData
    this.pubsub.subscribe('PicsDownload', 'getMeta', this.renderData);
  }

  renderData(meta) {
    this.innerHTML = `
      <p id="app-stats-text">User <b>${decodeURI(meta.userName)}</b> uploaded <b>${meta.nPics}</b> picture${meta.nPics !== 1 ? "s" : ""} which ${meta.nPics !== 1 ? "are" : "is"} used on <b>${meta.nUsages}</b> Wikimedia page${meta.nUsages !== 1 ? "s" : ""}</p>
    `;
  }
}

customElements.define('app-stats', appStats);