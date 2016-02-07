var p_width;
var p_height;

var pannel;
function pannelinit() {
  pannel = [];
  p_width = Math.floor(window.innerWidth / 42);
  p_height = Math.floor(window.innerHeight / 44);

  for (var n_x = 0; n_x < p_width; n_x++) {
    var pannel_y = [];
    for (var n_y = 0; n_y < p_height; n_y++) {
      pannel_y.push(Math.floor(Math.random() * 4));
    }
    pannel.push(pannel_y);
  }

  // setBlock(15, 0, 1, 16, 0);
  // setBlock(13, 0, 1, 16, 10);
  // setBlock(14, 0, 1, 16, 12);
  // setBlock(15, 0, 1, 16, 11);
  // setPoint(13, 0, 4);
  // setPoint(15, 0, 5);
  // setPoint(14, 0, 6);
  // setPoint(13, 15, 7);
  // setPoint(15, 15, 8);
  // setPoint(14, 15, 9);
}

function setPoint(x, y, v) {
  pannel[x][y] = v;
}

function setBlock(x, y, w, h, v) {
  for (var n_x = 0; n_x < w; n_x++) {
    for (var n_y = 0; n_y < h; n_y++) {
      setPoint(x + n_x, y +n_y, v);
    }
  }
}

function fillBlock(x, y, w, h, v) {
  setPoint(x, y, v[0]);
}

function pushline() {
  var line = "";
  for (var n_y = 0; n_y < p_height; n_y++) {
    for (var n = 0; n < 3; n++) {
      for (var n_x = 0; n_x < p_width; n_x++) {
        line += tile_type[pannel[n_x][n_y]][n];
      }
      line += "\n";
    }
  }
  return line;


}
