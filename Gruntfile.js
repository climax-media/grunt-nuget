module.exports = function (grunt) {
  grunt.initConfig({

   nugetpack: {
	    options: {
        verbosity: "detailed"
        },
      defaultOptions: {
        options: {
        },
        src: 'test/fixtures/**/*.csproj',
        dest: '.tmp/build/packages'
      },
      customNugetExePath: {
        options: {
          nugetExe: 'test/fixtures/SampleNugetPackage/.nuget/NuGet.exe'
        },
        src: 'test/fixtures/**/*.csproj',
        dest: '.tmp/build/packages'
      }
    },

    nugetrestore: {
      defaultOptions: {
        src: 'test/fixtures/**/packages.config',
        dest: '.tmp/packages/'
      },
      customNugetExePath: {
        options: {
          nugetExe: 'test/fixtures/SampleNugetPackage/.nuget/NuGet.exe'
        },
        src: 'test/fixtures/**/packages.config',
        dest: '.tmp/packages/'
      }
    },

    nugetpush: {
      dist: {
        src: '.tmp/build/packages/*.nupkg',
        options: {
          source: 'http://mynugetserver.com',
          apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'      
        },       
      }
    },
    nugetupdate: {
      update: {
        src: 'tests/project.sln'
        }
    },
    clean: {
      tests: ['.tmp'],
      pack: {
        src: 'tests/PackageTest.1.0.0.nupkg'
      },
      restore: {
        src: 'packages'
      }
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
  grunt.registerTask('test', ['clean', 'nugetrestore', 'nugetpack', 'nodeunit']);

  grunt.registerTask('default', ['clean', 'nugetpack', 'nugetrestore']);
};
