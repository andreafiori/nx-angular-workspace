module.exports = {
  name: 'ngwebsite',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngwebsite/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
