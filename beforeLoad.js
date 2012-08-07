(function() {
    window.forceDefaultFont = false;

    safari.self.tab.dispatchMessage('getMatchedHost', window.location.host);
    safari.self.addEventListener('message', function(event) {
        if (event.name == 'returnMatchedHost') {
            safari.self.tab.dispatchMessage('forceDefaultFont', event.message);

            window.forceDefaultFont = true;
            return;
        }
    }, false);
})();
