/*global module:false*/
module.exports = function(grunt) {

  // JSBN configuration
  grunt.initConfig({
    
    meta: {
      
      // Banner prepended to distribution
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
              ' * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, \n' +
              ' * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY \n' +
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
              ' */'
    },
    
    // Lints Grunt-file and library itself
    lint: {
      files: [
        'grunt.js',
        'dist/jsbn.js'
      ]
    },
    
    // Concatenate library
    concat: {
      dist: {
        src: [
          '<banner:meta.banner>',
          'modular/api-begin.js',
          'src/*.js',
          'modular/api-end.js'
        ],
        dest: 'dist/jsbn.js'
      }
    },
    
    // Minified distribution
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/jsbn.min.js'
      }
    },
    
    // Watch for changes to library
    watch: {
      files: [
        'src/*.js',
        'modular/*.js'
      ],
      tasks: 'concat lint'
    },
    
    // JSHint options
    jshint: {
      options: {
        curly: false,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        shadow: true
      },
      globals: {}
    },
    uglify: {}
  });
  
  grunt.registerTask('default', 'watch');
  grunt.registerTask('release', 'concat lint min');

};