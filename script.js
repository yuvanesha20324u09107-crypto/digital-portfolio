// Contact Form Submission Handling
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("form-response").textContent = "Please fill in all fields.";
    document.getElementById("form-response").style.color = "red";
    return;
  }

  // You could send the form data via an API here
  document.getElementById("form-response").textContent = `Thank you, ${name}! Your message has been sent.`;
  document.getElementById("form-response").style.color = "green";

  // Reset form
  document.getElementById("contact-form").reset();
});
