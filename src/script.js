function getTime() {
  let current = new Date();
  let hours = current.getHours();
  let minutes = current.getMinutes();
  let seconds = current.getSeconds();

  let time = document.querySelector("#time");
  time.innerHTML = `${hours}:${minutes}:${seconds}`;

  setTimeout(getTime, 1000);
}

getTime();
