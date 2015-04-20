module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concurrent: {
      watch: {
        files: "scss/**/*.scss",
        tasks: ['watch', 'compass:watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    // Compass contrib
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      },
      watch: {
        options: {
          watch: true
        }
      },
      compile: {
        options: {}
      }
    },

    // Uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dynamic_mappings: {
        // Grunt will search for "*.js" under "js/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'js/',      // Src matches are relative to this path.
            src: ['*.js'], // Actual pattern(s) to match.
            dest: 'js/',   // Destination path prefix.
            ext: '.min.js',   // Dest filepaths will have this extension.
            extDot: 'first'   // Extensions in filenames begin after the first dot
          },
	      ],
      },
    },

    // JSHint
    jshint: {
      beforeconcat: ['Gruntfile.js', 'js/*.js'],
      afterconcat: ['js/<%= pkg.name %>.js'],
      options: {
        ignores: ['js/*.min.js'],
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['**/*.css'],
      },
      js: {
        files: ['<%= jshint.beforeconcat %>'],
        tasks: ['jshint']
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : 'css/*.css'
        },
        options: {
          proxy: '2015.dcottawa.dflocal.net',
          watchTask: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-browser-sync');
};
