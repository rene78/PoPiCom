import RootElement from '../helpers/app-rootelement.js';
import PubSub from '../data/pubsub.js';

export default class appModal extends RootElement {
  constructor() {
    super();
    this.pubsub = PubSub;
    // this.renderData();//initial render

    // subscribe to any of these events, get metadata, pass data to renderData
    this.pubsub.subscribe('InfoMessage', 'getMeta', this.renderData);
  }

  renderData(meta) {
    this.innerHTML = `
      <div class="modal">
        <p></p>
      </div>
    `;
    const modal = document.querySelector(".modal");
    modal.querySelector("p").innerHTML = meta.text;
    modal.classList.add("show-modal", meta.type);//add classes "show-modal" and "information"
  }
}

customElements.define('app-modal', appModal);