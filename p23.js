function stringMatch(string1, string2){
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        console.log("Please enter valid string!!");
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

let input1 = "John";
let input2 = "ohn";

let result = stringMatch(input1, input2);
console.log(result);