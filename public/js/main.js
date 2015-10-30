var matrix = document.getElementById('matrix');
var context = matrix.getContext("2d");

matrix.height = window.innerHeight;
matrix.width = window.innerWidth;

var drop = [];
var font_size = 16;
var columns = matrix.width / font_size;
for (var i = 0; i < columns; i++) {
  drop[i] = 1;
}

function drow_matrix() {

  context.fillStyle = "rgba(0, 0, 0, 0.1)";
  context.fillRect(0, 0, matrix.width, matrix.height);

  context.fillStyle = "blue";
  context.font = font_size + "px";

  for (var i = 0; i < columns; i++) {
    var let = new Array('a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var random = Math.round(Math.random()*25);
    //number
    //context.fillText(Math.floor(Math.random() * 2), i * font_size, drop[i] * font_size);

    //letter
    context.fillText(let[random], i * font_size, drop[i] * font_size);

    if (drop[i] * font_size > (matrix.height * 2 / 3) && Math.random() > 0.85)
      drop[i] = 0;
    drop[i]++;
  }
}

setInterval(drow_matrix, 40);
