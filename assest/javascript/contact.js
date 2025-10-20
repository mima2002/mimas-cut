//   sticky navbar


// navScroll.js
export function initNavScrollColor(navSelector = '.nav', scrollThreshold = 50) {
  const nav = document.querySelector(navSelector);
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      nav.classList.add('bg-green-50', 'shadow-lg');
      nav.classList.remove('bg-white');
    } else {
      nav.classList.add('bg-white');
      nav.classList.remove('bg-green-50', 'shadow-lg');
    }
  });
}
initNavScrollColor('.nav'); // Default scroll threshold = 50px



 
 
 
 const form = document.getElementById("contactForm");
    const popup = document.getElementById("popup");
    const popupBox = document.getElementById("popupBox");
    const closePopup = document.getElementById("closePopup");
    const loadingOverlay = document.getElementById("loadingOverlay");

    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let valid = true;

      // Validation
      if (nameField.value.trim() === "") { nameError.classList.remove("hidden"); valid = false; }
      else { nameError.classList.add("hidden"); }

      if (emailField.value.trim() === "") { emailError.classList.remove("hidden"); valid = false; }
      else { emailError.classList.add("hidden"); }

      if (messageField.value.trim() === "") { messageError.classList.remove("hidden"); valid = false; }
      else { messageError.classList.add("hidden"); }

      if (valid) {
        form.reset();

        // Show loader
        loadingOverlay.classList.remove("hidden");
        loadingOverlay.classList.add("flex");

        // After 2s → hide loader & show popup
        setTimeout(() => {
          loadingOverlay.classList.add("hidden");
          loadingOverlay.classList.remove("flex");

          popup.classList.remove("hidden");
          popup.classList.add("flex");

          setTimeout(() => {
            popupBox.classList.remove("scale-90", "opacity-0");
            popupBox.classList.add("scale-100", "opacity-100");
          }, 50);
        }, 2300);
      }
    });

    closePopup.addEventListener("click", () => {
      popupBox.classList.remove("scale-100", "opacity-100");
      popupBox.classList.add("scale-90", "opacity-0");

      setTimeout(() => {
        popup.classList.add("hidden");
        popup.classList.remove("flex");
      }, 300);
    });










//
    (function() {
    // Initialize EmailJS with your public key
    emailjs.init("q6gpyjkylvjhUMcPe");
  })();

  // Handle form submission
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Set timestamp for template
    this.querySelector('input[name="time"]').value = new Date().toLocaleString();

    // Show loading
    document.getElementById("loadingOverlay").classList.remove("hidden");

    // Send email using your service & template
    emailjs.sendForm("service_uxc5cam", "template_evlcopb", this)
      .then(() => {
        document.getElementById("loadingOverlay").classList.add("hidden");
        document.getElementById("popup").classList.remove("hidden");
        document.getElementById("popupBox").classList.add("opacity-100", "scale-100");
      }, (err) => {
        alert("Failed to send: " + JSON.stringify(err));
        document.getElementById("loadingOverlay").classList.add("hidden");
      });
  });

  // Close popup
  document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").classList.add("hidden");
  });

    







    const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const spans = menuBtn.querySelectorAll("span");

  menuBtn.addEventListener("click", () => {
    // Animate mobile menu
    if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px") {
      mobileMenu.style.maxHeight = "0px"; // close
    } else {
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + "px"; // open
    }

    // Animate hamburger to X
    spans[0].classList.toggle("rotate-45");
    spans[0].classList.toggle("translate-y-1");

    spans[1].classList.toggle("opacity-0");

    spans[2].classList.toggle("-rotate-45");
    spans[2].classList.toggle("-translate-y-2");
  });
