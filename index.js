// Generated by CoffeeScript 1.7.0
(function() {
  var WoolPlugin, ucfirst;

  ucfirst = require('ucfirst');

  module.exports = function(game, opts) {
    return new WoolPlugin(game, opts);
  };

  WoolPlugin = (function() {
    function WoolPlugin(game, opts) {
      var _ref;
      this.registry = (function() {
        if ((_ref = game.plugins.get('voxel-registry')) != null) {
          return _ref;
        } else {
          throw new Error('voxel-wool requires voxel-registry plugin');
        }
      })();
      this.colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'lime', 'magenta', 'orange', 'pink', 'purple', 'red', 'silver', 'white', 'yellow'];
      this.enable();
    }

    WoolPlugin.prototype.enable = function() {
      return this.registry.registerBlocks('wool', this.colors.length, {
        names: this.colors.map(function(color) {
          return 'wool' + ucfirst(color);
        }),
        texture: (function(_this) {
          return function(offset) {
            var _ref;
            return 'wool_colored_' + ((_ref = _this.colors[offset]) != null ? _ref : _this.colors[0]);
          };
        })(this),
        displayName: (function(_this) {
          return function(offset) {
            return ucfirst(_this.colors[offset]) + ' Wool';
          };
        })(this),
        creativeTab: 'decorative'
      });
    };

    WoolPlugin.prototype.disable = function() {};

    return WoolPlugin;

  })();

}).call(this);
