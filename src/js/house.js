(function(exports) { 
  'use strict';

  function House(game) {

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

  House.prototype = {

    preload: function() {
      this.game.load.spritesheet('house', 'assets/house.png', 64, 64);
    },

    create: function() {
      this.pf = new Pathfinder();

      this.sprite = this.game.add.sprite(0, 0, 'house');
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

    },

    getTile: function() {
      return { x: this.sprite.x/64, y: this.sprite.y/64 };
    },

  };

  exports.House = House;

})(this);

