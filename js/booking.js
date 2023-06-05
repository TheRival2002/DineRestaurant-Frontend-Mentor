const counterDown = document.querySelector(".counterDown");
const counterUp = document.querySelector(".counterUp");
const visitorNumber = document.getElementById("visitor-number");
const reserveBtn = document.getElementById("reserve-btn");
const appearingLabelName = document.querySelector(".appearing-label-name");
const appearingLabelEmail = document.querySelector(".appearing-label-email");
const appearingLabelDate = document.querySelector(".appearing-label-date");
const appearingLabelTime = document.querySelector(".appearing-label-time");
const name = document.getElementById("name");
const email = document.getElementById("email");
const month = document.getElementById("month");
const day = document.getElementById("day");
const year = document.getElementById("year");

let counter = 2;

counterDown.addEventListener("click", () => {
  counter -= 1;
  visitorNumber.style.color = "black";
  if (counter < 2) {
    counter = 1;
    visitorNumber.innerHTML = counter + " person";
  } else {
    visitorNumber.innerHTML = counter + " people";
  }
});

counterUp.addEventListener("click", () => {
  counter += 1;
  visitorNumber.style.color = "black";
  if (counter >= 15) {
    counter = 15;
  }
  visitorNumber.innerHTML = counter + " people";
});

reserveBtn.addEventListener("click", () => {
  name.value === ""
    ? (appearingLabelName.style.display = "block")
    : (appearingLabelName.style.display = "none");
  email.value === "" || !email.validity.valid
    ? (appearingLabelEmail.style.display = "block")
    : (appearingLabelEmail.style.display = "none");
  !month.validity.valid || !day.validity.valid || !year.validity.valid
    ? (appearingLabelDate.style.display = "block")
    : (appearingLabelDate.style.display = "none");
});

// styling the select

const timeWrap = document.getElementById("time-wrap");
const minuteWrap = document.getElementById("minute-wrap");
const minute = document.getElementById("minute");

async function appendingChoiceContainer() {
  const div = document.createElement("div");
  div.classList.add("choice-container");
  div.innerHTML = `
    <span class="visible-text">AM</span>
    <div>
      <p class="time-period"><i style="padding-right: .375rem;" class="fas fa-cookie"></i> AM</p>
      <p class="time-period"><i style="padding-right: .375rem;" class="fas fa-hamburger"></i> PM</p>
    </div>
  `;
  timeWrap.appendChild(div);
}

appendingChoiceContainer()
  .then(() => {
    choiceContainer = timeWrap.querySelector(".choice-container");
  })
  .then(() => {
    choiceContainer.addEventListener("click", () => {
      const insideDiv = choiceContainer.querySelector("div");
      insideDiv.classList.toggle("open-choices");
      if (insideDiv.classList.contains("open-choices")) {
        choiceContainer.style.color = "var(--clr-neutral-900)";
        const visibleText = choiceContainer.querySelector(".visible-text");
        const timePeriods = insideDiv.querySelectorAll(".time-period");
        timePeriods.forEach((period) => {
          period.addEventListener("click", () => {
            visibleText.textContent = period.textContent;
            visibleText.style.color = "var(--clr-neutral-900)";
          });
        });
      } else {
        choiceContainer.style.color = "var(--clr-primary-100)";
      }
    });
  });

async function appendingHourContainer() {
  const div = document.createElement("div");
  div.classList.add("hour-container");
  div.innerHTML = `
    <div class="main-hour">
      <div>
        <p data-id="10">10</p>
        <p data-id="11">11</p>
        <p data-id="12">12</p>
        <p data-id="13">13</p>
        <p data-id="14">14</p>
        <p data-id="15">15</p>
        <p data-id="16">16</p>
        <p data-id="17">17</p>
        <p data-id="18">18</p>
        <p data-id="19">19</p>
        <p data-id="20">20</p>
        <p data-id="21">21</p>
        <p data-id="22">22</p>
        <p data-id="23">23</p>
      </div>
      <div>
        <p data-id="10">00</p>
        <p data-id="11">00</p>
        <p data-id="12">00</p>
        <p data-id="13">00</p>
        <p data-id="14">00</p>
        <p data-id="15">00</p>
        <p data-id="16">00</p>
        <p data-id="17">00</p>
        <p data-id="18">00</p>
        <p data-id="19">00</p>
        <p data-id="20">00</p>
        <p data-id="21">00</p>
        <p data-id="22">00</p>
        <p data-id="23">00</p>
      </div>
    </div>  
    `;
  minuteWrap.appendChild(div);
}

appendingHourContainer()
  .then(() => {
    hourContainer = minuteWrap.querySelector(".hour-container");
  })
  .then(() => {
    minuteWrap.addEventListener("click", () => {
      const insideDiv = hourContainer.querySelector(".main-hour");
      insideDiv.classList.toggle("open-hours");
      const possibleHours = insideDiv.querySelectorAll("p");
      possibleHours.forEach((possibility) => {
        possibility.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          minute.value = `${id}:00`;
        });
      });
    });
  });

// disabling the clock

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  const timeInputs = document.querySelectorAll('input[type="time"]');
  timeInputs.forEach((input) => {
    input.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
}
