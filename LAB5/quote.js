window.addEventListener("DOMContentLoaded", function () {
    document
        .querySelector("#fetchQuotesBtn")
        .addEventListener("click", function () {
            // Get values from drop-downs
            const topicDropdown = document.querySelector("#topicSelection");
            const selectedTopic =
                topicDropdown.options[topicDropdown.selectedIndex].value;
            const countDropdown = document.querySelector("#countSelection");
            const selectedCount =
                countDropdown.options[countDropdown.selectedIndex].value;

            // Get and display quotes
            fetchQuotes(selectedTopic, selectedCount);
        });
});

function fetchQuotes(topic, count) {
    document.querySelector("#quotes").innerHTML = "";
    let html = "";
    let URL = `http://cs.harding.edu/fmccown/zybooks/quotes/quotes.php?topic=${topic}&count=${count}`;
    let oList = document.createElement("ol");
    oList.setAttribute("id", "orderedList")
    for (let i = 0; i < count; i++) {
        responseReceivedHandler(URL, i, html);
    }
    document.querySelector("#quotes").append(oList);

}

function responseReceivedHandler(URL, index) {
    let req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.responseType = "json";
    req.addEventListener("load", function () {
        let jsonResp = req.response;
        let listItem = document.createElement("li");
        if (jsonResp["error"]){
            document.querySelector("#quotes").innerHTML = "";
            document.querySelector("#quotes").innerHTML = jsonResp["error"];
            return stop();
        }
        listItem.innerHTML =  `${jsonResp[index]["quote"]} - ${jsonResp[index]["source"]}`;

        document.querySelector("#orderedList").appendChild(listItem);
    })
    req.send();
}

