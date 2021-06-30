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


// GLOBAL VARABLES FOR DAY PLANNER SECTION END //
// SAVE BUTTONS LOGIC
// for loop to save taskText to localStorage on saveBtn click -- updates/saves ALL fields at once
for (let i = 0; i < saveBtn.length; i++) { 
	// when a saveBtn is clicked,
	saveBtn[i].addEventListener("click", function() { 
		
		let taskId = 'task' + i
		// save taskText
		let taskText = document.getElementById(taskId).value
		// save data in localStorage
		localStorage.setItem('taskText' + i, taskText)
		
	})
	
}

// SAVE BUTTONS LOGIC END //
// LOAD TASKS LOGIC //


const loadTasks = function() { 
	// for loop to input tasks in correct time slots on page load/refresh - from localStorage
	for (let i = 0; i < textAreaText.length; i++) { // on page load, not on button click

		// getItem from localStorage
		let taskText = localStorage.getItem('taskText' + i)

		// input it into the proper time field
		document.getElementById("task" + i).value = taskText;

	}

}


// LOAD TASKS LOGIC END //
loadTasks();
console.log(localStorage);