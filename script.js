let cart = [];

function toggleMenu() {
  document.getElementById("menuDropdown").classList.toggle("hidden");
}

function showPageFromMenu(id) {
  document.getElementById("menuDropdown").classList.add("hidden");
  showPage(id);
}

function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");

  const menu = document.getElementById("menuDropdown");
  if (menu) {
    menu.classList.add("hidden");
  }

  if (id === "checkout") {
    updateCheckout();
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function addToCart(name, price) {
  cart.push({
    name: name,
    price: price
  });

  updateCart();
  showPage("cart");
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const total = document.getElementById("total");

  if (!cartItems || !total) return;

  cartItems.innerHTML = "";

  let sum = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Dein Warenkorb ist aktuell leer.</p>";
  }

  cart.forEach(function(item, index) {
    sum += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          <span>${item.price} €</span>
        </div>
        <button class="danger-btn" onclick="removeItem(${index})">Entfernen</button>
      </div>
    `;
  });

  total.textContent = sum;
}

function updateCheckout() {
  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");

  if (!checkoutItems || !checkoutTotal) return;

  checkoutItems.innerHTML = "";

  let sum = 0;

  if (cart.length === 0) {
    checkoutItems.innerHTML = "<p>Keine Pakete ausgewählt.</p>";
  }

  cart.forEach(function(item) {
    sum += item.price;

    checkoutItems.innerHTML += `
      <div class="checkout-item">
        <strong>${item.name}</strong>
        <span>${item.price} €</span>
      </div>
    `;
  });

  checkoutTotal.textContent = sum;
}

function prepareOrder() {
  const orderInput = document.getElementById("orderInput");
  const totalInput = document.getElementById("totalInput");

  let sum = 0;
  let orderText = "";

  cart.forEach(function(item) {
    sum += item.price;
    orderText += item.name + " - " + item.price + " €\n";
  });

  if (cart.length === 0) {
    orderText = "Keine Pakete ausgewählt.";
  }

  orderInput.value = orderText;
  totalInput.value = sum + " €";
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
  updateCheckout();
}

function clearCart() {
  cart = [];
  updateCart();
  updateCheckout();
}

function openCafe() {
  window.open("https://cafe-demo-7mk4.onrender.com", "_blank");
}

function hideCookies() {
  document.getElementById("cookieBanner").classList.add("hidden");
}

updateCart();