const monthElement = document.querySelector(".calendar__header h1");
const infoElement = document.querySelector(".calendar__header p");
const daysElement = document.querySelector(".calendar__content-days");

const monthIndex = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate()
const firstDay = new Date(new Date().getFullYear(), monthIndex , 1).getDay()
const currentDay = new Date().getDate()

console.log(firstDay, lastDay)


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

monthElement.innerText = months[monthIndex]
infoElement.innerText = new Date().toDateString();

let days = "";

for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`
    
}

for (let i = 1; i <= lastDay; i++) {
    if (i === currentDay){
        days += `<div class="today">${i}</div>`
    }else {
        days += `<div>${i}</div>`
    }
}

daysElement.innerHTML = days;