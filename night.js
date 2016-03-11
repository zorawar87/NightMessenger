var a = chrome.extension.getURL("nightmode.css");

// Removes the "Keep the conversation (...)" blurb
if($('._s15').length){
  $('._s15').detach();
  window.dispatchEvent(new Event('resize'));
}

// If jQuery not yet imported,
if($('#jquerylibrary').length){
  $('<script src="jquery.js" id="jquerylibrary"</script>').appendTo("head");
}

// If the stylesheet hasn't been applied, add it!
if(!$('.nightMessenger').length){
  $('<link rel="stylesheet" class="nightMessenger" type="text/css" href="' + a + '" >').appendTo("head");
  console.log("woo");
}