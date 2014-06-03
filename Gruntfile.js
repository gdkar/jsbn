module.exports = function(grunt) {

  // JSBN configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Metadata
    meta: {
      banner: '/**\n' +
              ' * Copyright (c) 2003-2005 Tom Wu <tjw@cs.Stanford.EDU>\n' +
              ' * All Rights Reserved.\n' +
              ' *\n' +
              ' * Modern, modular, linted package by Tim Kurvers <tim@moonsphere.net>\n' +
              ' *\n' +
              ' * Permission is hereby granted, free of charge, to any person obtaining\n' +
              ' * a copy of this software and associated documentation files (the\n' +
              ' * "Software"), to deal in the Software without restriction, including\n' +
              ' * without limitation the rights to use, copy, modify, merge, publish,\n' +
              ' * distribute, sublicense, and/or sell copies of the Software, and to\n' +
              ' * permit persons to whom the Software is furnished to do so, subject to\n' +
              ' * the following conditions:\n' +
              ' *\n' +
              ' * The above copyright notice and this permission notice shall be\n' +
              ' * included in all copies or substantial portions of the Software.\n' +
              ' *\n' +
              ' * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND,\n' +
              ' * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY\n' +
              ' * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.\n' +
              ' *\n' +
              ' * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,\n' +
              ' * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER\n' +
              ' * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF\n' +
              ' * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT\n' +
              ' * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.\n' +
              ' *\n' +
              ' * In addition, the following condition applies:\n' +
              ' *\n' +
              ' * All redistributions must retain an intact copy of this copyright notice\n' +
              ' * and disclaimer.\n' +
              ' */\n\n'
    },

    // BusterJS specs
    buster: {
      spec: {
        test: {
          reporter: 'specification'
        }
      }
    },

    // Concatenates release files
    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: [
          'modular/api-begin.js',
          'src/*.js',
          'modular/api-end.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    // Lints project files using JSHint
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
        '<%= concat.dist.dest %>',
        'spec/*.js'
      ]
    },

    // Minified distribution
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: ['<%= concat.dist.dest %>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    // Watch for file changes
    watch: {
      options: {
        atBegin: true
      },
      files: [
        'Gruntfile.js',
        'src/*.js',
        'modular/*.js',
        'spec/*.js'
      ],
      tasks: ['spec']
    }
  });

  grunt.loadNpmTasks('grunt-buster');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['buster::server', 'buster::phantomjs', 'watch']);
  grunt.registerTask('build',   ['concat', 'jshint']);
  grunt.registerTask('spec',    ['build', 'buster::test']);
  grunt.registerTask('release', ['spec', 'uglify']);
};
