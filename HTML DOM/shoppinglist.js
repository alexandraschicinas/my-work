const add = document.getElementById("add");
const input = document.getElementById("input");
const ul = document.querySelector("ul");
const remove = document.getElementById ("remove");

// function inputLength(){
//     return input.value.length;
// }

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
// }

// function deleteListElement() {
//     var remove = document.createElement("button");
//     remove.appendChild(document.createTextNode("button"));
//     li.appendChild(remove); 
// }

// add.addEventListener("click", function() {
//     if (inputLength() > 0) {
//         createListElement();      
//     }
//      if (input.value.length > 0) {
//        deleteListElement();
//      }
//      input.value ="";

// })

// input.addEventListener("keypress", function(event) {
//     if (inputLength() > 0 && event.keyCode === 13) {
//         createListElement();
//     }
//     if (inputLength() > 0) {
//         deleteListElement();
//      }
//      input.value ="";
// })
const newLi = document.createElement("li");
newLi.innerHTML = "Onion";
ul.appendChild(newLi);


add.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);      
    }
     if (input.value.length > 0) {
        var remove = document.createElement("button");
        remove.appendChild(document.createTextNode("X"));
        li.appendChild(remove); 
     }
     input.value ="";

})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li); 
    }
    if (input.value.length > 0) {
        var remove = document.createElement("button");
        remove.appendChild(document.createTextNode("X"));
        li.appendChild(remove); 
     }
     input.value ="";
})
 