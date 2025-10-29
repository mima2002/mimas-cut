//   sticky navbar







export function scroll (){
 const scrollAnimation = document.querySelectorAll('.scroll-animation');

  window.addEventListener('scroll', () => {
    scrollAnimation.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      //this is for the bottom animation//const boxBottom = box.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Add animation when box enters view
      if (boxTop < windowHeight // bottom animation/*&& boxBottom > 0*/
        ) {
        box.classList.add('show');
      } else {
        box.classList.remove('show'); // Allow animation again when scrolling back
      }
      });
      
  }); 

  

}scroll()
  







function typeWriter(elementId, text, speed, callback) {
    let i = 0;
    const el = document.getElementById(elementId);

    // Add cursor before typing starts
    el.classList.add("cursor");

    function typing() {
      if (i < text.length) {
        el.innerHTML = text.substring(0, i + 1); // keeps cursor at end
        i++;
        setTimeout(typing, speed);
      } else {
        // Remove cursor when typing ends
        el.classList.remove("cursor");
        if (callback) callback();
      }
    }

    typing();
  }

  // First line
    typeWriter("typingText1", "Potfolio", 250, () => {
      // Second line after first is done
      typeWriter("typingText2", "12 — SaaS companies we’ve helped in the past 24 months. Our holistic process takes care of discovery, branding, design, and development.", 40);
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









   const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button styling
      buttons.forEach(btn => {
        btn.classList.remove('bg-green-600', 'text-white');
        btn.classList.add('border', 'border-gray-300', 'text-gray-700');
      });
      button.classList.add('bg-green-600', 'text-white');
      button.classList.remove('border', 'border-gray-300', 'text-gray-700');

      const filter = button.getAttribute('data-filter');
      let delay = 0;

      // Step 1: Hide all cards with animation
      cards.forEach((card, index) => {
        card.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        card.classList.remove('opacity-100', 'translate-y-0');
        setTimeout(() => {
          card.classList.add('hidden');
        }, 200 + (index * 100));
      });

      // Step 2: Show filtered cards with staggered animation
      setTimeout(() => {
        cards.forEach((card, index) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            setTimeout(() => {
              card.classList.remove('hidden');
              card.classList.add('block');
              card.classList.remove('opacity-0', 'translate-y-10');
              card.classList.add('opacity-100', 'translate-y-0');
              card.classList.remove('pointer-events-none');
            }, delay);
            delay += 100;
          }
        });
      }, 600); // Wait for all to hide first
    });
  });



  