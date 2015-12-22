module.exports = function(grunt) {
    
// Project configuration.
grunt.initConfig({
    
    less: {
      development: {
        options: {
          paths: ["less/"]
        },
        files: {
          "css/main.css" : "less/source.less"
        }
       }
  },
  concat: {
    css: {
      src: ['css/fonts.css', 'less/source.less'],
      dest: 'build/style.css',
    },
  },
watch: {
  css: {
    files: ['css/**/*.css'],
    tasks: ['concat'],
  },
},
});
 
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'watch']);
   
};