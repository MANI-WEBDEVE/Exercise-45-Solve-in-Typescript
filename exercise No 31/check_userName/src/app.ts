const currentUser:Array<string> =["Muhammad Inam", "Muhammad Tahir", "Qazi Muzzamil", "Habib Ali"];
const newUser:Array<string> = ["Ahade Ali", "Muhammad Mani","muhammad inam","MUHAMMAD INAM", "Muhammad Inam", "Muhammad Tahir"];
for (const newUsers of newUser) {
    let dulplicate:boolean = false;
    for (const currentUsers of currentUser) {
        if (newUsers.toLowerCase() === currentUsers.toLowerCase()) {
            dulplicate = true
            break
        }
    }
    if (dulplicate) {
        console.log(`Sorry, the username '${newUsers}' is already taken. Please enter a new username`)
    }else{
        console.log(`this user name avaliable ${newUsers}`)
    }
}