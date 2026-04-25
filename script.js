function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "1234") {
    document.getElementById("loginArea").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("subtitle").textContent = "Eingeloggt – dein privater Bereich";
  } else {
    alert("Falsches Passwort");
  }
}

function logout() {
  document.getElementById("content").classList.add("hidden");
  document.getElementById("loginArea").classList.remove("hidden");
  document.getElementById("pw").value = "";
  document.getElementById("subtitle").textContent = "Private Website – nur für dich";
  showPage("dashboard");
}

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}