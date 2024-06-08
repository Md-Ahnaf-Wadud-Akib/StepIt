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