function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "1234") {
    document.getElementById("content").style.display = "block";
  } else {
    alert("Falsches Passwort");
  }
}