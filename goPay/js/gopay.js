let withdrawalBtn = document.getElementById("withdrawal-btn");

withdrawalBtn.addEventListener("click", function () {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");

  const withdrawalScreen = document.getElementById("withdrawal-screen");
  withdrawalScreen.classList.toggle("hidden");
});
