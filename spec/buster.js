var config = module.exports;

config['JSBN specs'] = {
  env: 'browser',
  rootPath: '../',
  sources: [
    'dist/jsbn.js'
  ],
  specs: [
    'spec/*-spec.js'
  ],
  specHelpers: [
    'spec/helper.js'
  ]
};
