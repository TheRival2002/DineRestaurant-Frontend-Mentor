const headerInfo = document.querySelectorAll(".header-info *");

const bookingFamily = document.querySelector(".booking-experience-family");
const bookingSpecial = document.querySelector(".booking-experience-special");
const bookingSocial = document.querySelector(".booking-experience-social");

const backToTop = document.querySelector(".back-to-top");

const descContents = document.querySelectorAll(".description-content");

window.addEventListener("DOMContentLoaded", () => {
  headerInfo.forEach((e, index) => {
    e.style.animationDelay = `${index * 650}ms`;
  });
});

function showFamily() {
  bookingFamily.style.display = "flex";
  bookingSpecial.style.display = "none";
  bookingSocial.style.display = "none";
}

function showSpecial() {
  bookingFamily.style.display = "none";
  bookingSpecial.style.display = "flex";
  bookingSocial.style.display = "none";
}

function showSocial() {
  bookingFamily.style.display = "none";
  bookingSpecial.style.display = "none";
  bookingSocial.style.display = "flex";
}

window.addEventListener("scroll", () => {
  window.pageYOffset > 1000
    ? backToTop.classList.add("visible")
    : backToTop.classList.remove("visible");
  if (window.pageYOffset < 500) {
    descContents.forEach((content) => {
      appearOnScroll.observe(content);
    });
  }
});

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove("visible");
      return;
    } else {
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);
