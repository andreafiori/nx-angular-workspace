module.exports = {
  name: 'registration-login-sample',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/registration-login-sample',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
