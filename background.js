var currPageSize = 0;
var currPageurl = "";
var currCache = 0;
var cacheLimit = 190 - 10; //Actual limit - size of pages to be permanent in cache
var i = 0; //cache 5 pages continuously
var urlToOpen = 0;

var settings = new Store("settings", {
"url1": '',
"url2": '',
"url3": '',
"url4": '',
"url5": '',
"openurl": 0
});

/*
Sample -
http://www.mashable.com
https://www.facebook.com
https://mail.google.com
https://www.quora.com
https://www.evernote.com
*/

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('fancy-settings/source/index.html')}, function(tab) {
    // Tab opened.
  });
});

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		chrome.pageAction.show(sender.tab.id);
		if(request.pageSize && request.pageUrl && !request.prerender){
			currCache += request.pageSize;
			currPageSize = request.pageSize;
			currPageurl = request.pageUrl;
			if(currCache >= cacheLimit){
				if(i > 5){
					currCache %= cacheLimit;
					i %= 5;
					urlToOpen %= 5;
				}else{
					i++;
					settings.toObject().openurl = urlToOpen++;
				}
				//prerender
				chrome.extension.sendRequest({
					pageSize: currPageSize,
					pageUrl: currPageurl,
					prerender: true
				}, function(response) {});
			}
		}
		sendResponse(settings.toObject());
	}
);
