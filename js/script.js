
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

function insertRow() {
    var foo = document.getElementById('myTable').insertRow(0);
    var cell1 = foo.insertCell(0);
    var cell2 = foo.insertCell(1);
    cell1.innerHTML = "NvllLigneCellule1";
    cell2.innerHTML = "NvllLigneCellule2";
}