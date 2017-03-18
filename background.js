"use strict";
let toggle;

chrome.storage.sync.get("activated", function(obj){
  toggle = obj.activated;
  console.log(toggle);
}); 

let toggleOnOff = function(tab){
  toggle = !toggle;
  if (toggle) { 
    // Change Icon
    chrome.browserAction.setIcon({path: "dist/img/on.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "night.js"});
  } else {
    // Change Icon
    chrome.browserAction.setIcon({path: "dist/img/off.png", tabId: tab.id});
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, {file: "day.js"});
  }
};

chrome.browserAction.onClicked.addListener(toggleOnOff);
// chrome.browserAction.onClicked.addListener(function(tab) {
//   console.log("lasfjawoeigjaoweifj"); 
// });