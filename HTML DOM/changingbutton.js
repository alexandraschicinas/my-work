let button = document.getElementById("btn");
button.addEventListener("click", changeText);
var count = 0;
function changeText () {
    count += 1 
        if (count === 2 ){
             button.innerHTML = "Click me again!"
    } else if ( count === 3 ) {
        button.innerHTML = "Thank you, goodbye!"
    } else if (count === 4) {
        button.style.display = "none";
    }
}
    
