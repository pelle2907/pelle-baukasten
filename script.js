function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "1234") {
    document.getElementById("content").classList.remove("hidden");
  } else {
    alert("Falsches Passwort");
  }
}