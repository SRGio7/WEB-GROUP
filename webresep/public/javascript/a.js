document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggleCheckbox");
  const navbar = document.querySelector(".navbar");

  // Tambahkan event listener untuk checkbox
  const toggle = toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      navbar.style.display = "block"; // Tampilkan navbar saat checkbox dicentang
    } else {
      navbar.style.display = "none"; // Sembunyikan navbar saat checkbox tidak dicentang
    }
  });
});