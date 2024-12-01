// Initialize EmailJS with your Public Key
emailjs.init("WzllYQ5pwuzxQMTI6");

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeToggle.textContent =
    document.body.classList.contains("dark-theme") ? "☀" : "🌙";
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Send form data using EmailJS
  emailjs
    .sendForm("service_tcnrfrb", "template_dk5v41s", contactForm)
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset(); // Reset the form fields
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again later.");
    });
});