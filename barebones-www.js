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
    devDependencies: {
      "grunt": "~0.3.17",
      "grunt-contrib-handlebars": "~0.3.3",
      "grunt-contrib-less": "~0.3.2",
      "grunt-contrib-requirejs": "~0.3.4",
      "grunt-html": "~0.3.1",
      "grunt-reload": "~0.2.0",
      "grunt-volo": "~0.0.1"
    },
    volo: {
      baseUrl: 'www/js/lib',
      dependencies: {
        jquery: 'github:jquery/jquery/1.8.3',
        require: 'github:jrburke/requirejs/2.1.2',
        Handlebars: 'https://github.com/downloads/wycats/handlebars.js/handlebars-1.0.rc.1.js'
      }
    }
  });
}
