'use strict';

module.exports = function (grunt) {
    var config = {
        libs: 'bower_components',
        src: 'src',
        tmp: '.tmp'
    };

    grunt.initConfig({
        app: config,
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            livereload: {
                options: {
                   livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= app.src %>/{,*/}*.html',
                    '<%= app.src %>/js/{,*/}*.js',
                    '<%= app.src %>/themes/**'
                ]
            }
        },
        jshint: {
            all: ['<%= app.src %>/js/{,*/}*.js']
        },
        connect: {
            options: {
                port: 1234,
                open: true,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect.static(config.src),
                            connect().use('/js', connect.static(config.libs))
                        ];
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('dev', [
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('test', [
        'jshint'
    ]);

    grunt.registerTask('default', [
        'dev'
    ]);
};
