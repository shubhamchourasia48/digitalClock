setInterval(displayTime, 1000);

function displayTime(){
const timeNow = new Date();

let hours = timeNow.getHours();
let min = timeNow.getMinutes();
let sec = timeNow.getSeconds();

let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = weekDay[timeNow.getDay()];
let month = timeNow.toLocaleString("default", {month:"long"});
let year = timeNow.getFullYear();
let period = "AM";

if(hours>12){
  hours=hours-12;
  period = "PM";
}

if(hours===0){
  hours=12;
  period = "AM";
}

hours = hours<10 ? "0" + hours : hours;
min = min<10 ? "0" + min : min;
sec = sec<10 ? "0" + sec : sec;

let fullTime = hours+":"+ min+":"+sec+":"+period;
document.getElementById("clock").innerHTML = fullTime+" "+day+" "+month+" "+year;
}
