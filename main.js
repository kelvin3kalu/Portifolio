const roles = [
  "Frontend Developer",
  "Web Developer",
  "Tech Enthusiast"
];

let index = 0;
let charIndex = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (!isDeleting && charIndex <= roles[index].length) {
    currentRole = roles[index].substring(0, charIndex++);
  } else if (isDeleting && charIndex >= 0) {
    currentRole = roles[index].substring(0, charIndex--);
  }

  typingElement.textContent = currentRole;

  if (charIndex === roles[index].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

typeEffect();


/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

/* ================= MOBILE NAV TOGGLE ================= */
const menuIcon = document.getElementById("menuIcon");
const sideNav = document.getElementById("sideNav");
const closeNav = document.getElementById("closeNav");
const sideLinks = sideNav.querySelectorAll("a");

menuIcon.addEventListener("click", () => {
  sideNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  sideNav.classList.remove("active");
});

sideLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideNav.classList.remove("active");
  });
});
