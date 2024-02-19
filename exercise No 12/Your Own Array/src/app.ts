//write a favorite car names
const carName:string[]= ["supera", "Pagani Huayra", "Bugatti Chiron", "Tesla", "Koenigsegg Agera RS"];

const printFavouriteCarName = (carName:string[]):void => {
   for(let favCar of carName){
    console.log(`my Favourite Car Name is ${favCar}`)
   }
}
printFavouriteCarName(carName);