let bookingFamily = document.querySelector(".booking-experience-family");
let bookingSpecial = document.querySelector(".booking-experience-special");
let bookingSocial = document.querySelector(".booking-experience-social");

let counterDown = document.querySelector(".counterDown");
let counterUp = document.querySelector(".counterUp");
let visitorNumber = document.getElementById("visitor-number");
let reserveBtn = document.getElementById("reserve-btn");
let appearingLabelName = document.querySelector(".appearing-label-name");
let appearingLabelEmail = document.querySelector(".appearing-label-email");
let appearingLabelDate = document.querySelector(".appearing-label-date");
let appearingLabelTime = document.querySelector(".appearing-label-time");
let name = document.getElementById("name");
let email = document.getElementById("email");
let month = document.getElementById("month");
let day = document.getElementById("day");
let year = document.getElementById("year");

function showDiv1() {
  bookingFamily.style.display = "flex";
  bookingSpecial.style.display = "none";
  bookingSocial.style.display = "none";
}

function showDiv2() {
  bookingFamily.style.display = "none";
  bookingSpecial.style.display = "flex";
  bookingSocial.style.display = "none";
}

function showDiv3() {
  bookingFamily.style.display = "none";
  bookingSpecial.style.display = "none";
  bookingSocial.style.display = "flex";
}

let counter = 2;

counterDown.addEventListener("click", function (event) {
  event.preventDefault();
  counter -= 1;
  visitorNumber.style.color = "black";
  if (counter < 2) {
    counter = 1;
    visitorNumber.innerHTML = counter + " person";
  } else {
    visitorNumber.innerHTML = counter + " people";
  }
});

counterUp.addEventListener("click", function (event) {
  event.preventDefault();
  counter += 1;
  visitorNumber.style.color = "black";
  if (counter >= 15) {
    counter = 15;
  }
  visitorNumber.innerHTML = counter + " people";
});

reserveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let arr = [];
  if (name.value === "") {
    appearingLabelName.style.display = "block";
  } else {
    appearingLabelName.style.display = "none";
  }
  if (email.value === "" || !email.validity.valid) {
    appearingLabelEmail.style.display = "block";
  } else {
    appearingLabelEmail.style.display = "none";
  }
  if (!month.validity.valid || !day.validity.valid || !year.validity.valid) {
    appearingLabelDate.style.display = "block";
  } else {
    appearingLabelDate.style.display = "none";
  }
});
