const T_shirt = (size:string = "large" , message:string = "I love T-shirt"):void => {
    console.log(`my T-shirt size is ${size} and i like a ${message}`)
}
T_shirt();
//-------
T_shirt("medium");
//-------
T_shirt("small", "I Love Python")