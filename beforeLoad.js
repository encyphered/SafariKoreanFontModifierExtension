(function() {
    window.forceDefaultFont = false;

    var host = window.location.host;
    if (!!host) {
        var targetHosts = ['naver.com', 'daum.net', 'tistory.com', 'egloos.com'];
        for (var i in targetHosts) {
            if (host.indexOf(targetHosts[i]) >= 0) {
                safari.self.tab.dispatchMessage('forceDefaultFont');
                window.forceDefaultFont = true;
                return;
            }
        }
    }
})();
