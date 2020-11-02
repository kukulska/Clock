function getTime() {
  let current = new Date();
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let seconds = current.getSeconds();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  let time = document.querySelector("#time");
  time.innerHTML = `${hours}:${minutes}:${seconds}`;
  setTimeout(getTime, 1000);
}

function getDate() {
  let current = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[current.getDay()];
  let date = current.getDate();
  let month = months[current.getMonth()];

  let fullDate = document.querySelector("#date");
  fullDate.innerHTML = `${day}, ${date} ${month}`;

  setTimeout(getDate, 1000 * 60);
}

getTime();
getDate();
