const numbers:Array<number>= [1,2,3,4,5,6,7,8,9];
for (const number of numbers) {
    let oridinalEnding:string;
    if (number === 1) {
        oridinalEnding = "st"
    }else if (number === 2) {
        oridinalEnding = "nd"
    }else if (number === 3) {
        oridinalEnding = "rd"
    }else{
        oridinalEnding = "th"
    }
    console.log(`${number}${oridinalEnding}`) 
}