/*globals self*/
(function () {'use strict';

self.on('context', function (node) {
    var href = node.href;
    return (/^file:/).test(href) && href.slice(-1) !== '/'; // No need on directories with reveal option
});

self.on('click', function (node, data) {
    self.postMessage(node.href);
});

}());
