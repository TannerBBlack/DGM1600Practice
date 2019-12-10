import { people } from './people.js';

let tableBody = document.querySelector("#Pilots tbody");

// looping through all the pilots and creating rows for the ones that have ships
people.forEach(function (pilot) {
    // checks if pilot has a ship
    if (pilot.starships.length > 0) {
        var row = document.createElement("tr");
        var pilotCol = document.createElement("td");
        var starshipsCol = document.createElement("td");

        // loop through pilot starships
        var i;
        for(i = 0; i < pilot.starships.length; i++) {
            // get starship info from api
            fetch(pilot.starships[i])
            // decodes json response from api
            .then(res => res.json())
            // take response and creates starship name and image
            .then(res => {
                starshipsCol.appendChild(document.createTextNode(res.name));
                starshipsCol.appendChild(addStarshipImage(res));
            });   
        }
        
        // creates and adds the pilot name and image to the column
        pilotCol.appendChild(document.createTextNode(pilot.name));
        pilotCol.appendChild(addPilotImage(pilot));

        // adds the pilot and starship columns to the row
        row.appendChild(pilotCol);
        row.appendChild(starshipsCol);

        //adds the row to the table
        tableBody.appendChild(row);
    }
});


function addPilotImage(pilot) {
    var pilotImage = document.createElement("IMG");
    var pilotNumber = pilot.url.substring(28);
    pilotNumber = pilotNumber.substring(0, pilotNumber.indexOf('/'));
    var pilotJpg = pilotNumber + '.jpg'
    pilotImage.setAttribute("src", "https://starwars-visualguide.com/assets/img/characters/" + pilotJpg);
    pilotImage.setAttribute("width", "120");
    pilotImage.setAttribute("height", "150");
    pilotImage.setAttribute("alt", pilot.name);
    pilotImage.setAttribute("class", "controlpilotimage");
    return pilotImage;
}

function addStarshipImage(starship) {
    var noImage = ["65", "59", "74", "49", "77", "64"];
    var starshipImage = document.createElement("IMG");
    var starshipNumber = starship.url.substring(31);
    starshipNumber = starshipNumber.substring(0, starshipNumber.indexOf('/'));
    var starshipJpg = starshipNumber + '.jpg'
    if (noImage.indexOf(starshipNumber) > -1) {
        starshipImage.setAttribute("src", "https://askleo.com/wp-content/uploads/2004/06/no_image-300x245.jpg");
    } else {
        starshipImage.setAttribute("src", "https://starwars-visualguide.com/assets/img/starships/" + starshipJpg);
    }
    starshipImage.setAttribute("width", "200");
    starshipImage.setAttribute("height", "150");
    starshipImage.setAttribute("alt", starship.name);
    starshipImage.setAttribute("class", "controlpilotimage");
    return starshipImage;
}
