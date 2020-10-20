function getTextArea(){
    let text = document.getElementById("myTextArea").value;
    return text;
}
document.getElementById("myDiv").innerHTML = getTextArea();

console.log(1+10+'1.1' == "11" * 10.1);
