
function testClick() {
    const element = document.getElementById("name");
    element.value = "Bonjour à tous!";
}



var elements = document.getElementsByTagName("p");
var length = elements.length;
console.log(length);
for (var i = 0; i < length; i++) {
    elements[i].style.color = "red";
    console.log(elements[i].innerHTML);
}
var myLink = document.getElementById("link");
var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function (event) {
    alert(myLink.getAttribute("href"));
});