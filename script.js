const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-btn");

// Open the side menu
hamburger.addEventListener("click", () => {
  sideMenu.classList.add("show");
});

// Close the side menu
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("show");
});

// Function to check if an element is 20% into the viewport
function isElementPartiallyInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
}

// Function to reveal or hide elements on scroll
function toggleRevealOnScroll() {
  const techSection = document.querySelector(".tech-used");
  const projectText = document.querySelector(".project-text");
  const aboutText = document.querySelector(".about-text");
  const cta = document.querySelector(".cta");

  if (isElementPartiallyInViewport(techSection)) {
    techSection.classList.add("revealed");
  } else {
    techSection.classList.remove("revealed");
  }

  if (isElementPartiallyInViewport(cta)) {
    cta.classList.add("revealed");
  } else {
    cta.classList.remove("revealed");
  }

  if (isElementPartiallyInViewport(aboutText)) {
    aboutText.classList.add("revealed");
  } else {
    aboutText.classList.remove("revealed");
  }

  if (isElementPartiallyInViewport(projectText)) {
    projectText.classList.add("revealed");
  } else {
    projectText.classList.remove("revealed");
  }
}

window.addEventListener("scroll", toggleRevealOnScroll);
toggleRevealOnScroll();

// Add event listener for scrolling
window.addEventListener("scroll", toggleRevealOnScroll);

// Optional: Trigger on load if it's already in view
document.addEventListener("DOMContentLoaded", toggleRevealOnScroll);

// Function to reveal cards with alternating directions on scroll
function toggleCardsRevealOnScroll() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    const direction = index % 2 === 0 ? "left" : "right";
    const isLargeScreen = window.innerWidth >= 800;

    // Adjust direction for larger screens based on card position
    const cardDirection = isLargeScreen
      ? index % 4 < 2
        ? "left"
        : "right"
      : direction;

    if (isElementPartiallyInViewport(card)) {
      card.classList.add(`reveal-${cardDirection}`);
    } else {
      card.classList.remove(`reveal-${cardDirection}`);
    }
  });
}

// Add event listener for scrolling to reveal cards
window.addEventListener("scroll", toggleCardsRevealOnScroll);
document.addEventListener("DOMContentLoaded", toggleCardsRevealOnScroll);

// Function to check if an element is at least 20% visible in the viewport
function isPartiallyVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
}

// Function to reveal elements with animations on scroll
function animateOnScroll() {
  // Select the image and description elements
  const imageSection = document.querySelector(".photo");
  const textBlocks = document.querySelectorAll(".mark");

  // Apply animation to image sliding from right
  if (isPartiallyVisible(imageSection)) {
    imageSection.classList.add("slide-in-right");
  } else {
    imageSection.classList.remove("slide-in-right");
  }

  // Apply alternating animations to text blocks sliding from left and right
  textBlocks.forEach((block, index) => {
    const slideDirection = index % 2 === 0 ? "slide-in-left" : "slide-in-right";
    if (isPartiallyVisible(block)) {
      block.classList.add(slideDirection);
    } else {
      block.classList.remove(slideDirection);
    }
  });
}

// Attach event listeners for scrolling and page load
window.addEventListener("scroll", animateOnScroll);
document.addEventListener("DOMContentLoaded", animateOnScroll);

// JavaScript function to handle the form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from actually submitting
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block"; // Show the success message
}

function scrollToJoin() {
  const joinSection = document.getElementById("join-us");
  joinSection.scrollIntoView({ behavior: "smooth" });
}
