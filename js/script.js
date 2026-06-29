// Toggles the mobile menu (hamburger) open/closed
const initMobileMenu = () => {
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");
  if (!menuButton || !menu) return;

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
    const isOpen = menu.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
};

// Switches between light and dark theme, saving the choice in localStorage
const initThemeToggle = () => {
  const themeButton = document.getElementById("themeButton");

  const updateIcon = () => {
    if (!themeButton) return;
    const isDark = document.body.classList.contains("dark-theme");
    themeButton.textContent = isDark ? "☀️" : "🌙";
  };

  // Apply the previously saved theme on load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
  updateIcon();

  if (!themeButton) return;
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    const isDark = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });
};

// Sets up the contact form: field validation + send simulation
const initContactForm = () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  const showError = (field, errorElement, message) => {
    field.classList.add("invalid");
    errorElement.textContent = message;
  };

  const clearError = (field, errorElement) => {
    field.classList.remove("invalid");
    errorElement.textContent = "";
  };

  const validateName = () => {
    if (nameField.value.trim() === "") {
      showError(nameField, nameError, "Por favor, informe seu nome.");
      return false;
    }
    clearError(nameField, nameError);
    return true;
  };

  const validateEmail = () => {
    // Validates the email format (user@domain.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = emailField.value.trim();
    if (value === "") {
      showError(emailField, emailError, "Por favor, informe seu e-mail.");
      return false;
    }
    if (!emailRegex.test(value)) {
      showError(emailField, emailError, "Digite um e-mail válido (ex.: nome@dominio.com).");
      return false;
    }
    clearError(emailField, emailError);
    return true;
  };

  const validateMessage = () => {
    const value = messageField.value.trim();
    if (value === "") {
      showError(messageField, messageError, "Por favor, escreva uma mensagem.");
      return false;
    }
    if (value.length < 10) {
      showError(messageField, messageError, "A mensagem deve ter pelo menos 10 caracteres.");
      return false;
    }
    clearError(messageField, messageError);
    return true;
  };

  // No back-end: simulate sending by resetting fields and showing the modal
  const simulateSend = () => {
    form.reset();
    if (modal) {
      modal.classList.add("open");
    } else {
      alert("Mensagem enviada com sucesso!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Run every validation so all errors show at once (avoids short-circuit)
    const isValid = [validateName(), validateEmail(), validateMessage()].every(Boolean);
    if (isValid) simulateSend();
  };

  form.addEventListener("submit", handleSubmit);

  if (closeModal && modal) {
    closeModal.addEventListener("click", () => modal.classList.remove("open"));
    modal.addEventListener("click", (event) => {
      if (event.target === modal) modal.classList.remove("open");
    });
  }
};

// Runs all features after the page is loaded.
// The <site-header> component renders itself, so its elements already
// exist in the DOM by the time these init functions bind their events.
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initThemeToggle();
  initContactForm();
});
