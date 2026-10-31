const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("open", !isExpanded);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("open");
  });
});

const registrationForm = document.querySelector("#registration-form");
const formMessage = document.querySelector("#form-message");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.classList.remove("error");

  if (!registrationForm.reportValidity()) {
    formMessage.textContent = "Please check the highlighted fields and try again.";
    formMessage.classList.add("error");
    return;
  }

  const formData = new FormData(registrationForm);
  const firstName = formData.get("name").trim().split(/\s+/)[0];
  const selectedEvent = formData.get("event");
  formMessage.textContent = `Thanks, ${firstName}! Your ${selectedEvent} registration preview is complete. This demo does not send your details to the organizers.`;
  registrationForm.reset();
});
