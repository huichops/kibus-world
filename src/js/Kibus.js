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
    this.initialX = 0;
    this.initialY = 0;

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

      this.sprite.x = this.initialX*g.world.size;
      this.sprite.y = this.initialY*g.world.size;
      this.tileX = this.initialX;
      this.tileY = this.initialY;
      this.cursors = this.game.input.keyboard.createCursorKeys();
    },

    update: function() {

      if (this.game.input.keyboard.isDown(Phaser.Keyboard.R)) 
        this.returnToHouse();
      if (this.tween == null || !this.tween.isRunning) this.move();
      if (this.tileX == this.initialX && this.tileY == this.initialY) {
        this.pf.reset();
        this.canMove = true;

      }
    },

    getTile: function() {
      return { x: this.sprite.x/64, y: this.sprite.y/64 };
    },

    move: function() {
      if (!this.canMove) return;
      if (this.cursors.up.isDown) {

        console.log(this.tileX, this.tileY);
        if (!g.world.collideTile(this.tileX, this.tileY - 1)) {
          this.moveOneTile('UP');
          this.pf.push('UP');
        }

      } else if (this.cursors.down.isDown) {

        if (!g.world.collideTile(this.tileX, this.tileY + 1)) {
          this.moveOneTile('DOWN');
          this.pf.push('DOWN');
        }
      }

      if (this.cursors.left.isDown) {

        if (!g.world.collideTile(this.tileX - 1, this.tileY)) {
          this.moveOneTile('LEFT');
          this.pf.push('LEFT');
        }

      } else if (this.cursors.right.isDown) {

        if (!g.world.collideTile(this.tileX + 1, this.tileY)) {
          this.moveOneTile('RIGHT');
          this.pf.push('RIGHT');
        }
      }
    },

    moveOneTile: function(dir) {
      switch (dir) {
        case 'LEFT':  this.setTilePos(this.tileX - 1, this.tileY);
                      break;
        case 'RIGHT': this.setTilePos(this.tileX + 1, this.tileY);
                      break;
        case 'UP':    this.setTilePos(this.tileX, this.tileY - 1);
                      break;
        case 'DOWN':  this.setTilePos(this.tileX, this.tileY + 1);
                      break;
        default:      return '';
      }
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
  
    onComplete: function() {

    },

    returnToHouse: function() {
      var _this = this;

      this.canMove = false;

      this.pf.returnPath.forEach(function(e, index, a) {
        _this.moveOneTile(e);
      });

    }

  };

  exports.Kibus = Kibus;

})(this);

