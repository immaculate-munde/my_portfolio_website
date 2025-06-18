// Optional: Handle form submission with a confirmation alert
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      // You can remove this preventDefault if you use Formspree
      // e.preventDefault(); // Uncomment this line if you're testing without Formspree

      // Optional confirmation (can be removed)
      alert("Message sent successfully!");
    });
  }
});