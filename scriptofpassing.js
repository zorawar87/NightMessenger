var a = chrome.extension.getURL("nightmode.css");
$('<link rel="stylesheet" class="nightMessenger" type="text/css" href="' + a + '" >').appendTo("head");