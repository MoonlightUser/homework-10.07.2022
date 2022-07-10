let stopFlag = false
while (!stopFlag){
    users.push(newUser()) 
    let filter = prompt("do you want filter?(Y/N)") == "Y" ? true : false
    giveUsers(filter, users)
    stopFlag = prompt("do you want to exit?(Y/N)") == "Y" ? true : false 
}

function newUser(){
    let newUser = {}
    newUser["name"] = prompt("ur name")
    newUser["secondName"] = prompt("ur second name")
    newUser["age"] = parseInt(prompt("ur age"))
    newUser["admin"] = prompt("Are u admin? (write Y/N)")
    newUser["filtr"] = filtreUser(newUser) 
    return newUser
}
function filtreUser(user){
    if (user.name.length > 2 && user.age < 32 && user.admin == "N"){
        for (let i in user.secondName){
            try {
                parseInt(user.secondName[i])
            }  
            catch{
                console.log(user);
                return false
            }
        }
        return true
    }
    return false
}

function giveUsers(filter, users){
    if (filter == false){
        for(let i in users){
            console.log(users[i]);
        }
    }
    else{
        for(let i in users){
            if (users[i].filtr == true) console.log(users[i]);
        }
    }
}