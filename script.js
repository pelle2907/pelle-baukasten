let cart = [];

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function showPage(id) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
  document.getElementById("menu").classList.add("hidden");

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
  const cartCount = document.getElementById("cartCount");

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
          <strong>${item.name}</strong>
          <span>${item.price} €</span>
        </div>
        <button class="danger" onclick="removeItem(${index})">Entfernen</button>
      </div>
    `;
  });

  total.textContent = sum;
  cartCount.textContent = cart.length;
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

  alert("Danke " + name + "! Deine Anfrage für " + packageChoice + " wurde vorbereitet. Echter Versand kommt später.");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
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

updateCart();