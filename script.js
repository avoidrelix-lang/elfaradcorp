function login() {
  const user = document.getElementById("user").value.trim();
  const pass = document.getElementById("pass").value.trim();
  const error = document.getElementById("error");

  // doğru bilgiler
  const correctUser = "observer";
  const correctPass = "unlisted";

  // hata mesajları
  const errors = {
    user: [
      "ERROR 418 — GÖZLEMCİ TANIMLANAMADI",
      "ERROR 401 — YETKİSİZ ERİŞİM"
    ],
    pass: [
      "ERROR 403 — ERİŞİM REDDEDİLDİ",
      "ERROR 451 — KAYIT DIŞI TALEP"
    ],
    both: [
      "ERROR 503 — SİSTEM YANIT VERMİYOR",
      "ERROR 401 — YETKİSİZ ERİŞİM"
    ]
  };

  // doğruysa geç
  if (user === correctUser && pass === correctPass) {
    localStorage.setItem("access", "granted");
    window.location.href = "archive.html";
    return;
  }

  // yanlış durumlar
  let msg = "";

  if (user !== correctUser && pass !== correctPass) {
    msg = errors.both[Math.floor(Math.random() * errors.both.length)];
  } 
  else if (user !== correctUser) {
    msg = errors.user[Math.floor(Math.random() * errors.user.length)];
  } 
  else if (pass !== correctPass) {
    msg = errors.pass[Math.floor(Math.random() * errors.pass.*]()
