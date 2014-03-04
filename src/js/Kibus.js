(function(exports) {
  'use strict';

  function Kibus(game) {

    this.game = game;
    this.sprite = null;
    this.cursors = null;
    this.moving = false;
    this.tileX = 0;
    this.tileY = 0;

  }

  Kibus.prototype = {

    preload: function() {
      this.game.load.spritesheet('kibus', 'assets/kibus.png', 64, 64);
    },

    create: function() {

      this.sprite = this.game.add.sprite(0, 0, 'kibus');
      this.sprite.animations.add('walk', [0, 1, 0, 2], true);
      this.sprite.animations.add('idle', [0], true);
      this.sprite.animations.play('walk', 6, true);
      this.sprite.body.collideWorldBounds = true;

      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function() {

      if (this.cursors.up.isDown) {

        if (!this.game.world.collideTile(this.tileX, this.tileY - 1)) {
          this.setTilePos(this.tileX, this.tileY - 1);
        }

      } else if (this.cursors.down.isDown) {

        if (!this.game.world.collideTile(this.tileX, this.tileY + 1)) {
          this.setTilePos(this.tileX, this.tileY + 1);
        }
      }

      if (this.cursors.left.isDown) {

        if (!this.game.world.collideTile(this.tileX - 1, this.tileY)) {
          this.setTilePos(this.tileX - 1, this.tileY);
        }

      } else if (this.cursors.right.isDown) {

        if (!this.game.world.collideTile(this.tileX + 1, this.tileY)) {
          console.log(this.tileX, this.tileY);
          this.setTilePos(this.tileX + 1, this.tileY);
        }
      }
    }, 

    setTilePos: function(x, y) {
      console.log(this);
      this.sprite.body.x = x*this.game.world.size;
      this.sprite.body.y = y*this.game.world.size;
      this.tileX = x;
      this.tileY = y;
      //this.sprite.body.x
    }
    
  };

  exports.Kibus = Kibus;

})(this);

