Website: [PopComPics](https://rene78.github.io/PopComPics/)

This web app shows you how many times each picture of a certain user has been used on all Wikimedia projects.

![Picture of App][screenshot]

[screenshot]: img/mockup.png "Picture of the App"

I used Webcomponents with the pubsub pattern according to [Peter Carroll's repository](https://github.com/petercz1/todo_no_frameworks).Thanks very much, Peter! Admittedly pubsub doesn't really make sense on such a simple app, but I just wanted to get a better understanding on how to set it up. A disadvantage of this approach seems to be that the array received from the API call has to be traversed multiple times in order to get all needed infos - not very efficient.