let introBtn = document.getElementById("intro-btn");

function continueGame(){
    let alphabet = getAlphabet();

    let displayAlphabet = document.getElementById("display-alphabet");
    displayAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet);
}

introBtn.addEventListener("click", function(){
    hideItemUsingId("intro-section");
    showItemUsingId("playground-section");
    continueGame()
})

