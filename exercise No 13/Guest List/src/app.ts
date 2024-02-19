const guest:string[]= ["Muhammad Habib Ali", "Qazi Muzammil", "Muhammad Raza"];
//----
console.log(`${guest[2]} can't make it to the dinner `)

//----
let newguest:string = "Muhammad Ahmed" ;
//-----
guest[2] = newguest
//----
const invetation= (guest:string[]):void => {
    for (const invGuest of guest) {
        console.log(`Dear ${invGuest},\nYou are cordially invited to dinner. It would be an honor to have your presence.\nSincerely, [Muhammad Inam]`)
        
    }
}
invetation(guest)