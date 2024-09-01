document.querySelectorAll(".toggle-button").forEach(function (button) {
  button.addEventListener("click", function () {
    // Получаем значение атрибута data-target
    const targetId = this.getAttribute("data-target");
    const content = document.getElementById(targetId);
    if (content) {
      content.classList.toggle("hidden");
    }
  });
});
