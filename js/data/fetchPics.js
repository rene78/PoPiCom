//fetches pictures from API.

export default new class FetchPics { //"new", because we want to export an instance of the class

  constructor() {
    // this.fetchData = this.fetchData.bind(this);
  }

  fetchData(input) {
    console.log("You entered this text: " + input);

  }
}