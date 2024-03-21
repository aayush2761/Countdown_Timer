const hourElement = document.getElementsByClassName("hours")[0];
const minElement = document.getElementsByClassName("minutes")[0];
const dayElement = document.getElementsByClassName("days")[0];
const secElement = document.getElementsByClassName("seconds")[0];
const heading = document.querySelector("h1");
const ctr = document.getElementsByClassName("innercontainer")[0];

const second = 1000, minute = 60 * second, hour = 60 * minute, day = 24 * hour;

const mainFunction = () => {

    // calculation of the current date
    let now = new Date();

    let dd = String(now.getDate()).padStart(2, "0");
    let mm = String(now.getMonth() + 1).padStart(2, "0");

    let yyyy = now.getFullYear();
    let currentDate = `${mm}/${dd}/${yyyy}`;

    // target day calculation  
    let targetDate;
    
    while (true) {
        const enteredDay = parseInt(prompt("Enter Day"));
        const enteredMonth = parseInt(prompt("Enter Month"));

        if ((enteredDay >= 1 && enteredDay < 31) && (enteredMonth >= 1 && enteredMonth <= 12)) {
            targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
            break; // Break the loop if input is valid
        } else {
            alert("Enter Valid Day and month");
        }
    }

    // checking validity of the date
    if (currentDate > targetDate) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    }

    const interValid = setInterval(() => {
        const timer = new Date(targetDate).getTime();
        const today = new Date().getTime();

        const difference = timer - today;

        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMin = Math.floor((difference % hour) / minute);
        const leftSec = Math.floor((difference % minute) / second);

        dayElement.innerText = leftDay;
        hourElement.innerText = leftHour;
        minElement.innerText = leftMin;
        secElement.innerText = leftSec;

        // stop the timer 
        if (difference < 0) {
            ctr.style.display = "none";
            heading.innerText = "Time is up";

            clearInterval(interValid);
        }
    }, 1000); // Run the interval every second
};

mainFunction();
