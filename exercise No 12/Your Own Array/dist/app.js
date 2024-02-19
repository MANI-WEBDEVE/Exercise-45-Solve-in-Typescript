"use strict";
//write a favorite car names
const carName = ["supera", "Pagani Huayra", "Bugatti Chiron", "Tesla", "Koenigsegg Agera RS"];
const printFavouriteCarName = (carName) => {
    for (let favCar of carName) {
        console.log(`my Favourite Car Name is ${favCar}`);
    }
};
printFavouriteCarName(carName);
