(function() {
    window.forceDefaultFont = false;

    var setForceDefaultFont = function(event) {
        window.forceDefaultFont = true;
    };

    safari.self.tab.dispatchMessage('setForceFontCSSbyMatchedHost', window.location.host);

    safari.self.addEventListener('message', function(event) {
        var callback;
        eval('callback = typeof ' + event.name + '== "undefined" ? null : ' + event.name + ';');
        if (callback != null) {
            callback(event.message);
        }
    }, true);
})();
