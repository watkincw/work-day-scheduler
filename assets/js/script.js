const saveBtn = document.querySelectorAll('button')


console.log(saveBtn);

// for loop to give each button localStorage functionality to the save buttons 
for (var i = 0; i < saveBtn.length; i++) { 

	saveBtn[i].addEventListener("click", function() { 
		// save data in localStorage
		alert(i)
	})
	
}
