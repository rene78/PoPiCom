import RootElement from '../helpers/app-rootelement.js';
import PubSub from '../data/pubsub.js';

export default class appChart extends RootElement {
  constructor() {
    super();
    this.pubsub = PubSub;
    // this.renderData();//initial render

    // subscribe to any of these events, get metadata, pass data to renderData
    this.pubsub.subscribe('PicsDownload', 'getPictureArr', this.renderData);
  }

  renderData(pictureArr) {
    this.innerHTML = `
      <div id="chart-container">
        <canvas id="chart" width="300" height="300"></canvas>
        <div id="tooltip-container"></div>
      </div>
    `;

    const tooltip = document.getElementById("tooltip-container");

    const chartLabels = [], usageCount = [];
    const maxDisplay = (pictureArr.data.length < 10) ? pictureArr.data.length : 10; //If there are more than 10 elements: Only display 10.

    for (let i = 0; i < maxDisplay; i++) {
      chartLabels.push(pictureArr.data[i][2]);
      usageCount.push(pictureArr.data[i][0]);
    }
console.log(usageCount);
    new Chart(document.getElementById("chart"), {
      type: "doughnut",
      data: {
        // labels: chartLabels,
        datasets: [{
          data: usageCount,
          backgroundColor: [
            '#ac5c91',
            '#b5d29f',
            '#b383b3',
            '#d5dc76',
            '#71b37b',
            '#8a84a3',
            '#d09440',
            '#578e86',
            '#d56d76',
            '#4f93c0',
            '#69999f'
          ]
        }]
      },
      options: {
        // maintainAspectRatio: false,
        // responsive: false,
        title: {
          display: true,
          text: 'Top 10 Pictures',
          fontSize: 22
        },
        tooltips: {
          enabled: false,
          custom: function (tooltipModel) {
            // Hide if no tooltip
            if (tooltipModel.opacity === 0) {
              tooltip.style.opacity = 0;
              return;
            }
            // console.log(tooltipModel.dataPoints[0].index);

            // show the tooltip.
            tooltip.style.opacity = 1;

            // create the img element and append it to the tooltip element.
            const img = document.createElement('img');

            const selectedIndex = tooltipModel.dataPoints[0].index;
            // console.log(selectedIndex);
            const urlHtml = pictureArr.data[selectedIndex][1];
            // console.log(urlHtml);
            const url = urlHtml.slice(urlHtml.search("src='") + 5, -3);
            // console.log(url);

            img.src = url;
            // console.log(img.src);
            tooltip.innerHTML = "";
            tooltip.appendChild(img);

            //Create text below image
            const tooltipText = document.createElement('div');
            tooltipText.className = "tooltip-text";
            const nUsage = pictureArr.data[selectedIndex][0];
            tooltipText.innerHTML = "Used on <b>" + nUsage + "</b> sites";
            tooltip.appendChild(tooltipText);

            // move the tooltip to the 'correct' position.
            const position = this._chart.canvas.getBoundingClientRect();
            // console.log(position);
            // tooltip.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            // tooltip.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            tooltip.style.top = (position.height / 2) - 70 + 'px';
            // console.log("top:" + tooltip.style.top);
            tooltip.style.left = (position.width / 2) - 100 + 'px';
          }
        }
      }
    });
  }
}

customElements.define('app-chart', appChart);