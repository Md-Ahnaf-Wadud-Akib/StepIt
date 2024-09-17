function hideItemUsingId(inputId){
    let section = document.getElementById(inputId);
    section.classList.add("hidden");
}

function showItemUsingId(inputId){
    let section = document.getElementById(inputId);
    section.classList.remove("hidden");
}