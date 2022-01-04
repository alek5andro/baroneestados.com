
var images = ["{% static 'bg/wp.jpg' %}",
"{% static 'bg/wp1.jpg' %}",
"{% static 'bg/wp1.jpg' %}",
"{% static 'bg/wp1.jpg' %}",
"{% static 'bg/wp1.jpg' %}",
"{% static 'bg/wp1.jpg' %}",
"{% static 'bg/wp1.jpg' %}"
];

var img = document.getElementById("img");

function displayImage(x) {
img.style.backgroundImage = "url(" + images[x] + ")";
img.innerText = images[x];
}
function startTimer() {
var x = 0;
displayImage(x);
setInterval(function() {
  x = x + 1 >= images.length ? 0 : x + 1;
  displayImage(x);
}, 3000);
}