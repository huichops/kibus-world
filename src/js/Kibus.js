(function(exports) {
  'use strict';

  function Kibus(game) {

    this.game = game;
    this.pf = null;
    this.sprite = null;
    this.cursors = null;
    this.returnTween = null;
    this.tween = null;
    this.canMove = true;
    this.tileX = 0;
    this.tileY = 0;

  }

  Kibus.prototype = {

    preload: function() {
      this.game.load.spritesheet('kibus', 'assets/kibus.png', 64, 64);
    },

    create: function() {
      this.pf = new Pathfinder();
      this.sprite = this.game.add.sprite(0, 0, 'kibus');
      this.sprite.animations.add('walk', [0, 1, 0, 2], true);
      this.sprite.animations.add('idle', [0], true);
      this.sprite.animations.play('walk', 6, true);

      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function() {

      if (this.tween == null || !this.tween.isRunning) this.move();
    },

    move: function() {
      if (!this.canMove) return;
      if (this.cursors.up.isDown) {

        if (!this.game.worldd.collideTile(this.tileX, this.tileY - 1)) {
          this.setTilePos(this.tileX, this.tileY - 1);
          this.pf.push('UP');
          this.game.camera.y -= this.game.worldd.size;
        }

      } else if (this.cursors.down.isDown) {

        if (!this.game.worldd.collideTile(this.tileX, this.tileY + 1)) {
          this.setTilePos(this.tileX, this.tileY + 1);
          this.pf.push('DOWN');
          this.game.camera.y += this.game.worldd.size;
        }
      }

      if (this.cursors.left.isDown) {

        if (!this.game.worldd.collideTile(this.tileX - 1, this.tileY)) {
          this.setTilePos(this.tileX - 1, this.tileY);
          this.pf.push('LEFT');
        }

      } else if (this.cursors.right.isDown) {

        if (!this.game.worldd.collideTile(this.tileX + 1, this.tileY)) {
          this.pf.push('RIGHT');
          this.setTilePos(this.tileX + 1, this.tileY);
        }
      }
    },

    setTilePos: function(x, y) {
      //this.sprite.body.x = x*this.game.worldd.size;
      //this.sprite.body.y = y*this.game.worldd.size;
      this.tileX = x;
      this.tileY = y;
      this.tween = this.game.add.tween(this.sprite)
        .to({x: x*this.game.worldd.size, y: y*this.game.worldd.size},
            250, Phaser.Easing.Linear.None, true);

      //this.sprite.body.x
    },
  
    onComplete: function() {

    },

    returnToHouse: function() {
      this.returnTween = this.game.add.tween(this.sprite)
        .to({ x: 0, y: 0 }, 500, Phaser.Easing.Linear.None, true);
    }
    
  };

  exports.Kibus = Kibus;

})(this);

