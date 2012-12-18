/*global QUnit:false*/
;(function () {
  'use strict';
  requirejs.config({
    urlArgs:'x=' + new Date().getTime(),
    baseUrl: '../www/js/lib',
    paths: {
      app: '../app',
      tests: '../../../test/tests'
    }
  });
  QUnit.config.autostart = false;
  requirejs(['tests/main'], function () {
    QUnit.start();
  });
})();
