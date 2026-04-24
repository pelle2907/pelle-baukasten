function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "1234") {
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Falsches Passwort");
  }
}

function showPage(pageId) {
  alert("Button wurde geklickt: " + pageId);

  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}