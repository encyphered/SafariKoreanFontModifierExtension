(function() {
    window.forceDefaultFont = false;

    var host = window.location.host;
    if (!!host) {
        var targetHosts = ['.kr', 'naver.com', 'daum.net', 'nate.com', 'tistory.com', 'egloos.com', 'career.co.kr'];
        for (var i in targetHosts) {
            if (host.indexOf(targetHosts[i]) >= 0) {
                safari.self.tab.dispatchMessage('forceDefaultFont');
                window.forceDefaultFont = true;
                return;
            }
        }
    }
})();
