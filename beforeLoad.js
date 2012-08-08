(function() {
    window.forceDefaultFont = false;

    safari.self.tab.dispatchMessage('getMatchedHost', window.location.host);
})();
