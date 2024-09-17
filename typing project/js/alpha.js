let introBtn = document.getElementById("intro-btn");

introBtn.addEventListener("click", function(){
    hideItemUsingId("intro-section");
    showItemUsingId("playground-section")
})

