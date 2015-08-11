// requires
var util = require('util');
var qx = require("./vendor/qooxdoo/qooxdoo/tool/grunt");

// grunt
module.exports = function(grunt) {
  var config = {

    generator_config: {
      let: {
      }
    },

    common: {
      "APPLICATION" : "qxmaterialdemo",
      "QOOXDOO_PATH" : "./vendor/qooxdoo/qooxdoo",
      "LOCALES": ["en"],
      "QXTHEME": "qxmaterialdemo.theme.Theme"
    }

    /*
    myTask: {
      options: {},
      myTarget: {
        options: {}
      }
    }
    */
  };

  var mergedConf = qx.config.mergeConfig(config);
  // console.log(util.inspect(mergedConf, false, null));
  grunt.initConfig(mergedConf);

  qx.task.registerTasks(grunt);

  // grunt.loadNpmTasks('grunt-my-plugin');
};
