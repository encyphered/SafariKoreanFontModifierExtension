(function() {
    window.forceDefaultFont = false;

    var callbacks = {
        setForceDefaultFont: function(host) {
            window.forceDefaultFont = true;
        }
    }

    safari.self.tab.dispatchMessage('setForceFontCSSbyMatchedHost', window.location.host);

    safari.self.addEventListener('message', function(event) {
        if (typeof callbacks[event.name] == 'function') {
            callbacks[event.name](event.message);
        }
    }, true);
})();
