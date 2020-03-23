module.exports = {
  name: 'ngwebsite',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngwebsite',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
