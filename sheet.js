var block = [
  "╔════╗",
  "║████║",
  "╚════╝"
];

var rocks = [
  "@@@///",
  "///@@@",
  "@@@///"
];

var empty = [
  "######",
  "######",
  "######"
];

var stripe = [
  "^_^_^_",
  "^_^_^_",
  "^_^_^_"
];


var tcl = [
  "╔═════",
  "║/////",
  "║/////"
];

var tcm = [
  "══════",
  "//////",
  "//////"
];

var tcr = [
  "═════╗",
  "/////║",
  "/////║"
];

var bcl = [
  "║/////",
  "║/////",
  "╚═════"
];

var bcm = [
  "//////",
  "//////",
  "══════"
];

var bcr = [
  "/////║",
  "/////║",
  "═════╝"
];

var mcl = [
  "║/////",
  "║/////",
  "║/////"
];

var mcm = [
  "//////",
  "//////",
  "//////"
];

var mcr = [
  "/////║",
  "/////║",
  "/////║"
];



var tile_type = [];
tile_type.push(block);    //0
tile_type.push(rocks);    //1
tile_type.push(empty);    //2
tile_type.push(stripe);   //3


tile_type.push(tcl);      //4
tile_type.push(tcr);      //5
tile_type.push(tcm);      //6

tile_type.push(bcl);      //7
tile_type.push(bcr);      //8
tile_type.push(bcm);      //9

tile_type.push(mcl);      //10
tile_type.push(mcr);      //11
tile_type.push(mcm);      //12


var base_pattern = [
  4,  6,  5,
  10, 12, 11,
  7,  9,  8
];
