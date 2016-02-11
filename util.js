var p_width = 11;
var p_height = 12;

var pannel;
function pannelinit() {
  pannel = [];
  // p_width = Math.floor(window.innerWidth / 42);
  // p_height = Math.floor(window.innerHeight / 44);

  for (var n_x = 0; n_x < p_width; n_x++) {
    var pannel_y = [];
    for (var n_y = 0; n_y < p_height; n_y++) {
      // pannel_y.push(Math.floor(Math.random() * 4));
      pannel_y.push(3);
    }
    pannel.push(pannel_y);
  }

  fillBlock(8, 0, 3, 12, base_pattern);
}

function setPoint(x, y, v)
  { pannel[x][y] = v; }

function setBlock(x, y, w, h, v) {
  for (var n_x = 0; n_x < w; n_x++) {
    for (var n_y = 0; n_y < h; n_y++) {
      setPoint(x + n_x, y +n_y, v);
    }
  }
}

function fillBlock(x, y, w, h, v) {
  w--; h--;

  setPoint(x, y, v[0]);
  setPoint(x + w, y, v[2]);
  setPoint(x, y + h, v[6]);
  setPoint(x + w, y + h, v[8]);

  setBlock(x, y + 1, 1, h - 1, v[3]);
  setBlock(x + w, y + 1, 1, h - 1, v[5]);
  setBlock(x + 1, y, w - 1, 1, v[1]);
  setBlock(x + 1, y + h, w - 1, 1, v[7]);
  setBlock(x + 1, y + 1, w - 1, h - 1, v[4]);
}

function grepdata() {
  for (var n_x = 0; n_x < 8; n_x++) {
    var n = date_block[5].toString(2);
    while (n.length < 8) { n = "0" + n; }
    var nn = parseInt(n[n_x]);

    switch (nn) {
      case 0:
          setPoint(n_x, 11, 3);
        break;
      case 1:
          setPoint(n_x, 11, 0);
        break;
      default: break;
    }
  }
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
