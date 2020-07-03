import DataStore from './datastore.js';

export default new class PubSub {
  constructor() {
    this.datastore = DataStore;
    this.subscribers = [];
  }

  // getRequest() and setRequest() are the primary getters/setters
  // they work by appending 'get' or 'set to the 'listener.request' string
  // and then use that as the function name.
  // I added 'listener.data' in case someone wants to extend the idea
  // by passing a variable eg id (not implemented here)
  getRequest(subscriber) {
    return this[subscriber.request](subscriber.parameters);
  }
}