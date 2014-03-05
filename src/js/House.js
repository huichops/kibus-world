(function(exports) { 
  'use strict';

  function House(game) {

    this.game = game;
    this.sprite = null;
    this.tween = null;
    this.canMove = true;
    this.tileX = 0;
    this.tileY = 0;
  }

  House.prototype = {

    preload: function() {
      this.game.load.spritesheet('house', 'assets/house.png', 64, 64);
    },

    create: function() {
      this.pf = new Pathfinder();

      this.sprite = this.game.add.sprite(64, 64, 'house');

//      this.sprite.x = this.tileX*g.world.size;
//      this.sprite.y = this.tileY*g.world.size;
    },

    update: function() {

    },

    setTilePos: function(x, y) {

      var 
      amountX = x*g.world.size,
      amountY = y*g.world.size;
      this.tileX = x;
      this.tileY = y;
      if (!this.canMove) {
        this.tween
        .to({x: amountX, y: amountY}, 250, Phaser.Easing.Linear.None, true);
      } else {
        this.tween = this.game.add.tween(this.sprite)
        .to({x: amountX, y: amountY}, 250, Phaser.Easing.Linear.None, true);
      }
    },

    getTile: function() {
      return { x: this.sprite.x/64, y: this.sprite.y/64 };
    },

  };

  exports.House = House;

})(this);

