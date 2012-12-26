'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      },
      src: {
        options: {
          jshintrc: 'www/js/.jshintrc'
        },
        src: ['www/js/main', 'www/js/app/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/test.js', 'test/tests/**.js']
      },
    },

    less: {
      dev: {
        options: {
        },
        files: {
          'www/css/main.css': 'www/less/main.less'
        }
      }
    },

    qunit: {
      files: ['test/**/*.html']
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile', 'reload']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'reload']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'reload']
      },
      less: {
        files: ['www/less/**/*.less'],
        tasks: ['less:dev', 'reload']
      },
      index: {
        files: ['www/index.html'],
        tasks: ['reload']
      }
    },

    connect: {
      dev: {
        options: {
          port: 8000,
          base: 'www'
        }
      }
    },

    reload: {
      port: 8000
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', ['less', 'jshint', 'qunit']);
  grunt.registerTask('devserver', ['default', 'connect:dev', 'reload']);
  // grunt.registerTask('devserver', ['default', 'connect:dev', 'reload', 'watch']);

};
