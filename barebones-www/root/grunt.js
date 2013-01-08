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
      files: ['grunt.js', 'www/js/app.js', 'www/js/app/**/*.js', 'test/test.js', 'test/tests/**/*.js']
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
      files: ['<config:lint.files>', 'www/less/**/*.less', 'www/**/*.html', 'www/js/templates/src/**/*.hbs'],
      tasks: 'lint less handlebars qunit reload'
    },
    qunit: {
      files: ['test/**/*.html']
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
        asi: true,
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
    },
    htmllint: {
        all: ["www/index.html"]
    },
    handlebars: {
      compile: {
        options: {
          processName: function (filename) {
            var pieces = filename.split('/');
            return pieces[pieces.length - 1].replace('.hbs', '');
          },
          // Otherwise function calls loose the reference to Handlebars ;)
          wrapped: true
        },
        files: {
          "www/js/templates/dist/templates.js": "www/js/templates/src/**/*.hbs"
        }
      }
    },
    requirejs: {
      dist: {
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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-html');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-volo');

  grunt.registerTask('default', 'server lint less handlebars reload qunit watch');
  grunt.registerTask('dist', 'htmllint lint qunit less handlebars requirejs');

};
