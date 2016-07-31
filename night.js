"use strict";
var a = chrome.extension.getURL("nightmode.css");

// setTimeout(function(){
	// If jQuery not yet imported,
	if(jQuery('#jquerylibrary').length){
	  jQuery('<script src="jquery.js" id="jquerylibrary"</script>').appendTo("head");
	}

	// Removes the "Keep the conversation (...)" blurb
	if(jQuery('._s15').length){
	  jQuery('._s15').detach();
	  window.dispatchEvent(new Event('resize'));
	}

	// If the stylesheet hasn't been applied, add it!
	if(!jQuery('.nightMessenger').length){
	  jQuery('<link rel="stylesheet" class="nightMessenger" type="text/css" href="' + a + '" >').appendTo("head");
	}
// }, 100)

