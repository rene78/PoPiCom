# Website
[![Favicon](img/android-chrome-192x192.png)](https://rene78.github.io/PopComPics/)

# Purpose
PopComPics (**Pop**ular **Com**mons **Pics**) shows you how many times each picture of a certain Commons user has been utilized in Wikimedia projects like Wikipedia, Wikidata, Wikivoyage and others.
![Picture of App][screenshot]

[screenshot]: img/mockup.png "Picture of the App"

# Technical Details
I used Webcomponents with the pubsub pattern according to [Peter Carroll's repository](https://github.com/petercz1/todo_no_frameworks). Thanks very much, Peter! Admittedly pubsub doesn't really make sense on such a simple app, but I just wanted to get a better understanding on how to set it up. A disadvantage of this approach seems to be that the array received from the API call has to be traversed multiple times in order to get all needed infos for each web component - not very efficient.