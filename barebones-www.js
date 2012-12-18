var barebones = require('./barebones');
exports.description = 'Barebones template for web projects.';
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  var log = grunt.log;
  log.debug('Bare bones template in progress...');
  barebones.prompt(grunt, init, done, {
    type: 'barebones-www',
    title: 'Barebones: Web Project',
    // see https://github.com/isaacs/node-semver
    dependencies: {
      "grunt-volo": "~0.0.1",
      "grunt-contrib-less": "~0.3.2",
      "grunt-reload": "~0.2.0"
    },
    volo: {
      baseUrl: 'www/js/lib',
      dependencies: {
        jquery: 'github:jquery/jquery/1.8.3',
        require: 'github:jrburke/requirejs/2.1.2'
      }
    }
  });
}
