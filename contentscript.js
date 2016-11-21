debugger;

function getAllAnchors(){

	var linksObject = {
	"relativeLinks": [], 
	"absoluteLinks": [], 
	"hashLinks": []
	}

	var links = document.querySelectorAll('a');

	for (var i = 0; i < links.length; i++){
		
		var linkToTest = links[i].attributes['href'].nodeValue; 

		if ( linkToTest.includes('//') ){
			linksObject.absoluteLinks.push(linkToTest); 
		} else if (linkToTest.includes('#')){
			linksObject.hashLinks.push(linkToTest);
		} else {
			linksObject.relativeLinks.push(linkToTest); 
		}
	}

	return linksObject;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  		console.log(getAllAnchors())
  		console.log("here"); 
  		console.log(request); 
      sendResponse(getAllAnchors());
  });