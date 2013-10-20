var options;
//To display the icon
chrome.extension.sendRequest({}, function(response) {
	options = response;
});

$(document).ready(function(){
	var currPageSize = 2; //Average page size as expected of 2014
	var currPageurl = "https://www.google.com";
	
	chrome.extension.sendRequest({
		pageSize: currPageSize,
		pageUrl: currPageurl,
		prerender: false
	}, function(response) {
		options = response;
	});
	
	chrome.extension.onRequest.addListener(
		function(request, sender, sendResponse) {
			if(options.url1 || options.url2 || options.url3 || options.url4 || options.url5){
				if (!request.pageUrl.indexOf('http') == 0)
	    			url = 'http://' + url;
				if(request.pageSize && request.pageUrl && request.prerender){
					//Enabling Prerender
					var state = document.visibilityState || document.webkitVisibilityState;
				  	if (state != 'visible') {
					    var id = document.location.search.replace('?prerender-id=', '');
					    window.localStorage.setItem('prerender-enabled-' + id, 'true');
					}
					var body = document.getElementsByTagName("body")[0];
					var a = document.createElement('a');
					a.rel = "prerender";
					switch(options.openurl){
						case 0:
							a.href = options.url1;
							break;
						case 1:
							a.href = options.url2;
							break;
						case 2:
							a.href = options.url3;
							break;
						case 3:
							a.href = options.url4;
							break;
						case 4:
							a.href = options.url5;
							break;
					}
					body.append(a);
				}
			}
			sendResponse(settings.toObject());
		}
	);
});