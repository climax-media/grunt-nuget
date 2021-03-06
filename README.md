# grunt-nuget

[Grunt][grunt] NuGet Interface - Create and publish your NuGet packages using GruntJS.

## Getting Started

Install this grunt plugin next to your project's gruntfile with: `npm install grunt-nuget --save-dev`

> **Note** OSX/Unix environment require [Mono][mono] to run NuGet.exe commands

Then add this line to your project's `Gruntfile.js` :

```javascript
grunt.loadNpmTasks('grunt-nuget');
```

Then specify your config:

```javascript
grunt.initConfig({
```

For package creation: ([more information][pack-options])

> *Note: NuGet Pack does not work with mono. See [here](http://nuget.codeplex.com/workitem/2140).*

```javascript
  nugetpack: {
    dist: {
      options: {
        nugetExe: 'test/fixtures/SampleNugetPackage/.nuget/NuGet.exe'
      },
      src: 'test/fixtures/**/*.csproj',
      dest: '.tmp'
    }
  }
```

For package publication: ([more information][push-options])

```javascript
  nugetpush: {
    dist: {
      src: 'tests/*.nupkg',
      options: {
        apiKey: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        nugetExe: 'test/fixtures/SampleNugetPackage/.nuget/NuGet.exe'
      }
    }
  }
```

For package restore: ([more information][restore-options])

```javascript
  nugetrestore: {
    dist: {
      options: {
        nugetExe: 'test/fixtures/SampleNugetPackage/.nuget/NuGet.exe'
      },
      src: 'test/fixtures/**/packages.config',
      dest: '.tmp/packages/'
    }
  }
```

For project update : ([more informations][update-options])

```javascript
	nugetupdate: {
		update: {
			src: 'project.sln'
		}
	}
```

```javascript
});
```

In order to avoid specifying your API Key inside your `Gruntfile` you can use command line task : ([more informations][key-options])

```
grunt nugetkey --key=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```

[grunt]: https://github.com/gruntjs/grunt
[mono]: http://www.go-mono.com/mono-downloads/download.html
[pack-options]: https://github.com/spatools/grunt-nuget/wiki/Pack-Options
[push-options]: https://github.com/spatools/grunt-nuget/wiki/Push-Options
[restore-options]: https://github.com/spatools/grunt-nuget/wiki/Restore-Options
[update-options]: https://github.com/spatools/grunt-nuget/wiki/Update-Options
[key-options]: https://github.com/spatools/grunt-nuget/wiki/Key-Options

## Release History


* 0.1.0 Initial Release
* 0.1.1 Fix issue with OutputDirectory in NuGet Push
* 0.1.2
    * Update NuGet.exe to version 2.8
    * Add support for csproj files in nugetpack command.
* 0.1.3
    * Add package restore command
    * Added mono support on platforms other than windows
    * Fix issue when nuget-pack destination directory does not exists
* 0.1.4
    * Update NuGet.exe to version 2.8.2
    * Fix issue in options parsing.
* 0.1.5
  * Migrate deprecated Grunt utils (`_`, `async`) in favour of async & lodash libs
  * Formatting (tabs -> spaces)
  * Remove Visual Studio solution files and tests folder
* 0.1.6
  * Remove apikey task
  * Add optional custom NuGet.exe path for each task
* 0.2.0
  * Add default `Source` option in `push` task to allow backward compatibility
  * Update NuGet.exe to version 3.5.0
  * Add task nugetupdate 
