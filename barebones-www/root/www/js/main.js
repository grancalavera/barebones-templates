/*
 * {%= name %}: application bootstrap.
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
;(function () {
  'use strict';

  requirejs.config({
    urlArgs:'x=' + new Date().getTime(),
    baseUrl: 'js/lib',
    paths: {
      app: '../app',
      templates: '../templates/dist/templates'
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

  requirejs(['app/{%= name %}']);
})();
