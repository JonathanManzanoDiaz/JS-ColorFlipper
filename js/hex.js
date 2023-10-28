let colorBtn = document.getElementById("colorBtn");
let main = document.getElementById("main");
function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
colorBtn.onclick = function () {
  let nameColor = randomColor();
  document.getElementById("color").innerHTML = `${nameColor}`;
  main.style.backgroundColor = `${nameColor}`;
};
