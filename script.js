var loop_time = 66;

var rose_point;
var dave_point = document.getElementById("dave");
var dave_frame = [
  "core loop [#]",
  "core loop [-]"
];

var date_block = [
  0, 0, 0, 0, 0, 0
];

date_block[5] = (1 << 3) | (1 << 0);
// console.log(date_block[5]);

var d = 0;
var r = 0;
function logic_call() {
  window.setTimeout(logic_call, loop_time);

  if (d + 1 < dave_frame.length)
    { d += 1; }
  else
    { d = 0; }
  r += 1;

  grepdata();

  dave_point.text = dave_frame[d];
  rose_point.innerText = pushline();
}

function init() {
  window.setTimeout(logic_call, loop_time);
  rose_point = document.getElementById("rose");

  pannelinit();
}
