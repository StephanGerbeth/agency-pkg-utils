"use strict";

var uniq = require('lodash/uniq');
var unionBy = require('lodash/unionBy');

module.exports = {
    collections: function(collectionA, collectionB, by) {
        return uniq(unionBy(collectionB, collectionA, by), false, by);
    }
};
