var a = chrome.extension.getURL("nightmode.css");

// Removes the app extension thing.
if($('._s15').length){
  $('._s15').remove();
}

if(!$('.nightMessenger').length){
  // The script link doesn't exist.
  $('<link rel="stylesheet" class="nightMessenger" type="text/css" href="' + a + '" >').appendTo("head");
} else {
  // The script link exists.
  $('.nightMessenger').each(function(i, obj) {
    obj.remove();
  });
}