var balloon = document.getElementById("balloon");
var field_x_min = 4;
var field_y_min = 9;

score = 0;

balloon.onmouseover = function() {
  locate();
}

function start() {
  document.getElementById("starting_screen").style.display = "block";
  document.getElementById("time_left").textContent = 20;
  document.getElementById("score_count").textContent = 0;
  var timeleft = 3;
  score = 0;
  var loadingTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdown").textContent = timeleft;
    if(timeleft < 0) {
        clearInterval(loadingTimer);
    } else if (timeleft <= 0) {
      clearInterval(loadingTimer);
      document.getElementById("starting_screen").style.display = "none";
      document.getElementById("profile_display_level").style.display = "none";
      balloon.style.left = "50%";
      balloon.style.top = "50%";
      balloon.style.display = "block";
      game_timer();
      document.getElementById("countdown").textContent = 3;
    }
  },1000);
}

function locate() {
  var position_x = Math.floor(Math.random() * (100 - field_x_min + 1)) + field_x_min;
  var position_y = Math.floor(Math.random() * (100 - field_y_min + 1)) + field_y_min;
  var pos_x = "calc(" + position_x + "% - 50px)"
  var pos_y = "calc(" + position_y + "% - 50px)"
  balloon.style.left = pos_x;
  balloon.style.top = pos_y;
  score_count();
  //console.log(pos_x + " : " + pos_y);
}

function score_count() {
  score++;
  document.getElementById("score_count").textContent = score;
}

function game_timer() {
  var timeleft = 20;
  var gameTimer = setInterval(function(){
    timeleft--;
    document.getElementById("time_left").textContent = timeleft;
    if(timeleft < 0) {
        clearInterval(gameTimer);
    } else if (timeleft <= 0) {
      clearInterval(gameTimer);
      balloon.style.display = "none";
      count_level_points();
      document.getElementById("game_ended_score").textContent = score;
      document.getElementById("game_over").style.display = "block";
      document.getElementById("profile_display_level").style.display = "block";
    }
  },1000);
}
