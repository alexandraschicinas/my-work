var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

const createList = function ( text) {
    var line = document.createElement("li");
    line.innerHTML = text;
    ul.appendChild(line);

    
 }
   createList( "Onion");

   createList ("Broccoli");

   createList ("Milk");

   createList ("Tomato");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
    input.value = "";
    
// CREATE AN ELEMENT
	var button =document.createElement("button"); 
// APPEND TEXT TO BUTTON
	button.appendChild(document.createTextNode("X"));
// APPEND BUTTON TO LIST
	li.appendChild(button);

	button.onclick=removeParent;
//THIS FUNCTION WILL DO THIS FOR EVERY BUTTON CREATED.
	
} 
function removeParent(event){
	event.target.parentNode.remove();
} 

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);