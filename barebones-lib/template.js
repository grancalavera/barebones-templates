var barebones = require('./../barebones'),
    type = 'barebones-lib';

exports.description = 'Barebones template for libary projects.';
exports.warnOn = '*';

exports.template = function(grunt, init, done) {
  barebones.prompt(grunt, init, done, {
    type: type,
    title: 'Barebones: Library Project',
    devDependencies: {
      'grunt-contrib-qunit': '~0.1.0',
    },
    // project layout,
    volo: {
      baseUrl: 'lib',
      dependencies: {
        jquery: 'github:jquery/jquery/1.8.3',
        require: 'github:jrburke/requirejs/2.1.2'
      }
    }
  });
}
