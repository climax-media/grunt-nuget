module.exports = function (grunt) {
  grunt.initConfig({

    nugetpack: {
      defaultOptions: {
        options: {
        },
        src: 'test/fixtures/**/*.csproj',
        dest: '.tmp'
      }
    },

    nugetrestore: {
      restore: {
        src: 'tests/packages.config',
        dest: 'packages/'
      }
    },

    clean: {
      tests: ['.tmp']
    },

    nodeunit: {
      tests: ['test/*.test.js']
    }
  });

  // Load development tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Load this plugin's task(s) for testing.
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'nugetpack', 'nodeunit']);

  grunt.registerTask('default', ['clean', 'nugetpack', 'nugetrestore']);
};