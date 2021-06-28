// DISPLAY DATE AND TIME LOGIC //

const dateTime = document.getElementById("currentDate")

function updateDateTime() { 
	// get current date and time
	const now = moment().format("[Today is] dddd, MMMM Do YYYY, hh:mm:ss A");
	
	// place 'now' into <p> with id="currentDate" with the js letiable dateTime
	dateTime.innerText = now
};
setInterval(updateDateTime, 1000)

// DISPLAY DATE AND TIME LOGIC END //
// GLOBAL VARABLES FOR DAY PLANNER SECTION //

const saveBtn = document.querySelectorAll('button') // targets ALL button elements -- used in SAVE BUTTONS
const textAreaText = document.querySelectorAll('textarea') // targets ALL textarea elements -- used in LOAD TASKS
let taskText = document.getElementById("task").value // selecting the value/input/text of elements with 'task' as an ID -- USED IN SAVE BUTTONS AND LOAD TASKS 


// GLOBAL VARABLES FOR DAY PLANNER SECTION END //
// SAVE BUTTONS LOGIC


// for loop to save taskText to localStorage on saveBtn click -- updates/saves ALL fields at once
for (let i = 0; i < saveBtn.length; i++) { 
	// when a saveBtn is clicked,
	saveBtn[i].addEventListener("click", function() { 

		
		// save data in localStorage
		localStorage.setItem('taskText', taskText)
	})
	
}

// SAVE BUTTONS LOGIC END //

// ------------------------------------------------------------------------------------
// 1. Save tasks to localStorage in more than just 9am slot
// 2. Make tasks in time slots persist on load/refresh
// ------------------------------------------------------------------------------------

// LOAD TASKS LOGIC //


// for loop to input tasks in correct time slots on page load/refresh - from localStorage
for (let i = 0; i < textAreaText.length; i++) { // on page load, not on button click
	
	// When page is reloaded/refreshed,
	textAreaText[i].addEventListener("load", function() {
		// getItem from localStorage
		localStorage.getItem('taskText', taskText)
		
		// input it into the proper time field
		document.getElementById("task").value = taskText;
	})
	
}

// LOAD TASKS LOGIC END //
console.log(localStorage);