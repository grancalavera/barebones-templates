var path = require('path'),
    fs = require('fs');

exports.description = 'Barebones template for web projects.';
exports.warnOn = '*';
exports.template = function(grunt, init, done) {
  var log = grunt.log;
  log.debug('Bare bones template in progress...');
  grunt.helper('prompt', {type: 'barebones'}, [
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'description', 'none'),
    {
      name: 'dev_dir',
      message: 'Develompment dir (relative to project root):',
      default: 'www'
    },
    {
      name: 'js_dir',
      message: 'Scripts directory (relative to development directory):',
      default: 'js'
    },
    {
      name: 'styles_dir',
      message: 'Styles directory (relative to development directory):',
      default: 'less'
    },
    {
      name: 'test_dir',
      message: 'Tests directory (relative to project root):',
      default: 'test'
    }
    ], function (err, props) {

      props.file_name = '<%= pkg.name %>';
      props.js_dir = path.join(props.dev_dir, props.js_dir);
      props.app_dir = path.join(props.js_dir, 'app');
      props.lib_dir = path.join(props.js_dir, 'lib');
      props.styles_dir = path.join(props.dev_dir, props.styles_dir);

      var lines = Object.keys(props).reduce(function (lines, key) {
        lines.push(key + ': ' + props[key]);
        return lines;
      }, []);
      log.debug('\n' + log.wordlist(lines, '\n'));

      var files = init.filesToCopy(props);
      log.debug(files);

      grunt.file.mkdir(props.app_dir);
      grunt.file.mkdir(props.lib_dir);
      grunt.file.mkdir(props.styles_dir);
      grunt.file.mkdir(props.test_dir);

      init.copyAndProcess(files, props);

      init.writePackageJSON('package.json', {
        name: props.name,
        version: props.version,
        node_version: '>= 0.6.0',
        dependencies: {
          "grunt-volo": "0.0.1",
          "grunt-contrib-less": "*",
          "grunt-reload": "*"
        }
      }, function (pkg) {
        pkg.volo = {
          baseUrl: props.lib_dir
        }
        return pkg;
      });

      done();
    });
}
