if (document.getElementById("adblock")!=null) {
		//adblock off
	}else{
		//adblock on
		var ads = document.getElementsByClassName("ads");
		for (var z = 0; z < ads.length; z++) {
			ads[z].innerHTML = '<img class="pleasesir" src="https://github.com/charlybs/charlybs.github.io/blob/master/images/whitelist.jpg?raw=true" alt="Please sir, I LOVE YOU."/>';
		}
	}
