"use strict";

chrome.storage.sync.get("activated", function(obj){
  let initialToggleState = obj.activated;

  if (initialToggleState) { 
    let a     = chrome.extension.getURL("dist/css/nightmode.css");
    let link  = document.createElement('link');

    // Build element
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.id = "nightMessenger";
    link.href = a;

    document.head.appendChild(link);
  } 
});
