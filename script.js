function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;
  const error = document.getElementById("error");

  if (user === "observer" && pass === "unlisted") {
    window.location.href = "archive.html";
  } else {
    error.innerText = "Erişim reddedildi.";
  }
}
