import { starships } from "./starships.js";
let myStarship = starships;
//console.log("Starship list", starships);
var containerDiv = document.getElementById('cardContainer');
var shipSelectorDiv = document.getElementById('shipselector');
var remainingShipOptions = ["select a ship"];

// APP OBEJCT //////////////////////////////////////////////////////////
var app = {

	starships: {},

	starshipCardIndex: 0,

    addNewStarshipSelector: function (options) {
        var self = this;
        var starshipSelector = document.createElement("SELECT");
        starshipSelector.setAttribute("id", "selectedShip");

        starshipSelector.addEventListener('change', function(event) {
			var starshipName = event.srcElement.value;
			var starship = {};

			var i;
			for (i=0; i < self.starships.length; i++) {
				if (self.starships[i].name == starshipName) {
					starship = self.starships[i];
				}
			}

			let card = self.addStarshipCard(starship, self.starshipCardIndex);
			document.getElementById('cardContainer').appendChild(card);
			self.addFlipListeners(self.starshipCardIndex);
        });

        options.forEach(function (starshipName) {
            var option = document.createElement("OPTION");
            option.setAttribute("value", starshipName);
            option.setAttribute("label", starshipName);
            starshipSelector.appendChild(option);
        })
        return starshipSelector;
	},

	addStarshipCard: function (starship, index) {
		var sceneDiv = document.createElement('DIV'); //creates a <div></div>
		sceneDiv.setAttribute('class', 'scene');  //sets the class for the <div class="scene"></div>
		var cardDiv = document.createElement('DIV');  //creates a <div></div>
		cardDiv.setAttribute("class", 'card');   //sets the class for the <div class="card"></div>
		cardDiv.setAttribute("id", 'card' + index);  // sets the id  <div class="card" id="card + index"></div> 
		var cardFront = document.createElement('DIV');  //creates a <div></div>
		var cardBack = document.createElement('DIV');   //creates a <div></div>
		cardFront.setAttribute("class", 'card__face card__face--front');   //sets the class for the <div class="card__face card__face--front"></div>
		cardBack.setAttribute("class", 'card__face card__face--back');   //sets the class for the <div class="card__face card__face--back"></div>
		cardBack.appendChild(this.addStarshipStats(starship))  //takes the starship name and displays it <div class="card__face card__face--back">starship name</div>
		cardFront.appendChild(this.addStarshipImage(starship));  //adds the starship image to the front <div class="card__face card__face--front"><img src="starshipapiindex"></div>
		cardDiv.appendChild(cardFront);   //adds cardFront to cardDiv <div class="card" id="card + index"><div class="card__face card__face--front"><img src="starshipapiindex"></div></div> 
		cardDiv.appendChild(cardBack);    //adds cardBack to cardDiv <div class="card" id="card + index"><div class="card__face card__face--front"><img src="starshipapiindex"></div><div class="card__face card__face--back">starship name</div></div> 
		sceneDiv.appendChild(cardDiv);    //adds cardDiv to sceneDiv <div class="scene"><div class="card" id="card + index"><div class="card__face card__face--front"><img src="starshipapiindex"></div><div class="card__face card__face--back">starship name</div></div></div>
		return sceneDiv;   
	},
	
	
	addStarshipImage: function (starship) {
		var starshipImage = document.createElement("IMG");
		var starshipNumber = starship.url.substring(31);
		starshipNumber = starshipNumber.substring(0, starshipNumber.indexOf('/'));
		var starshipJpg = starshipNumber + '.jpg'
		starshipImage.setAttribute("src", "https://starwars-visualguide.com/assets/img/starships/" + starshipJpg);
		starshipImage.setAttribute("width", "200");
		starshipImage.setAttribute("height", "150");
		starshipImage.setAttribute("alt", starship.name);
		return starshipImage;
	},
	
	addFlipListeners: function (index) {
	   var card = document.getElementById('card' + index);
	   card.addEventListener('click', function() {
		   card.classList.toggle('is-flipped');
	   })
	},
	
	addStarshipStats: function (starship) {
		var starshipStats = document.createElement('DIV');
		var starshipName = document.createElement("H3");
		var starshipCost = document.createElement("P");
		var starshipCrew = document.createElement("P");
		var starshipClass = document.createElement("P");
		starshipName.innerHTML = starship.name;
		starshipCost.innerHTML = "Cost: " + starship.cost_in_credits;
		starshipCrew.innerHTML = "Crew: " + starship.crew;
		starshipClass.innerHTML = "Class: " + starship.starship_class;
		starshipStats.appendChild(starshipName);
		starshipStats.appendChild(starshipCost);
		starshipStats.appendChild(starshipCrew);
		starshipStats.appendChild(starshipClass);
		return starshipStats;
	}

};
// END OF APP OBJECT /////////////////////////////////////////////////

app.starships = starships;

starships.forEach(function (starship, index) {
    if (index < 25) {
	   containerDiv.appendChild(app.addStarshipCard(starship, index));
	   app.starshipCardIndex++;
    } else {
        remainingShipOptions.push(starship.name);
    }
})

starships.forEach(function (starship, index) {
    if (index < 25) {
       app.addFlipListeners(index);
    }
});

shipSelectorDiv.appendChild(app.addNewStarshipSelector(remainingShipOptions));
