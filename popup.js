document.addEventListener("DOMContentLoaded", function(){
	var btn = document.getElementById("check-urls"); 

	btn.addEventListener("click", function(){

		
		console.log("here"); 
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs); 
		  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
		    console.log(response);
		    document.querySelector('.relURL').innerHTML = response.relativeLinks.length; 
		    document.querySelector('.absURL').innerHTML = response.absoluteLinks.length; 
		    document.querySelector('.hashURL').innerHTML = response.hashLinks.length; 
		  });
		});

	}); 


});