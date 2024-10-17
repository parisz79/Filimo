const discloserButtons = document.querySelectorAll(".disclosure button");
const discloserPanels = document.querySelectorAll(".disclosure-panel");
const plusIcons = document.querySelectorAll(".icon-plus");

discloserButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Toggle the current disclosure panel
    togglePanel(index);

    // Close the other disclosure panels
    discloserPanels.forEach((_, idx) => {
      if (idx !== index) {
        closePanel(idx);
      }
    });
  });
});

function togglePanel(index) {
  discloserPanels[index].classList.toggle("hidden");
  plusIcons[index].classList.toggle("rotate-180");
}

function closePanel(index) {
  discloserPanels[index].classList.add("hidden");
  plusIcons[index].classList.remove("rotate-180");
}
