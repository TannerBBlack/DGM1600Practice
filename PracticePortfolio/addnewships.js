// import { starships } from "./starships.js";
var shipIndex = 25;

function addAnotherShip(starships) {
    var selectedElement = document.getElementById("selectedShip");
    var shipName = selectedElement.options[selectedElement.selectedIndex].value;
    console.log(shipName, shipIndex++);
    console.log(starships);
}