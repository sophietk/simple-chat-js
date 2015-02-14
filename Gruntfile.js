module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                files: {
                    'app/css/style.css' : 'app/sass/style.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['app/sass/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['sass:dev', 'watch']);

};