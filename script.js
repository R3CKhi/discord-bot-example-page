
/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints a message in the browser's dev tools console
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
console.log("Yoksa Sendemi Bizden Birisin 🌎");
// Popup Al
var modal = document.getElementById('myModal');

// Kipi açan düğmeyi al
var btn = document.getElementById("myBtn");

// Kipi kapatan <span> öğesini edinin
var span = document.getElementsByClassName("close")[0];

// Kullanıcı düğmeyi tıklattığında
btn.onclick = function() {
    modal.style.display = "block";
}

// Kullanıcı <span> (x) düğmesini tıkladığında, popup
span.onclick = function() {
    modal.style.display = "none";
}

// Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}