/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */
define(function(require) {
    'use strict';
    var $ = require('jquery');
    var template = require('templates')['{%= name %}'];
    $('body').append(template({world: '{%= title %}'}));
    return { title: '{%= title %}' };
});
