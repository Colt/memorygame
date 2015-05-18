// JS FUN

	var totalClick = 0;
	var freq = {};
	var chars = ["img/card1.jpg", "img/card2.jpg", "img/card3.jpg", "img/card4.jpg",
						"img/card5.jpg", "img/card6.jpg"];


	var resetClassDivs = function(x) {
  		setTimeout(function(){
  			x.className = "rotateY";
  		}, 1000);
	};

	var resetBubble = function(x) {
  		setTimeout(function(){
  			x.className = "bubble";
  		}, 1900);
	};

  		
	var shineIt = function(square1, square2, square3) {
  			square1.classList.add("shine");
  			if (square2) {square2.classList.add("shine");}
  			if (square3) {square3.classList.add("shine");}
  			removeShine(square1, square2, square3);
	};


	var removeShine = function(square1, square2, square3) {
  		setTimeout(function(){
  			square1.classList.remove("shine");
  			if (square2) {square2.classList.remove("shine");}
  			if (square3) {square3.classList.remove("shine");}
  		}, 900);
	};



	
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

var backWin = document.querySelector(".winnerOuter");
var frontWin = document.querySelector(".winnerInner");

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
		image.classList.add("rotateY"); // CHEAT LINE (comment it out if you wanna see all the cards)

	} //for loop


	var divs = document.querySelectorAll("div");
	var cardType;
	var count = 0;
	var divsCalled = [];
	var score = document.querySelector(".score");
	var won = document.querySelector(".won");
	var scoreNum = 0;
	var wonNum = 0;
	score.innerHTML = scoreNum;
	won.innerHTML = wonNum;

	var prisma = [[0], [4,1], [8,5,2], [19,6,3], [10,7], [11]];
							
		
	(function theLoop (i) {
  		setTimeout(function () {
  			if (i === 6) {
    			shineIt(divs[0]);
    		} else if (i === 5) {
    			shineIt(divs[4], divs[1]);
    		} else if (i === 4) {
    			shineIt(divs[8], divs[5], divs[2]);
    		}  else if (i === 3) {
    			shineIt(divs[9], divs[6], divs[3]);
    		}  else if (i === 2) {
    			shineIt(divs[10], divs[7]);
    		}  else if (i === 1) {
    			shineIt(divs[11]);
    		}  
 		   if (--i) {          
  				 theLoop(i);       
 			}
  		}, 150);
	})(6);





	for(var j=0; j < divs.length; j++) {
		divs[j].addEventListener("click", function() {
		var image = this.querySelector("img");
		image.classList.add('revealImg');
		image.classList.add("called");
		score.innerHTML = scoreNum;
		won.innerHTML = wonNum;

		currentType = image.getAttribute("src");

			if(count === 0) {
				cardType = currentType;
				divsCalled.push(cardType);
				count += 1;
			} else if(currentType !== cardType) {
				var allCalled = document.querySelectorAll(".called");
					for(var x=0; x < allCalled.length; x++) {
						allCalled[x].classList.add("hideImg");
						resetClassDivs(allCalled[x]);
					}
				divsCalled = [];
				count = 0;
				
				if(!scoreNum <= 0) {
					scoreNum -= 3;
					score.innerHTML = scoreNum;
				}

			} else if(currentType === cardType) {
				divsCalled.push(cardType);
				count = 0;
				scoreNum += 10;
				score.innerHTML = scoreNum;
			}//if statement


			if(divsCalled.length === 12) {
				backWin.classList.add("fadeIn");
				frontWin.classList.add("bounce");
				wonNum += 1;
				won.innerHTML = wonNum;
			}
	});

} //for loop

	backWin.addEventListener("click", function() {
		backWin.className = "winnerOuter";
		frontWin.className = "winnerInner";
	});

	frontWin.addEventListener("click", function() {
		frontWin.className = "winnerInner";
		backWin.className = "winnerOuter";
	});


var squeeze = document.querySelector(".squeeze");

	squeeze.addEventListener("click", function() {
		var helloBubble = document.querySelector("#hello");
		helloBubble.classList.add("float");
		resetBubble(helloBubble);
	});




