var barebones = require('./../barebones');
exports.description = 'Barebones template for libary projects.';
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  var log = grunt.log;
  log.debug('Barebones template in progress...');
  barebones.prompt(grunt, init, done, {
    type: 'barebones-lib',
    title: 'Barebones: Library Project',
    // see https://github.com/isaacs/node-semver
    devDependencies: {
      'volo': '~0.2.6',
      'grunt': '~0.4.0',
      'grunt-contrib-jshint': '~0.1.0',
      'grunt-contrib-qunit': '~0.1.0',
      'grunt-contrib-concat': '~0.1.0',
      'grunt-contrib-uglify': '~0.1.0',
      'grunt-contrib-watch': '~0.2.0'
    },
    volo: {
      baseUrl: 'lib',
      dependencies: {
        jquery: 'github:jquery/jquery/1.8.3',
        require: 'github:jrburke/requirejs/2.1.2',
      }
    }
  });
}
