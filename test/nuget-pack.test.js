'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.nugetpack = {
  setUp: function (done) {
    done();
  },

  defaultOptions: function (test) {
    test.expect(1);

    var packageCreated = grunt.file.exists('.tmp/build/packages/SampleNuGetPackage.1.0.0.0.nupkg');
    test.ok(packageCreated, 'should create a .nupkg file');

    test.done();
  }
};
