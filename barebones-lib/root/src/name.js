/* jshint devel:true */
define(function (require) {
    'use strict';
    var $ = require('jquery')
      , doc = $(document)
    return {
      title: '{%= title %}',
      doc: doc
    }
});
