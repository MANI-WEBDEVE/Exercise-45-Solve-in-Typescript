const citiesCountry = (city:string , country:string ):string => {
    return (`My city ${city} and I Love ${country}`)
}
let city1:string = citiesCountry("Karachi", "Pakistan");
let city2:string = citiesCountry("Alaska", "USA");
let city3:string = citiesCountry("Mumbai", "India");
//-------------------------
console.log(city1);
console.log(city2);
console.log(city3);