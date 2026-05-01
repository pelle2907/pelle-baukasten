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

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function checkout() {
  if (cart.length === 0) {
    alert("Dein Warenkorb ist leer.");
    return;
  }

  alert("Checkout kommt später. Aktuell ist das noch ein Test-Warenkorb.");
}

function sendRequest(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const packageChoice = document.getElementById("packageChoice").value;

  alert("Danke " + name + "! Deine Anfrage für " + packageChoice + " wurde vorbereitet.");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

function openCafe() {
  window.open("https://cafe-demo-7mk4.onrender.com", "_blank");
}

function login() {
  const password = document.getElementById("pw").value;

  if (password === "1234") {
    document.getElementById("loginArea").classList.add("hidden");
    document.getElementById("adminArea").classList.remove("hidden");
  } else {
    alert("Falsches Passwort.");
  }
}

function logout() {
  document.getElementById("adminArea").classList.add("hidden");
  document.getElementById("loginArea").classList.remove("hidden");
  document.getElementById("pw").value = "";
}

function hideCookies() {
  document.getElementById("cookieBanner").classList.add("hidden");
}

updateCart();