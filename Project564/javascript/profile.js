level = 1;
level_points = 0;

points_to_level_up = 35;

mystery_coin = 0;

function count_level_points() {
  level_points = level_points + score;
  if (level_points >= points_to_level_up) {
    level_up();
  }
}

function level_up() {
  if (level_points >= points_to_level_up) {
    points_to_level_up = points_to_level_up * 2;
    level++;
    mystery_coin++;
    upgrade();
    if (level_points >= points_to_level_up) {
      while (level_points >= points_to_level_up){
        points_to_level_up = points_to_level_up * 2;
        level++;
        mystery_coin++;
        upgrade();
      }
    }
  }
}

function upgrade() {
  document.getElementById("profile_level").innerHTML = level;
  document.getElementById("mystery_coins").innerHTML = mystery_coin;
  document.getElementById("items_item_backgrounds_line1").innerHTML = "";
  document.getElementById("items_item_dots_line1").innerHTML = "";
  for(var i in items_item_dots) {
    if (items_item_dots[i].status === "locked") {
      if (items_item_dots[i].unlock_level <= level) {
        items_item_dots[i].status = "unlocked";
        var item_id = items_item_dots[i].id + "_new";
    		var item_link = items_item_dots[i].link;
    		document.getElementById("new_items_table").innerHTML += '<th><img id="' + item_id + '" /></th>'
    		document.getElementById(item_id).src = item_link;
      }
    }
  }
  for(var i in items_item_backgrounds) {
    if (items_item_backgrounds[i].status === "locked") {
      if (items_item_backgrounds[i].unlock_level <= level) {
        items_item_backgrounds[i].status = "unlocked";
        var item_id = items_item_backgrounds[i].id + "_new";
    		var item_link = items_item_backgrounds[i].link;
    		document.getElementById("new_items_table").innerHTML += '<th><img id="' + item_id + '" /></th>'
    		document.getElementById(item_id).src = item_link;
      }
    }
  }
  display_dots_skins();
  display_dots_backgrounds();
  document.getElementById("level_up_new_level").innerHTML = level;
  document.getElementById("level_up_notification_blur").style.display = "block";
  document.getElementById("level_up_notification").style.display = "block";
}

function profile_preload() {
  document.getElementById("profile_level").innerHTML = level;
  document.getElementById("mystery_coins").innerHTML = mystery_coin;
}
