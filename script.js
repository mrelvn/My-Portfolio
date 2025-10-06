// ✅ Lottie Animation
window.addEventListener("DOMContentLoaded", () => {
  lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animation.json' // Make sure this path is correct
  });
});

// ✅ Popup Logic
let popup = document.getElementById("popup");

function openPopup() {
  const name = document.querySelector('input[type="text"]').value.trim();
  const email = document.querySelector('input[type="email"]').value.trim();
  const message = document.querySelector('textarea').value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields!");
    return false;
  }

  popup.classList.add("open-popup");
  return false;
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// ✅ Submit Button Logic (No <form> used)
document.getElementById("submitBtn").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Show popup
  openPopup();

  // Optional: Clear fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});

// ✅ Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
