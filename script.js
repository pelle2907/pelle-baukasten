let cart = [];

function toggleMenu() {
  document.getElementById("menu").classList.toggle("hidden");
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function addToCart(name, price) {
  cart.push({name,price});
  updateCart();
}

function updateCart() {
  const items = document.getElementById("cartItems");
  const total = document.getElementById("total");

  items.innerHTML = "";
  let sum = 0;

  cart.forEach((item, i) => {
    sum += item.price;

    items.innerHTML += `
      <div>
        ${item.name} - ${item.price} €
        <button onclick="removeItem(${i})">X</button>
      </div>
    `;
  });

  document.getElementById("cartCount").textContent = cart.length;
  total.textContent = sum;
}

function removeItem(i) {
  cart.splice(i,1);
  updateCart();
}

function checkout() {
  alert("Checkout kommt später");
}

function login() {
  if(document.getElementById("pw").value === "1234") {
    document.getElementById("admin").classList.remove("hidden");
  }
}

function logout() {
  document.getElementById("admin").classList.add("hidden");
}