module.exports = function(grunt) {
 
  grunt.initConfig({
    csslint: {
      strict: {
        options: {
          csslintrc: '.csslintrc'
        },
        src: ['test/css/test.css', 'test/css/u-text.css']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('default', 'csslint');
 
};
