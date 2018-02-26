var main_menu =  document.getElementById("menu_main");
var game_menu =  document.getElementById("menu_game");
var game_over = document.getElementById("game_over");

document.getElementById("menu_main_play").onclick = function() {
  main_menu.style.display = "none";
  game_menu.style.display = "block";
}

document.getElementById("menu_game_back").onclick = function() {
  main_menu.style.display = "block";
  game_menu.style.display = "none";
}

document.getElementById("menu_game_easy").onclick = function game_easy() {
  main_menu.style.display = "block";
  game_menu.style.display = "none";
  document.getElementById("extra_menu").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("open_gambling").style.display = "none";
  start();
}

document.getElementById("game_over_menu").onclick = function() {
  game_over.style.display = "none";
  main_menu.style.display = "block";
  document.getElementById("extra_menu").style.display = "block";
  document.getElementById("open_gambling").style.display = "block";
  document.getElementById("menu").style.display = "block";
}

document.getElementById("game_over_restart").onclick = function() {
  game_over.style.display = "none";
  start();
}

function items_open() {
  document.getElementById("items").style.display = "block";
}

function items_close() {
  document.getElementById("items").style.display = "none";
  document.getElementById("items_item").style.display = "none";
  document.getElementById("items_banner").style.display = "block";
}

document.getElementById("items_menu_dots").onclick = function() {
  document.getElementById("items_banner").style.display = "none";
  document.getElementById("items_item").style.display = "block";
  document.getElementById("items_item_cursors").style.display = "none";
  document.getElementById("items_item_backgrounds").style.display = "none";
  document.getElementById("items_item_dots").style.display = "block";
}

document.getElementById("items_menu_cursors").onclick = function() {
  document.getElementById("items_banner").style.display = "none";
  document.getElementById("items_item").style.display = "block";
  document.getElementById("items_item_backgrounds").style.display = "none";
  document.getElementById("items_item_dots").style.display = "none";
  document.getElementById("items_item_cursors").style.display = "block";
}

document.getElementById("items_menu_backgrounds").onclick = function() {
  document.getElementById("items_banner").style.display = "none";
  document.getElementById("items_item").style.display = "block";
  document.getElementById("items_item_cursors").style.display = "none";
  document.getElementById("items_item_dots").style.display = "none";
  document.getElementById("items_item_backgrounds").style.display = "block";
}

document.getElementById("level_up_notification_blur").onclick = function() {
  document.getElementById("level_up_notification_blur").style.display = "none";
  document.getElementById("level_up_notification").style.display = "none";
  document.getElementById("new_items_table").innerHTML = "";
}

function open_mystery_box_window() {
  document.getElementById("open_mystery_box").style.display = "block";
  document.getElementById("hi_lo_game").style.display = "none";
}

function close_mystery_box_window() {
  document.getElementById("open_mystery_box").style.display = "none";
  document.getElementById("hi_lo_game").style.display = "block";
}

function open_gambling() {
  document.getElementById("gambling").style.display = "block";
}

function gambling_close() {
  document.getElementById("gambling").style.display = "none";
}
