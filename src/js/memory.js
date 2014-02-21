(function() {
  'use strict';

  function Pathfinder() {
    this.path = [];
  }

  Pathfinder.prototype = {

    add: function (dir) {
      this.path.push(dir);
    },

    reverseDirection: function (dir) {
      switch (dir) {
        case 'LEFT':  return 'RIGHT';
        case 'RIGHT': return 'LEFT';
        case 'UP':    return 'DOWN';
        case 'DOWN':  return 'UP';
        default:      return '';
      }
    },

    pop: function () {
      return this.reverseDirection(this.path.pop());
    },

    log: function () {
      console.log('test');
    }

  };

  window.Pathfinder = Pathfinder;


}());

