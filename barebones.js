var path = require('path'),
    fs = require('fs');

exports.description = 'Barebones template for web projects.';
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  var log = grunt.log;
  log.debug('Bare bones template in progress...');
  grunt.helper('prompt', {type: 'barebones'}, [
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'title', 'Barebones'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'description', 'A minimal project template.')
    ], function (err, props) {

      props.file_name = '<%= pkg.name %>';
      props.js_dir = path.join(props.dev_dir, props.js_dir);
      props.app_dir = path.join(props.js_dir, 'app');
      props.lib_dir = path.join(props.js_dir, 'lib');
      props.styles_dir = path.join(props.dev_dir, props.styles_dir);
      props.dependencies = {
        "grunt-volo": "~0.0.1",
        "grunt-contrib-less": "~0.3.2",
        "grunt-reload": "~0.2.0"
      }

      var files = init.filesToCopy(props);

      init.copyAndProcess(files, props);

      init.writePackageJSON('package.json', {
        name: props.name,
        version: props.version,
        node_version: '>= 0.6.0',
        dependencies: props.dependencies
      }, function (pkg) {
        pkg.volo = {
          baseUrl: 'www/js/lib',
          dependencies: {
            jquery: 'github:jquery/jquery/1.8.3',
            require: 'github:jrburke/requirejs/2.1.2'
          }
        }
        return pkg;
      });
      log.writeln(' ');
      log.writeln('1. Run "npm install" to install this template\'s node modules.'.cyan);
      log.writeln('2. Run "grunt volo:add -amdoff" to install this template\'s volo dependencies.'.cyan);
      log.writeln(' ');
      done();
    });
}
