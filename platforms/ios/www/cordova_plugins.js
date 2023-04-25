cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-gleap.GleapPlugin",
      "file": "plugins/cordova-plugin-gleap/www/GleapPlugin.js",
      "pluginId": "cordova-plugin-gleap",
      "clobbers": [
        "cordova.plugins.GleapPlugin"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-gleap": "10.0.3"
  };
});