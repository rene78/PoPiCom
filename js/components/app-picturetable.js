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
    // let html = "<table id='myTable'></table>";
    console.log(pictureArr);
    this.innerHTML = "<table id='myTable'></table>";
    let dataTable = new simpleDatatables.DataTable(myTable, {
      data: pictureArr
    });
  }
}

customElements.define('app-picturetable', appPictureTable);