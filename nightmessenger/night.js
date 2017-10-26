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

// If jQuery not yet imported,
// if(jQuery('#jquerylibrary').length){
//   jQuery('<script src="jquery.js" id="jquerylibrary"</script>').appendTo("head");
// }

// Removes the "Keep convo lburb"``
// if (document.getElementsByClassName('._s15')){
// 	let bannerBlurb = document.getElementsByClassName('._s15');
// 	bannerBlurb.parentNode.removeChild(bannerBlurb);
// }

// // Removes the "Keep the conversation (...)" blurb
// if(jQuery('._s15').length){
//   jQuery('._s15').detach();
//   window.dispatchEvent(new Event('resize'));
// }

// // If the stylesheet hasn't been applied, add it!
// if(!jQuery('.nightMessenger').length){
  // jQuery('<link rel="stylesheet" class="nightMessenger" type="text/css" href="' + a + '" >').appendTo("head");
// }

