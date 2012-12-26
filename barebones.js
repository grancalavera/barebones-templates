exports.prompt = function (grunt, init, done, options) {
  var log = grunt.log;
  options = options || {};
  grunt.helper('prompt', {type: options.type}, [
    grunt.helper('prompt_for', 'name'),
    grunt.helper('prompt_for', 'title', options.title || 'Barebones'),
    grunt.helper('prompt_for', 'description', 'A minimal project template.'),
    grunt.helper('prompt_for', 'version'),
    grunt.helper('prompt_for', 'repository'),
    grunt.helper('prompt_for', 'homepage'),
    grunt.helper('prompt_for', 'bugs'),
    grunt.helper('prompt_for', 'licenses', 'MIT'),
    grunt.helper('prompt_for', 'author_name'),
    grunt.helper('prompt_for', 'author_email'),
    grunt.helper('prompt_for', 'author_url')
  ], function (err, props) {
    var files;
    props.file_name = '<%= pkg.name %>';
    props.devDependencies = options.devDependencies || {};
    files = init.filesToCopy(props);
    init.copyAndProcess(files, props);
    init.writePackageJSON('package.json', {
      name: props.name,
      version: props.version,
      node_version: '>= 0.8.14',
      devDependencies: props.devDependencies
    }, function (pkg) {
      pkg.volo = options.volo || {};
      return pkg;
    });
    log.writeln(' ');
    log.writeln('1. Run "npm install" to install this template\'s node modules.'.cyan);
    log.writeln('2. Run "grunt volo:add -amdoff" to install this template\'s volo dependencies.'.cyan);
    log.writeln(' ');
    done();
  });
};
