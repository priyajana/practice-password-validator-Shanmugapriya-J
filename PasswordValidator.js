const readLine = require('readline-sync');


let password;
let isValid;

function checkPassword(pwd){
   // console.log("Checking pwd....");
    if(pwd.length >=8)
        {
            let upperCase = false;
            for(letter of password)
                {
                    if(letter === letter.toUpperCase()){upperCase = true;}
                }
            if(upperCase)
                {
                    let containsInt = false;
                    for(value of password)
                        {
                           //console.log(isNaN(Number(value)));
                            if(!isNaN(Number(value)))
                                {
                                    //console.log("Has Number!!");
                                    containsInt=true;
                                    return containsInt;
                                }
                        }
                    if(!containsInt)
                        {
                            console.log("The password must contain at least one number!");
                             return false;
                    }
                }
            else{
                console.log("The password must contain at least one uppercase letter!")
                return false;
            }
        }
    else
    {
        console.log("The password must be at least 8 characters long!");
        return false;
    }
    
}

do {
        password = readLine.question("Enter your password: ");
        isValid = checkPassword(password);
    } while(!isValid);

console.log("Password accepted !");


