function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "1234") {
    document.getElementById("loginArea").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Falsches Passwort");
  }
}

function logout() {
  document.getElementById("content").classList.add("hidden");
  document.getElementById("loginArea").classList.remove("hidden");
  document.getElementById("pw").value = "";
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

function openMenuPage(pageId) {
  showPage(pageId);
  document.getElementById("menu").classList.add("hidden");
}