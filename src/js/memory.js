(function( exports ) {
  'use strict';

  function Pathfinder() {
    this.path = [];
    this.returnPath = [];
  }

  Pathfinder.prototype = {

    getPath: function() {
      return this.path;
    },

    getReturnPath: function() {
      return this.returnPath;
    },

    push: function(dir) {
      this.path.push(dir);
      this.returnPath.unshift(this.reverseDirection(dir));
      return this;
    },

    reverseDirection: function(dir) {
      switch (dir) {
        case 'LEFT':  return 'RIGHT';
        case 'RIGHT': return 'LEFT';
        case 'UP':    return 'DOWN';
        case 'DOWN':  return 'UP';
        default:      return '';
      }
    },

    pop: function() {
      return this.reverseDirection(this.path.pop());
    },

    reset: function() {
      this.path.length = 0;
      this.returnPath.length = 0;
    }

  }; 
  exports.Pathfinder = Pathfinder;

})( this );

