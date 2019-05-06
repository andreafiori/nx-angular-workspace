module.exports = {
  name: 'registration-login-sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/registration-login-sample/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
