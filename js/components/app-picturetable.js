import RootElement from '../helpers/app-rootelement.js';
import PubSub from '../data/pubsub.js';

export default class appPictureTable extends RootElement {
  constructor() {
    super();
    this.pubsub = PubSub;
    // this.renderData();//initial render

    // subscribe to event(s), tell pubsub which function to execute, pass data to renderData
    this.pubsub.subscribe('PicsDownload', 'getPictureArr', this.renderData);
  }

  renderData(pictureArr) {
    let html = "<h2>Pictures</h2><table><thead><tr><th>Usage count</th><th>Picture Name</th></tr></thead><tbody>";
    for (let i = 0; i < pictureArr.length; i++) {
      html += "<tr><td>" + pictureArr[i].count + "</td>" + "<td>" + pictureArr[i].title + "</td></tr>";
    }
    html += "</tbody></table>";
    this.innerHTML = html;
  }
}

customElements.define('app-picturetable', appPictureTable);