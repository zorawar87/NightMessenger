var a = chrome.extension.getURL("nightmode.css");
$('<link rel="stylesheet" id="nightMessenger" type="text/css" href="' + a + '" >').appendTo("head");