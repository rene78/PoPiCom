// import webcomponents
import './components/app-searchuser.js';
import './components/app-stats.js';
import './components/app-picturetable.js';
import './components/app-chart.js';

// Uncommend lines below to load example user data for testing purposes
import PubSub from './data/pubsub.js';
import { demoTitleAndCount } from './data/examples.js';
const pubsub = PubSub;
pubsub.publish('PicsDownload', demoTitleAndCount, "Demo");