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

// Withdrawal Screen
const withdrawalSubmit = document.getElementById("withdrawal-submit");
withdrawalSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const amountText = document.getElementById("amount-text").value;
  const amountNumber = parseFloat(amountText);
  const pinPassword = document.getElementById("pin-password").value;

  if (amountNumber && pinPassword === "") {
    alert("Please enter the amount and your password");
  } else {
    if (pinPassword === "987") {
      const previousAccountBalance = document.getElementById(
        "previous-account-balance"
      ).innerText;
      console.log(previousAccountBalance);
      const previousAccountBalanceValue = parseFloat(previousAccountBalance);
      console.log(previousAccountBalanceValue);
      const currentAccountBalance = previousAccountBalanceValue - amountNumber;
      document.getElementById("previous-account-balance").innerText =
        currentAccountBalance;
    } else {
      alert("Your inserted password is wrong");
    }
  }
});
