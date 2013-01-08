/*global QUnit:false*/
;(function () {
  'use strict';
  requirejs.config({
    urlArgs:'x=' + new Date().getTime(),
    baseUrl: '../www/js/lib',
    paths: {
      app: '../app',
      templates: '../templates/dist/templates',
      tests: '../../../test/tests'
    },
    // http://requirejs.org/docs/api.html#config-shim
    shim: {
      'handlebars': {
        exports: 'Handlebars'
      },
      // see
      // https://github.com/gruntjs/grunt-contrib-handlebars/pull/4#issuecomment-8510600
      'templates': {
        exports: 'JST',
        deps: ['handlebars']
      }
    }
  });
  QUnit.config.autostart = false;
  var allTests = [
    'tests/{%= name %}-tests'
    // add more tests here...
  ];
  requirejs(allTests, function () {
    QUnit.start();
  });
})();
