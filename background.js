"use strict";
var toggle;

// Initialize toggle variable (on or off / true or false)
chrome.storage.sync.get("activated", function(obj){
  toggle = obj.activated;
  console.log("toggle is " + obj.activated);
});

var initialCheck = function(o){
  if (toggle) { 
    // apply script + css
    chrome.tabs.executeScript(o.tabId, { file: "night.js" });
  } 
}

var toggleOnOff = function(tab){
  toggle = !toggle;
  if (toggle) { 
    // Change Icon
    chrome.browserAction.setIcon({path: "on.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "night.js"});
    chrome.storage.sync.set({ activated : true }, function(){
      console.log("Activated");
    });   
  } else {
    // Change Icon
    chrome.browserAction.setIcon({path: "off.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "day.js"});
    chrome.storage.sync.set({ activated : false  }, function() {
      console.log("Deactivated."); 
    });
  }
};

chrome.webNavigation.onCompleted.addListener(initialCheck, 
  {
    url: [
      { hostContains: '.messenger'}
    ]
  });
chrome.browserAction.onClicked.addListener(toggleOnOff);