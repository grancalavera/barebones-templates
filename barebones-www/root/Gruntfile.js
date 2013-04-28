'use strict';

//--------------------------------------------------------------------------
//
// grunt-contrib-livereload
//
//--------------------------------------------------------------------------
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function (connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    //--------------------------------------------------------------------------
    //
    // build
    //
    //--------------------------------------------------------------------------

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
        src: ['www/js/main.js', 'www/js/app/**/*.js']
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/**/test.js', 'test/tests/**.js']
      },
    },
    less: {
      compile: {
        files: {
          'www/css/main.css': 'www/less/main.less'
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      less: {
        files: ['www/less/**/*.less'],
        tasks: ['compile:less']
      },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      unit: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      jshint: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      }
    },

    //--------------------------------------------------------------------------
    //
    // deploy
    //
    //--------------------------------------------------------------------------

    // This is an example build file that demonstrates how to use the build
    // system for require.js.
    // https://github.com/jrburke/r.js/blob/master/build/example.build.js

    requirejs: {
      build: {
        options: {
          appDir: 'www',
          mainConfigFile: 'www/js/main.js',
          dir: 'tmp',
          modules: [
            {name: 'app/<%= pkg.name %>'}
          ],
          optimize: 'none'
        }
      }
    },
    copy: {
      build: {
        files: [
          {expand: true, cwd: 'tmp', src: ['**', '!less/**', '!js/lib/**', 'js/lib/require.js'], dest: 'deploy'}
        ]
      }
    },

    //--------------------------------------------------------------------------
    //
    // dev-server
    //
    //--------------------------------------------------------------------------

    connect: {
      livereload: {
        options: {
          port: 8000,
          base: 'www',
          // http://www.senchalabs.org/connect/
          // http://stackoverflow.com/questions/7337572/can-someone-explain-what-middleware-is-and-what-app-use-actually-means
          // Middleware allows you define a stack of actions that you should
          // flow through. Express servers them self are a stack of middleware.
          middleware: function (connect, options) {
            return [lrSnippet, folderMount(connect, options.base)];
          }
        }
      }
    },
    regarde: {
      livereload: {
        files: ['www/*.html', 'www/js/**/*', 'www/css/**/*'],
        tasks: ['livereload']
      }
    },
    livereload: {
      port: 35729
    },

    //--------------------------------------------------------------------------
    //
    // misc and mixed
    //
    //--------------------------------------------------------------------------

    clean: {
      deploy: ['tmp', 'deploy'],
      less: ['www/css']
    }

  });

  //--------------------------------------------------------------------------
  //
  // npm tasks
  //
  //--------------------------------------------------------------------------

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-livereload');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-regarde');

  //--------------------------------------------------------------------------
  //
  // Proxies
  //
  //--------------------------------------------------------------------------

  grunt.registerTask('compile:less', ['clean:less', 'less:compile']);

  //--------------------------------------------------------------------------
  //
  // Groups
  //
  //--------------------------------------------------------------------------

  grunt.registerTask('build', ['compile:less', 'jshint', 'qunit']);
  grunt.registerTask('dev-server', ['livereload-start', 'connect', 'regarde']);
  grunt.registerTask('deploy', ['clean:deploy', 'build', 'requirejs', 'copy']);

  //--------------------------------------------------------------------------
  //
  // Default
  //
  //--------------------------------------------------------------------------

  grunt.registerTask('default', ['clean', 'build', 'watch']);

};
