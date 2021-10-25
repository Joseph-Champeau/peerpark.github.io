//parking button
var btn = document.getElementById("findParking");

function findParking() {
    let location = prompt("Where would you like to find parking?");
    if (location.toLowerCase() == "ottawa") {
        window.location.href="map.html";
    }
    alert("Sorry, we do not have any parking in " + location + ". Please check back later!")
}

//rent button
function Rent() {
  document.getElementById("rent-p").classList.toggle("show");
}

//service button
function Service() {
  document.getElementById("serv-p").classList.toggle("show");
}
//membership button
function Membership() {
  document.getElementById("memb-p").classList.toggle("show");
}
