var barebones = require('./../barebones'),
    type = 'barebones-www';

exports.description = 'Barebones template for web projects.';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  barebones.prompt(grunt, init, done, {
    type: type,
    title: 'Barebones: Web Project',
    devDependencies: {
      'grunt-contrib-qunit': '~0.1.0',
      'grunt-contrib-less': '~0.3.2',
      'grunt-contrib-connect': '~0.1.0',
      'grunt-reload': '~0.2.0'
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
