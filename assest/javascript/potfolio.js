//   sticky navbar


// navScroll.js

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




export function typeWriter(elementId, text, speed, callback) {
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
  typeWriter("typingText1", "UI/UX designer & Frontend Developer", 70, () => {
    // Second line after first is done
    typeWriter("typingText2", "I bridge the gap between design and development to deliver products that are both functional and aesthetically engaging.", 40);
  });


  // FAQ Toggle with smooth height transition
  document.querySelectorAll('.faq-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');
      
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        // Close
        content.style.maxHeight = "0px";
        icon.classList.remove("rotate-180");
      } else {
        // Open
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });








const carousel = document.getElementById("carousel");
const slides = carousel.children;
let isAnimating = false;

// ==============================
// Next Slide (always to the right)
// ==============================
function nextSlide() {
  if (isAnimating) return;
  isAnimating = true;

  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = "translateX(-100%)";

  carousel.addEventListener(
    "transitionend",
    () => {
      // move first slide to the end
      carousel.appendChild(carousel.firstElementChild);

      // reset position instantly (no animation)
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";

      // force reflow to apply changes
      void carousel.offsetWidth;

      isAnimating = false;
    },
    { once: true }
  );
}

// ==============================
// Previous Slide (always to the left)
// ==============================
function prevSlide() {
  if (isAnimating) return;
  isAnimating = true;

  // move last slide to the front instantly
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);

  // shift left instantly (so the new first slide is off-screen left)
  carousel.style.transition = "none";
  carousel.style.transform = "translateX(-100%)";

  // force reflow
  void carousel.offsetWidth;

  // animate back to 0
  carousel.style.transition = "transform 0.5s ease-in-out";
  carousel.style.transform = "translateX(0)";

  carousel.addEventListener(
    "transitionend",
    () => {
      isAnimating = false;
    },
    { once: true }
  );
}

// ==============================
// Buttons
// ==============================
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// ==============================
// Swipe Support
// ==============================
let startX = 0;
let endX = 0;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

carousel.addEventListener("touchmove", (e) => {
  endX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", () => {
  let diff = startX - endX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextSlide(); // swipe left → next
    } else {
      prevSlide(); // swipe right → prev
    }
  }
  startX = 0;
  endX = 0;
});

let autoSlideInterval = setInterval(nextSlide,4000);


  
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



   // Get all the service boxes
  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    
    box.addEventListener('mouseenter', () => {
      // Remove 'active' class from all boxes and reset text color
      boxes.forEach(b => {
        b.classList.remove('active');
        b.querySelector('h3').classList.remove('text-white');
        b.querySelector('p').classList.remove('text-white');
        b.querySelector('i').classList.remove('text-green-600');
      });

      // Add 'active' class to clicked box and change text color
      box.classList.add('active');
      box.querySelector('h3').classList.add('text-white'); // Change text color to yellow
      box.querySelector('p').classList.add('text-white'); // You can change this to any color
      
      
    });

    
  });





  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Update button styles
      buttons.forEach(btn => {
        btn.classList.remove('bg-green-600', 'text-white');
        btn.classList.add('border', 'border-gray-300', 'text-gray-700');
      });
      button.classList.add('bg-green-600', 'text-white');
      button.classList.remove('border', 'border-gray-300', 'text-gray-700');

      const filter = button.getAttribute('data-filter');
      let delay = 0;

      // First, hide all cards with animation (slide out)
      cards.forEach((card, index) => {
        card.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        card.classList.remove('opacity-100', 'translate-y-0');

        // Set delay for sliding out effect
        setTimeout(() => {
          card.classList.add('hidden');
        }, 200 + (index * 50));  // Add delay for each card
      });

      // After all cards have hidden, show filtered ones
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
      }, 1000); // Wait until all cards are hidden before showing new ones
    });
  });


   
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
  
