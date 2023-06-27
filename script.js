const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  // console.log(panel[0])
  panel.addEventListener("click", () => {
    // console.log(123);
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
