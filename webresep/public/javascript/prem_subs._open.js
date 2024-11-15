document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("toggleCheckbox");
  const langganan = document.querySelector(".langganan");
  const toggleSwtich = document.querySelector(".toggle-switch");
  // const toggleSwtichBack = document.querySelector(".toggle-switch-back");

  // Tambahkan event listener untuk checkbox
  toggleCheckbox.addEventListener("change", function () {
    if (toggleCheckbox.checked) {
      langganan.style.width = "100%";
      // toggleSwtich.style.marginLeft = "200vh";
      langganan.style.transition = "1s ease-out";
      toggleSwtich.style.transform = "scaleX(-1)";
      toggleSwtich.style.right = "10px";
    } else {
      langganan.style.width = "17%";
      // toggleSwtich.style.marginLeft = "30vh";
      toggleSwtich.style.right = "2rem";
      toggleSwtich.style.transform = "scaleX(1)";
    }
  });

  // Tambahkan event listener untuk checkbox
  // toggleCheckbox.addEventListener("change", function () {
  //   if (toggleCheckbox.checked) {
  //     toggleSwtich.style.marginLeft = "200vh";
  //   } else {
  //     toggleSwtich.style.marginLeft = "30vh";
  //   }
  // });
});
