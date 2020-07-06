//pubsub is the "middle man" between the components and the data store
import DataStore from './datastore.js';

export default new class PubSub {
  constructor() {
    this.datastore = DataStore;
    this.subscribers = [];
  }

  // "subscribe" adds everyone to the subscribers[] array, who is interested in updates of certain infos.
  // Here's a subscription from <app-picturetable>:
  // eg "this.pubsub.subscribe('PicsDownload', 'getPictureArr', this.renderData)"
  // 1) app-picturetable is interested in any new download of picture arrays being published (newInfo - 'PicsDownload')
  // 2) if there is a new download, fire 'getPictureArr()' in the datastore (request - 'getPictureArr')
  // 3) fire the renderData() method in <app-picturetable> component and supply the info from getTasks (callback - 'renderData')

  subscribe(newInfo, request, callback) {
    this.subscribers.push({
      newInfo,
      request,
      callback
    });
  }

  unsubscribe(callback) {
    // TODO implement if needed!
  }

  // when anyone publishes something it arrives here,
  // a string of newInfo eg 'AddTask' and an object of data to publish
  publish(newInfo, pics, userName) {
    // publish the new/changed data
    this.datastore.setRequest({
      newInfo,
      pics,
      userName
    });

    // after publishing, alert all susbscribers to new/changed data.
    // first get all subscribers interested in this newInfo, then foreach of them
    // fire the callback method requested.
    this.subscribers.filter(subscriber => (subscriber.newInfo == newInfo)).forEach((subscriber) => {
      subscriber.callback(this.datastore.getRequest(subscriber));
    });
  }
}