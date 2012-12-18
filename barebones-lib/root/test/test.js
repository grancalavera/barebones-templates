/*global QUnit:false*/
;(function () {
  'use strict';
  requirejs.config({
    baseUrl: '../src',
    paths: {
      tests: '../test/tests',
      jquery: '../lib/jquery'
    }
  });
  QUnit.config.autostart = false;
  requirejs(['tests/{%= name %}-tests'], function () {
    QUnit.start();
  });
})();
