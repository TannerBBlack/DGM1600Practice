import { starships } from "./starships.js";
//console.log("Starship list", starships);
var containerDiv = document.getElementById('cardContainer');

starships.forEach(function (starship, index) {
    if (index < 25) {
       containerDiv.appendChild(addStarshipCard(starship, index));
    }
})

starships.forEach(function (starship, index) {
    if (index < 25) {
       addFlipListeners(index);
    }
});

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
    cardBack.innerHTML = starship.name;   //takes the starship name and displays it <div class="card__face card__face--back">starship name</div>
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
