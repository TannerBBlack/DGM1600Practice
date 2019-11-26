import { starships } from "./starships.js";
let myStarship = starships;
//console.log("Starship list", starships);
var containerDiv = document.getElementById('cardContainer');
var shipSelectorDiv = document.getElementById('shipselector');
var remainingShipOptions = ["select a ship"];



starships.forEach(function (starship, index) {
    if (index < 25) {
       containerDiv.appendChild(addStarshipCard(starship, index));
    } else {
        remainingShipOptions.push(starship.name);
    }
})

starships.forEach(function (starship, index) {
    if (index < 25) {
       addFlipListeners(index);
    }
});

//shipSelectorDiv.appendChild(addNewStarshipSelector(remainingShipOptions));
var app = {
    test: "Hello world !",
    testFunction: function () {
        console.log("called from test function");
    },
    addNewStarshipSelector: function (options) {
        var self = this;
        var starshipSelector = document.createElement("SELECT");
        starshipSelector.setAttribute("id", "selectedShip");

        starshipSelector.addEventListener('change', function() {
            self.testFunction();
        });

        options.forEach(function (starshipName) {
            var option = document.createElement("OPTION");
            option.setAttribute("value", starshipName);
            option.setAttribute("label", starshipName);
            starshipSelector.appendChild(option);
        })
        return starshipSelector;
    },
};

shipSelectorDiv.appendChild(app.addNewStarshipSelector(remainingShipOptions));

function addStarshipCard(starship, index) {
    var sceneDiv = document.createElement('DIV'); //creates a <div></div>
    sceneDiv.setAttribute('class', 'scene');  //sets the class for the <div class="scene"></div>
    var cardDiv = document.createElement('DIV');  //creates a <div></div>
    cardDiv.setAttribute("class", 'card');   //sets the class for the <div class="card"></div>
    cardDiv.setAttribute("id", 'card' + index);  // sets the id  <div class="card" id="card + index"></div> 
    var cardFront = document.createElement('DIV');  //creates a <div></div>
    var cardBack = document.createElement('DIV');   //creates a <div></div>
    cardFront.setAttribute("class", 'card__face card__face--front');   //sets the class for the <div class="card__face card__face--front"></div>
    cardBack.setAttribute("class", 'card__face card__face--back');   //sets the class for the <div class="card__face card__face--back"></div>
    cardBack.appendChild(addStarshipStats(starship))  //takes the starship name and displays it <div class="card__face card__face--back">starship name</div>
    cardFront.appendChild(addStarshipImage(starship));  //adds the starship image to the front <div class="card__face card__face--front"><img src="starshipapiindex"></div>
    cardDiv.appendChild(cardFront);   //adds cardFront to cardDiv <div class="card" id="card + index"><div class="card__face card__face--front"><img src="starshipapiindex"></div></div> 
    cardDiv.appendChild(cardBack);    //adds cardBack to cardDiv <div class="card" id="card + index"><div class="card__face card__face--front"><img src="starshipapiindex"></div><div class="card__face card__face--back">starship name</div></div> 
    sceneDiv.appendChild(cardDiv);    //adds cardDiv to sceneDiv <div class="scene"><div class="card" id="card + index"><div class="card__face card__face--front"><img src="starshipapiindex"></div><div class="card__face card__face--back">starship name</div></div></div>
    return sceneDiv;   
}


function addStarshipImage(starship) {
    var starshipImage = document.createElement("IMG");
    var starshipNumber = starship.url.substring(31);
    starshipNumber = starshipNumber.substring(0, starshipNumber.indexOf('/'));
    var starshipJpg = starshipNumber + '.jpg'
    starshipImage.setAttribute("src", "https://starwars-visualguide.com/assets/img/starships/" + starshipJpg);
    starshipImage.setAttribute("width", "200");
    starshipImage.setAttribute("height", "150");
    starshipImage.setAttribute("alt", starship.name);
    return starshipImage;
}

function addFlipListeners(index) {
   var card = document.getElementById('card' + index);
   card.addEventListener('click', function() {
       card.classList.toggle('is-flipped');
   })
}    

function addStarshipStats(starship) {
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

/*
function addNewStarshipSelector(options) {
    var self = this;
    var starshipSelector = document.createElement("SELECT");
    starshipSelector.setAttribute("id", "selectedShip");

    starshipSelector.addEventListener('change', function(event) {
        //console.log(event.srcElement.value);
        console.log(self.test);
    });

    options.forEach(function (starshipName) {
        var option = document.createElement("OPTION");
        option.setAttribute("value", starshipName);
        option.setAttribute("label", starshipName);
        starshipSelector.appendChild(option);
    })
    return starshipSelector;
}
*/
/*
document.querySelector('#shipSelector').addEventListener('onChange', () => {
    var shipIndex = 25;

    console.log(myStarship);
    var selectedElement = document.getElementById("selectedShip");
    var shipName = selectedElement.options[selectedElement.selectedIndex].value;
    console.log(shipName, shipIndex++);
})
*/

//<div>
//  <p>Cost: </p>
//  <p>Crew: </p>
//  <p>Class: </p>
//</div>