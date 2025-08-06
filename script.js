document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typewriter');
  const professions = ["Computer Engineer", "Programmer", "Web Developer", "Software Developer"];
  let currentProfessionIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 130; 

  function typeWriter() {
    const currentProfession = professions[currentProfessionIndex];
    
    if (isDeleting) {
      
      textElement.textContent = currentProfession.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50; 
    } else {
      
      textElement.textContent = currentProfession.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentProfession.length) {
      typingSpeed = 1000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
      typingSpeed = 300;
    }

    setTimeout(typeWriter, typingSpeed);
  }

  setTimeout(typeWriter, 1000);
});

const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

$(document).ready(function(){
  $(".certificates-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});