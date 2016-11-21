var linksObject = {
	"relativeLinks": [], 
	"absoluteLinks": [], 
	"hashLinks": []
}


function inspectRelURLs(){
	console.log("inspectRelURLs"); 

	for (var i = 0; i < linksObject.relativeLinks.length; i++){

			linksObject.relativeLinks[i].style = "background-color: green;"
	}
}

function inspectAbsURLs(){
	console.log("inspectAbsURLs"); 

	for (var i = 0; i < linksObject.absoluteLinks.length; i++){

			linksObject.absoluteLinks[i].style = "background-color: red;"
	}
}

function inspectHashURLs(){
	console.log("inspectAbsURLs"); 

	for (var i = 0; i < linksObject.hashLinks.length; i++){

			linksObject.hashLinks[i].style = "background-color: blue;"
	}
}


function getAllAnchors(){

	//Reinitialize the linksObject arrays 
	linksObject.relativeLinks = []; 
	linksObject.absoluteLinks = []; 
	linksObject.hashLinks = []; 

	var links = document.querySelectorAll('a');

	for (var i = 0; i < links.length; i++){
		
		var linkToTest = links[i];
		if (linkToTest.attributes['href'] !== undefined){ 
			linkToTestHref = linkToTest.attributes['href'].nodeValue;

			if ( linkToTestHref.includes('//') ){
				linksObject.absoluteLinks.push(linkToTest); 
			} else if (linkToTestHref.includes('#')){
				linksObject.hashLinks.push(linkToTest);
			} else {
				linksObject.relativeLinks.push(linkToTest); 
			}

		}
	}
	console.log(linksObject);
	return linksObject;
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  		if (request.directive === 'getAllAnchors'){
  			console.log(request); 
      		sendResponse(getAllAnchors());
  		}

  		if (request.directive === 'inspectRelURLs'){
  			console.log(request); 
      		sendResponse(inspectRelURLs());
  		}

  		if (request.directive === 'inspectAbsURLs'){
  			console.log(request); 
      		sendResponse(inspectAbsURLs());
  		}

  		if (request.directive === 'inspectHashURLs'){
  			console.log(request); 
      		sendResponse(inspectHashURLs());
  		}
  });
