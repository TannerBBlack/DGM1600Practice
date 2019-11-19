// import { people } from './people.js';
// console.log(people)

// let tableBody = document.querySelector("#Pilots tbody");

// people.forEach(function (pilot) {
//     var row = document.createElement("tr");
//     var pilotCol = document.createElement("td");
//     var starshipsCol = document.createElement("td");

//     if (pilot.starships.length == 0) {
//         starshipsCol.appendChild(document.createTextNode("N/A"));
//     } else {
//         var starships = [];
//         var i;
//         for(i = 0; i < pilot.starships.length; i++) {
//             fetch(pilot.starships[i])
//             .then(res => res.json())
//             .then(res => {
//                 starships.push(res.name);
//                 starshipsCol.appendChild(document.createTextNode(starships));
//             });
//         }
//     }

//     pilotCol.appendChild(document.createTextNode(pilot.name));

//     row.appendChild(pilotCol);
//     row.appendChild(starshipsCol);

//     tableBody.appendChild(row);
// });

// //using a returned async data. May need to add code somewhere...
// let allSenators = []
// const theData = getAPIData('senators.json').then(data => {
//     allSenators = data.results[0].members
// })

// //rep/dem filter 
// const republicans = allSenators.filter(senator => senator.party === 'R')
// const demacrates = allSenators.filter(senator => senator.party === 'D')

// console.log(republicans, demacrates)

// const container = document.querySelector('.container')

// function populateDOM(senatorArray) {
//     let card = document.createElement('div')
//     card.setAttribute('class')
// }
//video at 14:15

// better card code
// on document ready event 
//      getData()
//      create from the loop of the array elements that match the cards with the senator names 
//      create from the loop the add listener event for the click 
var card1 = document.getElementById('card1');
card1.addEventListener( 'click', function() {
//  getData();
  console.log('clicked it');
  card1.classList.toggle('is-flipped');
});

var card2 = document.getElementById('card2');
card2.addEventListener( 'click', function() {
//  getData();
  console.log('clicked it');
  card2.classList.toggle('is-flipped');
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
function getData() {
    readTextFile("senators.json", function(text){
        var data = JSON.parse(text);
        var senate = data.results[0].members;
        for (var i=0; i < senate.length; i++) {
             console.log(senate[i].first_name + ' ' + senate[i].last_name);
        }
        console.log(data);
    });
}
    