Kibus = function(game) {

  this.game = game;
  this.sprite = null;
  this.cursors = null;

};

Kibus.prototype = {

  preload: function() {
    this.game.load.spritesheet('kibus', 'assets/kibus.png', 64, 64);
  },

  create: function() {

    this.sprite = this.game.add.sprite(64, 64, 'kibus');
    this.sprite.animations.add('walk', [0, 1, 0, 2], true);
    this.sprite.animations.add('idle', [0], true);
    this.sprite.animations.play('walk', 6, true);
    this.sprite.body.collideWorldBounds = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  },

  update: function() {

    if ( this.cursors.up.isDown ) {
      this.sprite.body.velocity.y = -200;
    } else if ( this.cursors.down.isDown ) {
      this.sprite.body.velocity.y = 200;
    } else {
      this.sprite.body.velocity.y = 0;
    }

    if ( this.cursors.left.isDown ) {
      this.sprite.body.velocity.x = -200;
    } else if ( this.cursors.right.isDown ) {
      this.sprite.body.velocity.x = 200;
    } else {
      this.sprite.body.velocity.x = 0;
    }

  }
  
};

