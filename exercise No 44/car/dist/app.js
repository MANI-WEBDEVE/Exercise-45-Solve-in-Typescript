"use strict";
function storeCar(manufacturer, modelName, ...args) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let [key, value] of args) {
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with the required information and additional name-value pairs
let car = storeCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2023]);
// Print the object returned by the function
console.log(car);
