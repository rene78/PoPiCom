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
    console.log(pictureArr);
    this.innerHTML = "<table id='myTable'></table>";
    let dataTable = new simpleDatatables.DataTable(myTable, {
      data: pictureArr
    });

    //lazy load images once user interacts with table
    dataTable.on('datatable.init', loadImages); //load currently displayed images after 1st rendering of table
    dataTable.on('datatable.page', loadImages); //load currently displayed images after page change of table
    dataTable.on('datatable.sort', loadImages); //load currently displayed images after sort of table column
    dataTable.on('datatable.search', loadImages); //load currently displayed images after search of table
    dataTable.on('datatable.perpage', loadImages); //load currently displayed images after amount of items per page got changed

    function loadImages() {
      // console.log("lazyload function fired!");
      let lazyloadImages;

      lazyloadImages = document.querySelectorAll(".lazy");
      const imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });

      lazyloadImages.forEach(function (image) {
        imageObserver.observe(image);
      });
    }
  }
}

customElements.define('app-picturetable', appPictureTable);