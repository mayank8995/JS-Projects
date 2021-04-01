const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
let countDownTo = new Date("April 1, 2021 11:30").getTime();
//in ms
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMin = 60 * 1000;
const oneSec = 1000;
const id = setInterval(newFunction_2(), 1000);

function newFunction_2() {
  return () => {

    let distance = newFunction();
    newFunction_1(distance);

  };
}

function newFunction_1(distance) {
  if (distance < 0) {
    clearInterval(id);
  }
}

function newFunction() {
  let current = new Date().getTime();
  let distance = countDownTo - current;
  console.log("distance", distance, "current>>", current, "countDownTo>>", countDownTo);
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / (oneHour));
  let minutes = Math.floor((distance % oneHour) / (oneMin));
  let seconds = Math.floor((distance % oneMin) / (oneSec));
  day.innerHTML = days;
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
  return distance;
}
