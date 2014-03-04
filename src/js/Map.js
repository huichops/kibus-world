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

    create: function() {
      var
      size = 64,
      i,
      j;
      for (i = 0; i < this.ROWS; i++) {
        this.data[i] = [];
        for (j = 0; j < this.COLS; j++) {
          var
          freq = this.game.rnd.frac(),
          frame = this.game.rnd.integerInRange(0, 2);
          if ( freq < 0.8 ) {
            this.data[i][j] = 0;
            this.game.add.sprite(i*size, j*size, 'floor');
          } else {
            this.data[i][j] = 1;
            this.game.add.sprite(i*size, j*size, 'obstacles', frame);
            //var o = this.obstacles.create(i*size, j*size, 'obstacles', frame);
            //o.name = 'obs' + i;
          
          }

        }
      }
      console.log(this.data);
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
    }
    
  };

  exports.World = World;

})(this);

