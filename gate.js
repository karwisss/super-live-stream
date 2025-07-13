function verifyPin() {
  const input = document.getElementById("pinInput");
  const error = document.getElementById("pinError");
  if (input.value === "2137") {
    document.getElementById("pinScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    error.textContent = "Nieprawidłowy PIN!";
  }
}