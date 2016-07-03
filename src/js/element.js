'use strict';

var viewport = require('agency-pkg-services/viewport');

module.exports = {
    updateBounds: function(node, bounds) {
        var box = node.getBoundingClientRect();
        bounds.min
            .setX(box.left + node.clientLeft + viewport.bounds.min.x)
            .setY(box.top + node.clientTop + viewport.bounds.min.y);
        bounds.max
            .setX(box.right + node.clientLeft + viewport.bounds.min.x)
            .setY(box.bottom + node.clientTop + viewport.bounds.min.y);
    }
};
