var barebones = require('./../barebones'),
    type = 'barebones-www';

exports.description = 'Barebones template for web projects.';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  barebones.prompt(grunt, init, done, {
    type: type,
    title: 'Barebones: Web Project',
    devDependencies: {
      "grunt-contrib-copy": "~0.4.1",
      "grunt-contrib-connect": "~0.3.0",
      "grunt-contrib-less": "~0.5.1",
      "grunt-contrib-livereload": "~0.1.2",
      "grunt-contrib-qunit": "~0.2.1",
      "grunt-regarde": "~0.1.1"
    },
    volo: {
      baseUrl: 'www/js/lib',
      dependencies: {
        jquery: 'github:jquery/jquery/2.0.0',
        require: 'github:jrburke/requirejs/2.1.2'
      }
    }
  });
}
