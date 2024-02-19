const guests: Array<string> = ["Muhammad Waqar", "Muahmmad Dawar", "Muhammad Qasim", "Muhammad Umer", "Muhammad Usman", "Muhammad Jawade", "Muhammad Uzair" ];
//---soory guest statments---//
console.log("Shrinking Guest List: You just found out that your new dinner table won`t arrive in time for the dinner, and you have space for only two guests.");
///--------
let limitedGuest:Array<string> = guests.slice(0,2)
//--------
guests.pop()
guests.pop()
//---
console.log(`updated Guest List ${guests}`)
//-----

const invitation  = (guests:Array<string>):void => {
    for (const guest of guests) {
        console.log(`Dear ${guest},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]\n`)
    }
}
invitation(limitedGuest)