// Toggle Menu Functionality
document.getElementById("menubtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

function toggleAnswer(button) {
      const answerDiv = button.closest('.question').querySelector('.answer');
      
      if (answerDiv.style.height) {
        // If already open, hide it
        answerDiv.style.height = null;
      } else {
        // Get the full height of the content and set it
        const fullHeight = answerDiv.scrollHeight + "px";
        answerDiv.style.height = fullHeight;
      }
    }