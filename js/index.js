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

  descContents.forEach((content, index) => {
    const fromTop = content.getBoundingClientRect().top;
    const contentHeight = content.getBoundingClientRect().height;
    const startSliding = fromTop - contentHeight - 400;
    if (startSliding < 0) {
      content.classList.add("visible");
    } else {
      content.classList.remove("visible");
    }
  });
});
