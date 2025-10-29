//   sticky navbar


// navScroll.js








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
    typeWriter("typingText1", "About Me", 250, () => {
      // Second line after first is done
      typeWriter("typingText2", "I combine design thinking with coding skills to build interfaces that are both visually appealing and highly functional.", 40);
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
  
