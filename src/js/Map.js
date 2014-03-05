(function(exports) {
  'use strict';

  function World(game, rows, cols) {

    this.game = game;
    this.sprite = null;
    this.obstacle = null;
    this.data = [];
    this.ROWS = rows || 10;
    this.COLS = cols || 10;
    this.size = 64;

  }

  World.prototype = {

    preload: function() {
      this.game.load.image('floor', 'assets/floor.png');
      this.game.load.spritesheet('obstacles', 'assets/obstacles.png', 64, 64);
    },

    draw: function() {

      var
      size = 64,
      frame,
      i,
      j;

      for (i = 0; i < this.ROWS; i++) {
        for (j = 0; j < this.COLS; j++) {
          frame = this.game.rnd.integerInRange(0, 2);
          if (this.data[i][j] === 0) {
            this.game.add.sprite(i*size, j*size, 'floor');
          } else {
            this.game.add.sprite(i*size, j*size, 'obstacles', frame);
          }
        }
      }
    },

    create: function() {

      var
      i,
      j;

      for (i = 0; i < this.ROWS; i++) {
        this.data[i] = [];
        for (j = 0; j < this.COLS; j++) {
          var freq = this.game.rnd.frac();

          if ( freq < 0.8 ) {
            this.data[i][j] = 0;
          } else {
            this.data[i][j] = 1;
          }
        }
      }
    },

    update: function() {

    },

    collideTile: function(x, y) {
      
      if (y < 0 || y >= this.ROWS) {
        return true;
      } else if (x < 0 || x >= this.COLS) {
        return true;
      } else if (this.data[x][y] === 1) {
        return true;
      } else {
        return false;
      }
    },

    reset: function() {
        this.returnPath.length = 0;
    }
    
  };

  exports.World = World;

})(this);

