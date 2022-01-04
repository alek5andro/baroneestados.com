
var images = ["bg/wp.jpg",
"bg/wp1.jpg",
"bg/wp3.jpg",
"bg/wp4.jpg",
"bg/wp5.jpg",
"bg/wp6.jpg",
"bg/wp7.jpg",
"bg/wp9.jpg",
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
