// DISPLAY DATE AND TIME LOGIC //

const dateTime = document.getElementById("currentDate")

function updateDateTime() { 
	// get current date and time
	const now = moment().format("[Today is] dddd, MMMM Do YYYY, hh:mm:ss A");
	
	// place 'now' into <p> with id="currentDate" with the js variable dateTime
	dateTime.innerText = now
};
setInterval(updateDateTime, 1000)

// Display Date and Time END //
// SAVE BUTTONS LOGIC

const saveBtn = document.querySelectorAll('button')

// for loop to give localStorage functionality to saveBtn's 
for (var i = 0; i < saveBtn.length; i++) { 

	// when a saveBtn is clicked,
	saveBtn[i].addEventListener("click", function() { 
		// save data in localStorage
		localStorage.setItem('textarea')
	})

}

