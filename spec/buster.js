var config = module.exports;

config['JSBN tests'] = {
  env: 'browser',
  rootPath: '../',
  sources: [
    'dist/jsbn.js'
  ],
  specs: [
    'spec/*-test.js'
  ]
};
