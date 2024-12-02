let cash = document.getElementById("cash");
let card = document.getElementById("card");
let instaPay = document.getElementById("instapay");
let cashPay = document.getElementById("cash-form");
let cardForm = document.getElementById("card-form");
let instaPayForm = document.getElementById("instapay-form"); // Assuming you have a form for Instapay

// Add event listeners to the radio buttons
cash.addEventListener("change", updateFormDisplay);
card.addEventListener("change", updateFormDisplay);
instaPay.addEventListener("change", updateFormDisplay);

function updateFormDisplay() {
  if (cash.checked) {
    cashPay.style.display = "block";
    cardForm.style.display = "none";
    instaPayForm.style.display = "none";
  } else if (card.checked) {
    cashPay.style.display = "none";
    cardForm.style.display = "block";
    instaPayForm.style.display = "none";
  } else if (instaPay.checked) {
    cashPay.style.display = "none";
    cardForm.style.display = "none";
    instaPayForm.style.display = "block";
  }
}
