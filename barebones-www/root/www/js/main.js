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
    urlArgs:'bust=' + new Date().getTime(),
    baseUrl: 'js/lib',
    paths: {
      app: '../app'
    },
    // http://requirejs.org/docs/api.html#config-shim
    shim: {
    }
  });

  requirejs(['app/{%= name %}']);
})();
