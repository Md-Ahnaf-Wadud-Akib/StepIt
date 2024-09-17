function hideItemUsingId(inputId){
    let section = document.getElementById(inputId);
    section.classList.add("hidden");
}

function showItemUsingId(inputId){
    let section = document.getElementById(inputId);
    section.classList.remove("hidden");
}

function getAlphabet(){
    let alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let alphabets = alphabetString.split("");
    
    let randomNumber = Math.round(Math.random()*25);
    let index = randomNumber;

    let alphabet = alphabets[index];
    return alphabet;


}

function setBackgroundColor(inputId){
    let alphabetKey = document.getElementById(inputId);
    alphabetKey.classList.add("bg-orange-400", "text-black");
}