
//Add some global variables for storing quotes data and topic that you select from dropdown and count from the dropdown.

var quotes = []; //declare quotes array
var topic = "love"; //set the topic by default as love
var count = "1"; //set the count by default as 1.

//Following is the function to select topic from dropdown and on change it will set the topic value to love, wisdom, motivational, humor as you select the topic.
function selectTopic() {
    this.topic = document.getElementById("topics").value;
}

//Following is the function to select the number of quotes you need to display.
function selectCount() {
    this.count = document.getElementById("count").value;

}


//Following is the function used to fetch the quotes data on load of the page. 
function responseReceivedHandler() {
    let value = ""; //define a variable with empty string to display the quotes data in the innerHTML of div.
    this.fetchQuotes(this.topic, this.count); //call the fetchQuotes function which fetches the api data defined next.

    //Now go through each item of the array of quotes to display them one by one in the ordered list.
    this.quotes.forEach((v, i) => { //forEach is used to go through each item in an array.
        value += `<li>${v.quote} _ ${v.source}</li>`; //Here we  have created the HTML that we would be displaying. According to the question we need to show the quote and an underscore and the source of quote.
    })
    document.getElementById("list").innerHTML = value; //append the quotes in the innrHTML of id="list" of the ol tag in the html.
}

//Following is the function to fetch the api data using xmlhttprequest or simple fetch function

function fetchQuotes(topic, count) {
    //Define the api endpoint you need to fetch data from.

    var URL = "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count;

    //Here request the data to be fetched using the xmlhttprequest method of fetch.
    fetch(URL).then(function (response) { //Here we are able to access the response of the api.
        //Now get the response with the json format of the quotes data.
        response.json().then(function (res) {
            //here we add the response data in the quotes array we declared globally.
            this.quotes = res;
        });
    });
}