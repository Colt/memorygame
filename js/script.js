// JS FUN

	var totalClick = 0;
	var freq = {};
	var chars = ["img/card1.jpg", "img/card2.jpg", "img/card3.jpg", "img/card4.jpg",
						"img/card5.jpg", "img/card6.jpg"];


function randomImage() {
	var count = 0;
		while(count < 1) {
		var rand = Math.floor(Math.random()*6);
			if (!freq[chars[rand]]) {
				freq[chars[rand]] = 1;
				count+=1;
			} else if (freq[chars[rand]] < 2) {
				freq[chars[rand]] = 2;
				count+=1;
			}//if statement
		} //while loop
	return chars[rand];
} //randomImage


// randomly select twice the same card

for (var i=0; i < 12; i++) {
		var tile = document.createElement("DIV");
		var imgTag = document.createElement("IMG");
		var body = document.querySelector(".center");

			body.appendChild(tile);
			tile.style.width = "200px";
			tile.style.float = "left";
			tile.style.height = "200px";
			tile.style.border = "1px solid #487890";
			tile.style.margin = "0.5px";
			tile.appendChild(imgTag);

			var image = tile.querySelector("img");
			image.setAttribute("src", randomImage());
			image.classList.add('hidden');
	} //for loop


	var divs = document.querySelectorAll("div");

	for(var i=0; i < divs.length; i++) {
		divs[i].addEventListener("click", function() {
		var image = this.querySelector("img");

		if(isSame && isSame !== image) {
			image.classList.add('revealImg');
			window.location.reload();
		} else if (!isSame) {
			image.classList.add('revealImg');
			var isSame = image;
		}
	});
} //for loop


