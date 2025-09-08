// =======================
// Tabs
// =======================
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    tabBtns.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// =======================
// Dark Mode
// =======================
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// =======================
// Counter
// =======================
let count = 0;
document.getElementById("increase").addEventListener("click", () => {
  document.getElementById("counter").textContent = ++count;
});
document.getElementById("decrease").addEventListener("click", () => {
  document.getElementById("counter").textContent = --count;
});

// =======================
// Form Validation
// =======================
const form = document.getElementById("signupForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // clear old errors
  ["nameError", "emailError", "passwordError", "formSuccess"].forEach(id => {
    document.getElementById(id).textContent = "";
  });

  if (name.length < 2) {
    document.getElementById("nameError").textContent = "⚠️ Name too short";
    isValid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "⚠️ Invalid email";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "⚠️ At least 6 characters";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("formSuccess").textContent = "✅ Form submitted!";
    form.reset();
  }
});
