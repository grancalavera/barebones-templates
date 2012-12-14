/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'www/js/app/**/*.js', 'test/**/*.js']
    },
    less: {
      development: {
        options: {
        },
        files: {
          'www/css/main.css': 'www/less/main.less'
        }
      }
    },
    watch: {
      files: ['<config:lint.files>', 'www/less/**/*.less', 'www/index.html'],
      tasks: 'lint less reload'
    },
    server: {
      port: 8000,
      base: 'www'
    },
    reload: {
      port: 6001,
      proxy: {
        host: 'localhost'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        console: true,
        define: true,
        require: true,
        requirejs: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-volo');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', 'server lint less reload watch');
};
