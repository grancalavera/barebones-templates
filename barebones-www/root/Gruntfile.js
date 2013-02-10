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
    requirejs: {
      production: {
        options: {
          appDir: 'www',
          mainConfigFile: 'www/js/main.js',
          dir: 'www-built',
          modules: [
            {name: 'app/<%= pkg.name %>'}
          ],
          optimize: 'uglify',
          uglify: {
            toplevel: true,
            ascii_only: true,
            beautify: true,
            max_line_length: 1000
          }
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 8080,
          base: 'www'
        }
      }
    },

    reload: {
      port: 6001,
      proxy: {
        host: 'localhost',
        port: 8080
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('dev_build', ['less', 'jshint', 'qunit']);
  grunt.registerTask('dev_server', ['connect:dev', 'reload', 'watch']);
  grunt.registerTask('default', ['dev_build', 'dev_server']);
  grunt.registerTask('build', ['dev_build', 'requirejs:production']);

};
