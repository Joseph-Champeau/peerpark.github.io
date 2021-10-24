//parking button
var btn = document.getElementById("findParking");

function findParking() {
    let location = prompt("Where would you like to find parking?");
    alert("Sorry, we do not have any parking in " + location + ". Please check back later!")
}

//rent button
document.getElementById("rent-h").onclick = function() {Rent()};

function Rent() {
  document.getElementById("rent-p").classList.toggle("show");
}


//sevrice button


//membership button