function showPopup(code, text) {
  document.getElementById("popup-code").innerText = code;
  document.getElementById("popup-text").innerText = text;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();

  const correctUser = "observer";
  const correctPass = "unlisted";

  const errors = [
    { code: "ERROR 401", text: "YETKİSİZ ERİŞİM" },
    { code: "ERROR 403", text: "ERİŞİM REDDEDİLDİ" },
    { code: "ERROR 418", text: "GÖZLEMCİ TANIMLANAMADI" },
    { code: "ERROR 451", text: "KAYIT DIŞI TALEP" },
    { code: "ERROR 503", text: "SİSTEM YANIT VERMİYOR" }
  ];

  if (user === correctUser && pass === correctPass) {
    localStorage.setItem("access", "granted");
    window.location.href = "archive.html";
    return;
  }

  const err = errors[Math.floor(Math.random() * errors.length)];
  showPopup(err.code, err.text);
}
