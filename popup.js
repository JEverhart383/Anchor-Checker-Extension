document.addEventListener("DOMContentLoaded", function(){
	

	var popupLinksObject; 

	


	/******

	Click Event Listeners to communicate with the content script; 

	******/

	var btn = document.getElementById("check-urls"); 

	btn.addEventListener("click", function(){

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs); 
		  chrome.tabs.sendMessage(tabs[0].id, {directive: "getAllAnchors"}, function(response) {
		    console.log(response);
		    popupLinksObject = response; 
		    document.querySelector('.relURL').innerHTML = response.relativeLinks.length; 
		    document.querySelector('.absURL').innerHTML = response.absoluteLinks.length; 
		    document.querySelector('.hashURL').innerHTML = response.hashLinks.length; 
		  
		  });
		});

	}); 


	var relInspectBtn = document.getElementById('relInspectBtn'); 

	relInspectBtn.addEventListener("click", function(){

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs); 
		  chrome.tabs.sendMessage(tabs[0].id, {directive: "inspectRelURLs"}, function(response) {
		  
		  });
		});

	}); 

	var absInspectBtn = document.getElementById('absInspectBtn'); 

	absInspectBtn.addEventListener("click", function(){

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs); 
		  chrome.tabs.sendMessage(tabs[0].id, {directive: "inspectAbsURLs"}, function(response) {
		  
		  });
		});

	});

	var hashInspectBtn = document.getElementById('hashInspectBtn'); 

	hashInspectBtn.addEventListener("click", function(){

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			console.log(tabs); 
		  chrome.tabs.sendMessage(tabs[0].id, {directive: "inspectHashURLs"}, function(response) {
		  
		  });
		});

	}); 


});
