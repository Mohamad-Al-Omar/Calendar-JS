const currentDate = document.querySelector("[data-current-date]");
const days = document.querySelector("[data-days]");
const prevBtn = document.querySelector("[data-prev-btn]");
const nextBtn = document.querySelector("[data-next-btn]");

// getting new date, current year and month
let date = new Date(),
  currentYear = date.getFullYear(),
  currentMonth = date.getMonth();

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

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let lastDayOfMonth = new Date(
    currentYear,
    currentMonth,
    lastDateOfMonth
  ).getDay();
  let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let ilTag = "";
  console.log("getDate => ", date.getDate());
  for (let index = firstDayOfMonth; index > 0; index--) {
    ilTag += `<li class='inactive'>${lastDateOfLastMonth - index + 1}</li>`;
  }
  for (let index = 1; index <= lastDateOfMonth; index++) {
    let isToday =
      index === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "active"
        : "";
    ilTag += `<li class=${isToday}>${index}</li>`;
  }
  for (let index = lastDayOfMonth; index < 6; index++) {
    ilTag += `<li class='inactive'>${index - lastDayOfMonth + 1}</li>`;
  }
  days.innerHTML = ilTag;
  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
};

renderCalendar();

prevBtn.addEventListener("click", () => {
  currentMonth -= 1;
  if (currentMonth < 0 || currentMonth > 11) {
    date = new Date(currentYear, currentMonth);
    console.log("date => ", date);
    currentYear = date.getFullYear();
    currentMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  currentMonth += 1;
  if (currentMonth < 0 || currentMonth > 11) {
    date = new Date(currentYear, currentMonth);
    console.log("date => ", date);
    currentYear = date.getFullYear();
    currentMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});
