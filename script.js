document.addEventListener('DOMContentLoaded', function () {
  
const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");

let currentIndex = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}

function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}

initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});

});

/// animated slider

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle the scroll event
function handleScroll() {
  const sections = document.querySelectorAll('.animated-section');

  sections.forEach(section => {
      if (isInViewport(section)) {
          section.classList.add('active');
      }
  });
}

// Add an event listener for the scroll event
window.addEventListener('scroll', handleScroll);





// Contact form
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form"); 
  const formElements = contactForm.elements;
  const successMessage = document.getElementById("success-message");

  for (let i = 0; i < formElements.length; i++) {
    formElements[i].addEventListener("focus", function () {
      this.classList.add("active");
    });

    formElements[i].addEventListener("input", function () {
      this.classList.remove("active");
    });
  }

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    for (let i = 0; i < formElements.length; i++) {
      if (!formElements[i].checkValidity()) {
        formElements[i].classList.add("invalid");
      } else {
        formElements[i].classList.remove("invalid");
      }
    }

    if (contactForm.checkValidity()) {
      // Form submitted successfully, show success message
      successMessage.classList.remove("hidden");
    }
  });
});
