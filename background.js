function goToImasTop() {
    chrome.tabs.getAllInWindow(undefined, function(tabs) {
    });

    chrome.tabs.create({url: "http://imas.gree-apps.net/app/index.php"});
}

function setUserAgent(info) {
    var headers = info.requestHeaders;
    headers.forEach(function(header, i) {
        if (header.name.toLowerCase() == 'user-agent') {
            header.value = 'Mozilla/5.0 (Linux; U; Android 4.0.2; en-us; Galaxy Nexus Build/ICL53F) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
        }
    });

    return {requestHeaders: headers};
}

var config = {
    urls: [
        'http://imas.gree-apps.net/*',
        'http://pf.gree.jp/58737*',
        'http://pf.gree.net/58737*'
    ],
    types: [
        "main_frame",
        "sub_frame",
        "xmlhttprequest"
    ]
};

chrome.browserAction.onClicked.addListener(goToImasTop);
chrome.webRequest.onBeforeSendHeaders.addListener(setUserAgent, config, [ "requestHeaders", "blocking" ]);
