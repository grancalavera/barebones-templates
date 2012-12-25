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

    connect: {
      server: {
        options: {
          port: 8000,
          base: 'www'
        }
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['less', 'jshint', 'qunit']);
  grunt.registerTask('server', ['default', 'connect', 'watch']);
};

// module.exports = function(grunt) {

//   grunt.initConfig({
//     pkg: '<json:package.json>',
//     meta: {
//       banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
//         '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
//         '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
//         '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
//         ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
//     },
//     lint: {
//       files: ['grunt.js', 'www/js/app.js', 'www/js/app/**/*.js', 'test/test.js', 'test/tests/**/*.js']
//     },
//     watch: {
//       files: ['<config:lint.files>', 'www/less/**/*.less', 'www/index.html'],
//       tasks: 'lint less qunit reload'
//     },
//     qunit: {
//       files: ['test/**/*.html']
//     },
//     server: {
//       port: 8000,
//       base: 'www'
//     },
//     reload: {
//       port: 6001,
//       proxy: {
//         host: 'localhost'
//       }
//     },
//     jshint: {
//       options: {
//         curly: true,
//         eqeqeq: true,
//         immed: true,
//         latedef: true,
//         newcap: true,
//         noarg: true,
//         sub: true,
//         undef: true,
//         boss: true,
//         eqnull: true,
//         browser: true
//       },
//       globals: {
//         console: true,
//         define: true,
//         require: true,
//         requirejs: true
//       }
//     }
//   });

//   grunt.loadNpmTasks('grunt-volo');
//   grunt.loadNpmTasks('grunt-reload');
//   grunt.registerTask('default', 'server lint less qunit reload watch');
// };
