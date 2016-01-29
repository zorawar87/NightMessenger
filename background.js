// function cookieExists() {
//   "use strict"
//   var cookieExists = chrome.cookies.get({
//     'url': 'https://www.messenger.com/t/*',
//     'name': 'nightMessengerToggle'
//   });
//   if(cookieExists == ''){
//     return false;
//   } else {
//     return true;
//   }
// }

// if(cookieExists()){
//   alert('tits');
//   var toggle = chrome.cookies.set({
//     "url" : "https://www.messenger.com/t/*",
//     "name": "nightMessengerToggle",
//     "value": true
//   });
// } else {
//   alert('boo');
//   var toggle = false;
// }

  var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "on.png", tabId:tab.id});
    // chrome.cookies.set({
    //   "url" : "https://www.messenger.com/t/*",
    //   "name": "nightMessengerToggle",
    //   "value": false
    // });
    chrome.tabs.executeScript(tab.id, {file:"scriptofpassing.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"nightsong.js"});
  }
});