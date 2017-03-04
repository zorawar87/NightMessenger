"use strict";

var createStylesheetElement = function(){
	let a 		= chrome.extension.getURL("nightmode.css"),
		link 	= document.createElement('link');

	link.type = 'text/css';
	link.rel = 'stylesheet';
	link.id = "nightMessenger";
	link.href = a;

	return link;
}

if (document.getElementById('nightMessenger')){
	console.log("Already exists.");	
} else {
	let nightMessengerStylesheet = createStylesheetElement();
	document.head.appendChild(nightMessengerStylesheet);
    chrome.storage.sync.set({ activated : true }, function(){
      console.log("Activated");
    });   
	console.log("Night Mode activated.");	
}