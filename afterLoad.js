(function() {
    if (window.forceDefaultFont || window.location.href == 'about:blank') {
        return;
    }

    var isKorean = false;
    var htmlCharset = null, contentCharset = null;

    var bodies = document.getElementsByTagName('BODY');
    if (bodies.length == 0) {
        return;
    }
    var body = bodies[0];

    htmlCharset = document.getElementsByTagName('html')[0].getAttribute('lang');

    var metaTags = document.getElementsByTagName('meta');
    for (i = 0; i < metaTags.length; i++) {
        var meta = metaTags[i];
        var httpEquiv = meta.getAttribute('http-equiv')
        if (httpEquiv != null && httpEquiv.toLowerCase() == 'content-type') {
            var content = meta.getAttribute('content');
            if (content != null) {
                contentCharset = content.replace(/^.*charset *=/i, '');
                break;
            }
        }
    }

    if (htmlCharset != null) {
        if (htmlCharset.toLowerCase().indexOf("ko") >= 0) {
            isKorean = true;
        }
    } else if (contentCharset != null) {
        if (contentCharset.match(/(ms[ _-]{0,1}949|euc[_-]{0,1}kr)/i)) {
            isKorean = true;
        } else if (contentCharset.match(/utf[_-]8/i) && body.innerHTML.match(/[\uAC00-\uD7A3]/)) {
            isKorean = true;
        }
    }

    if (isKorean) {
        safari.self.tab.dispatchMessage('forceDefaultFont');
    }
})();
