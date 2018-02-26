reward_categories = ["background", "dot"];
reward_list_backgrounds = ["background_lava", "none", "background_grass"];
reward_list_dots = ["dots_itachi", "dots_oreo", "dots_soul"];

hi_lo = "none";

function open_box() {
  if (mystery_coin >= 1) {
    mystery_coin--;
    document.getElementById("mystery_coins").innerHTML = mystery_coin;
    var randomNumber = Math.floor(Math.random()*reward_categories.length);
    if (reward_categories[randomNumber] === "background") {
      var random_background = Math.floor(Math.random()*reward_list_backgrounds.length);
      var price = reward_list_backgrounds[random_background];
      for(var i in items_item_backgrounds) {
        if (items_item_backgrounds[i].id === price) {
            items_item_backgrounds[i].status = "unlocked";
            document.getElementById("items_item_backgrounds_line1").innerHTML = "";
            display_dots_backgrounds();
        }
      }
      console.log(price);
    } else if (reward_categories[randomNumber] === "dot") {
      var random_dot = Math.floor(Math.random()*reward_list_dots.length);
      var price = reward_list_dots[random_dot];
      for(var i in items_item_dots) {
        if (items_item_dots[i].id === price) {
          items_item_dots[i].status = "unlocked";
          document.getElementById("items_item_dots_line1").innerHTML = "";
          display_dots_skins();
        }
      }
      console.log(price);
    }
  } else {
    console.log("Sorry, you dont have points top play!");
  }
}

function game_hi(event){
    event.preventDefault();
    hi_lo = "higher";
    document.getElementById("game_lo_b").style.backgroundColor = "lightgray";
    document.getElementById("game_hi_b").style.backgroundColor = "green";
};

function game_lo(event) {
    event.preventDefault();
    hi_lo = "lower";
    document.getElementById("game_hi_b").style.backgroundColor = "lightgray";
    document.getElementById("game_lo_b").style.backgroundColor = "green";
};

function hi_lo_generate(event) {
  event.preventDefault();
  var bet = document.getElementById('bet_value').value;
  if (bet <= mystery_coin) {
    if (hi_lo === "none") {
      console.log("You have to choose hi or lo first!");
    } else if (hi_lo === "higher") {
      generate_hi_lo_number(bet);
    } else if (hi_lo === "lower") {
      generate_hi_lo_number(bet);
    } else {
      console.log("You have to choose hi or lo first!");
    }
  } else {
    console.log("You don't have enough coins!");
  }
}

function generate_hi_lo_number(bet) {
  var number = Math.floor(Math.random() * 100) + 1;
  document.getElementById("number_rolled").innerHTML = number;
  var bet = Number(bet);
  if (number >= 50) {
    if (hi_lo === "higher") {
      mystery_coin = mystery_coin + bet;
    } else {
      mystery_coin = mystery_coin - bet;
    }
  } else if (number <= 50) {
    if (hi_lo === "lower") {
      mystery_coin = mystery_coin + bet;
    } else {
      mystery_coin = mystery_coin - bet;
    }
  }
  document.getElementById("mystery_coins").innerHTML = mystery_coin;
}
