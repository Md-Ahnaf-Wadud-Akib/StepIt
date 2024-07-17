function stringMatch(string1, string2){
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        console.log("Please enter valid string!!");
        return false;
    }
    else{
        
        if(string1.includes(string2)){
            return true;
        }
        else{
            return false;
        }
    }
    
}

let input1 = "JavaScript";
let input2 = 23;

let result = stringMatch(input1, input2);
console.log(result);

function getCurrentDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(formattedDateTime);
}

getCurrentDateTime();
