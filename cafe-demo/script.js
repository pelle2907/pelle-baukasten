function showPage(pageId) {
  const pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.add("hidden");
  });

  document.getElementById(pageId).classList.remove("hidden");
}

function sendReservation(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;

  alert("Danke " + name + "! Deine Reservierungsanfrage wurde vorbereitet.");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("people").value = "";
  document.getElementById("message").value = "";
}