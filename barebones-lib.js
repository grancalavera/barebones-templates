var barebones = require('./barebones');
exports.description = 'Barebones template for libary projects.';
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  var log = grunt.log;
  log.debug('Bare bones template in progress...');
  barebones.prompt(grunt, init, done, {
    type: 'barebones-lib',
    title: 'Barebones: Library Project',
    // see https://github.com/isaacs/node-semver
    dependencies: {
      "grunt-volo": "~0.0.1"
    },
    volo: {
      baseUrl: 'lib',
      dependencies: {
        jquery: 'github:jquery/jquery/1.8.3',
        require: 'github:jrburke/requirejs/2.1.2'
      }
    }
  });
}
