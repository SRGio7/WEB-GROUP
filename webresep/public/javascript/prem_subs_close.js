document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggleCheckbox");
  const langganan = document.querySelector(".langganan");
  const toggleSwtich = document.querySelector(".toggle-switch");
  const toggleSwtichBack = document.querySelector(".toggle-switch-back");

  // Tambahkan event listener untuk checkbox
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      langganan.style.width = "100%";
      langganan.style.transition = "1s ease-in";
    } else {
      langganan.style.width = "17%"; // Sembunyikan navbar saat checkbox tidak dicentang
    }
  });

  // Tambahkan event listener untuk checkbox
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      toggleSwtich.style.marginLeft = "200vh";
      toggleSwtich.style.transition = "1s ease-in";
    } else {
      toggleSwtich.style.marginLeft = "30vh";
    }
  });
});
