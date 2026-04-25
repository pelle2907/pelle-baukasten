let cart = [];

function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("hidden");
}

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  updateCart();
  document.getElementById("cartPanel").classList.remove("hidden");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(function(item, index) {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong><br>
          <span>${item.price} €</span>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
      </div>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function checkout() {
  if (cart.length === 0) {
    alert("Dein Warenkorb ist leer.");
  } else {
    alert("Checkout kommt später. Aktuell ist das ein Test-Warenkorb.");
  }
}

function showInfo(type) {
  const infoBox = document.getElementById("infoBox");
  const infoTitle = document.getElementById("infoTitle");
  const infoText = document.getElementById("infoText");

  if (type === "account") {
    infoTitle.textContent = "Account";
    infoText.textContent = "Hier kommt später dein Account-Bereich hin.";
  }

  if (type === "settings") {
    infoTitle.textContent = "Einstellungen";
    infoText.textContent = "Hier kannst du später Website-Einstellungen ändern.";
  }

  if (type === "support") {
    infoTitle.textContent = "Support";
    infoText.textContent = "Support erreichst du später über deine geschäftliche E-Mail.";
  }

  if (type === "about") {
    infoTitle.textContent = "Über uns";
    infoText.textContent = "Future Webuild baut moderne und bezahlbare Websites für kleine Unternehmen.";
  }

  infoBox.classList.remove("hidden");
  document.getElementById("menu").classList.add("hidden");
}

function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "1234") {
    document.getElementById("loginArea").classList.add("hidden");
    document.getElementById("adminArea").classList.remove("hidden");
    document.getElementById("subtitle").textContent = "Eingeloggt – privater Admin-Bereich";
  } else {
    alert("Falsches Passwort");
  }
}

function logout() {
  document.getElementById("adminArea").classList.add("hidden");
  document.getElementById("loginArea").classList.remove("hidden");
  document.getElementById("pw").value = "";
  document.getElementById("subtitle").textContent = "Testphase – Login bleibt erstmal aktiv.";
  showAdminPage("dashboard");
}

function showAdminPage(pageId) {
  const pages = document.querySelectorAll(".admin-page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}