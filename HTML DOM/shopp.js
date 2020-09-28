const ul = document.getElementsByTagName("ul");
// const line = document.createElement("li");
// //const lineText = document.createTextNode("Onion");
// //line.appendChild(lineText);
//     line.innerHTML = "Onion";
//     ul[0].appendChild(line);

//     line.innerHTML = "Broccoli";
//     ul[1].appendChild(line);

const createX= function (i) {
    document.createElement("button");
    X.innerHTML = "X";
    ul[i].appendChild(X);
 }
 const createList = function ([i], text) {
    var line = document.createElement("li");
    line.innerHTML = text;
    ul[i].appendChild(line);
 }
   createList( [0],"Onion");

   createList ([0],"broccoli")

   createList ([0],"milk")
