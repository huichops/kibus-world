(function( exports ) {
  'use strict';

  function Breshenham() {
    this.path = [];
  }

  Breshenham.prototype = {

    getLine: function() {
      return this.path; 
    },

    createLine: function(x0, y0, x1, y1) {

      var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
      var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; 
      var err = (dx>dy ? dx : -dy)/2;

      while (true) {
        setPixel(x0, y0);
        if (x0 === x1 && y0 === y1) break;
        var e2 = err;
        if (e2 > -dx) { err -= dy; x0 += sx; }
        if (e2 < dy) { err += dx; y0 += sy; }
      }
      return this.path;
    },

    setPixel: function(x, y) {
      this.path.push({x: x, y: y});
    },

    reset: function() {
      this.path.length = 0;
    },

  }; 
  exports.Breshenham = Breshenham;

})( this );

