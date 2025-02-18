let withdrawalBtn = document.getElementById("withdrawal-btn");

withdrawalBtn.addEventListener("click", function () {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");

  const withdrawalScreen = document.getElementById("withdrawal-screen");
  withdrawalScreen.classList.toggle("hidden");
});

const depositBtn = document.getElementById("deposit-btn");

depositBtn.addEventListener("click", function () {
  const homeScreen = document.getElementById("home-screen");
  homeScreen.classList.add("hidden");

  const depositScreen = document.getElementById("deposit-screen");
  depositScreen.classList.toggle("hidden");
});
