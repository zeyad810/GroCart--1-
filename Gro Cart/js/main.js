document.querySelectorAll(".nav-infoR.nav-links ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// cart quantity
// Remove button functionality
document.querySelectorAll('.remove-btn').forEach((button) => {
  button.addEventListener('click', (e) => {
    const row = e.target.closest('tr'); // Find the row to delete
    row.remove(); // Remove the row from the table
  });
});

// Quantity adjustment remains the same
document.querySelectorAll('.quantity-controls button').forEach((button) => {
  button.addEventListener('click', (e) => {
    const input = e.target.parentElement.querySelector('input');
    let value = parseInt(input.value);

    if (e.target.classList.contains('increase')) {
      value++;
    } else if (e.target.classList.contains('decrease') && value > 1) {
      value--;
    }

    input.value = value;
    updateSubtotal(e.target.closest('tr'));
  });
});

function updateSubtotal(row) {
  const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('$', ''));
  const quantity = parseInt(row.querySelector('input').value);
  const subtotal = row.querySelector('td:nth-child(4)');
  subtotal.textContent = `$${(price * quantity).toFixed(2)}`;
}


function updateSubtotal(row) {
  const price = parseFloat(
    row.querySelector("td:nth-child(2)").textContent.replace("$", "")
  );
  const quantity = parseInt(row.querySelector("input").value);
  const subtotal = row.querySelector("td:nth-child(4)");
  subtotal.textContent = `$${(price * quantity).toFixed(2)}`;
}

function selectImage(buttonId, newSrc) {
  document.getElementById("mainImg").src = newSrc;

  document.querySelectorAll(".gallery-buttons img").forEach((img) => {
    img.classList.remove("selected");
  });

  document.getElementById(buttonId).classList.add("selected");
}
let quantityValue = document.getElementById("quantity-value");
let decreaseBtn = document.getElementById("dec-btn");
let increaseBtn = document.getElementById("inc-btn");

let start = 1;

function decreaseQuantity() {
  if (start <= 1) {
    return;
  } else {
    start--;
    updateDisplay();
  }
}
function increaseQuantity() {
  start++;
  updateDisplay();
}
function updateDisplay() {
  quantityValue.textContent = `${Number(start)} كيلو`;
}
decreaseBtn.onclick = decreaseQuantity;
increaseBtn.onclick = increaseQuantity;
updateDisplay();

// single page slider
var swiper = new Swiper(".singlePageSwiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// single page slider
