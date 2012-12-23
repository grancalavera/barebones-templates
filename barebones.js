exports.prompt = function (grunt, init, done, options) {
  var log = grunt.log;
  options = options || {};
  init.process({type: options.type || 'Barebones Template'}, [
    init.prompt('name'),
    init.prompt('title', options.title || 'Barebones'),
    init.prompt('description', 'A minimal project template.'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('homepage'),
    init.prompt('bugs'),
    init.prompt('licenses', 'MIT'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url')
  ], function (err, props) {

    props.file_name = '<%= pkg.name %>';
    props.devDependencies = options.devDependencies || {};
    props.node_version = '>=0.8.14';

    var files = init.filesToCopy(props);
    init.copyAndProcess(files, props);

    init.writePackageJSON('package.json', props, function (pkg) {
      pkg.volo = options.volo || {};
      return pkg;
    });

    log.writeln('1. Run "npm install" to install this template\'s node modules.'.cyan);
    log.writeln('2. Run "volo add -amdoff" to install this template\'s volo dependencies.'.cyan);

    done();
  });
};
