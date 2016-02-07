var loop_time = 66;

var dave_point = document.getElementById("dave");
var dave_frame = [
  "core loop [#-----]",
  "core loop [-#----]",
  "core loop [--#---]",
  "core loop [---#--]",
  "core loop [----#-]",
  "core loop [-----#]"
];

var rose_point;


var d = 0;
var r = 0;
function logic_call() {
  rose_point = document.getElementById("rose");
  // rose_point.innerText = "dick";

  window.setTimeout(logic_call, loop_time);

  if (d + 1 < dave_frame.length)
    { d += 1; }
  else
    { d = 0; }
  r += 1;

  dave_point.text = dave_frame[d];
  rose_point.innerText = pushline();
  // pannelinit();
}

function init() {
  window.setTimeout(logic_call, loop_time);


  pannelinit();
}
