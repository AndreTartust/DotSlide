var items_item_dots = [
  {
    id: "dots_oreo",
	  status: "unlocked",
    unlock_level: 1,
    link: "http://pngimg.com/uploads/dot/dot_PNG39.png"
  }, {
    id: "dots_soul",
	  status: "locked",
    unlock_level: 2,
    link: "https://i.pinimg.com/originals/0e/13/71/0e13716ea1168b46f66da8c8670dbb59.png"
  }, {
    id: "dots_itachi",
	  status: "locked",
    unlock_level: 6,
    link: "https://vignette.wikia.nocookie.net/narutofanon/images/f/f5/Hokori_Eternal_Mangekyou_Sharingan.png/revision/latest?cb=20170317235509"
  }
];

function display_dots_skins() {
  for (var i in items_item_dots) {
	var item_status = items_item_dots[i].status;
	if(item_status === "unlocked") {
		var item_id = items_item_dots[i].id;
		var item_link = items_item_dots[i].link;
		document.getElementById("items_item_dots_line1").innerHTML += '<th><img id="' + item_id + '" /></th>'
		document.getElementById(item_id).src = item_link;
		document.getElementById(item_id).setAttribute('onclick','change_dot_skin(' + i + ')');
	} else if (item_status === "locked") {
		var item_link = "http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Dialog-Close-icon.png";
		document.getElementById("items_item_dots_line1").innerHTML += '<th><img src="' + item_link + '" /></th>'
	}
  }
}

function change_dot_skin(id) {
  var skin = items_item_dots[id].link;
  document.getElementById("skin_balloon").src = skin;
}

var items_item_backgrounds = [
  {
    id: "none",
	  status: "unlocked",
    unlock_level: 1,
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Libya_%281977-2011%29.svg/2000px-Flag_of_Libya_%281977-2011%29.svg.png"
  }, {
    id: "background_grass",
	  status: "locked",
    unlock_level: 4,
    link: "https://previews.123rf.com/images/ktbran/ktbran1105/ktbran110500003/9519672-grass-top-view--Stock-Photo.jpg"
  }, {
    id: "background_lava",
	  status: "locked",
    unlock_level: 12,
    link: "http://spiralgraphics.biz/packs/terrain_volcanic_gaseous/previews/Lava%20Cracks.jpg"
  }
];


function display_dots_backgrounds() {
  for (var i in items_item_backgrounds) {
	  var item_status = items_item_backgrounds[i].status;
	  if (item_status === "unlocked") {
		var item_id = items_item_backgrounds[i].id;
		var item_link = items_item_backgrounds[i].link;
		document.getElementById("items_item_backgrounds_line1").innerHTML += '<th><img id="' + item_id + '" /></th>'
		document.getElementById(item_id).src = item_link;
		document.getElementById(item_id).setAttribute('onclick','change_background_skin(' + i + ')');
  } else if (item_status === "locked") {
		var item_link = "http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Dialog-Close-icon.png";
		document.getElementById("items_item_backgrounds_line1").innerHTML += '<th><img src="' + item_link + '" /></th>'
	  }
  }
}

function change_background_skin(id) {
  if (items_item_backgrounds[id].id === "none") {
    document.getElementById("screen").style.backgroundImage = "none";
  } else {
    var skin = items_item_backgrounds[id].link;
    document.getElementById("screen").style.backgroundImage = "url(" + skin + ")";
  }
}

function items_preload() {
  display_dots_skins();
  display_dots_backgrounds();
}
