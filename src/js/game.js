(function() {
  'use strict';

  var map = [],
      ROWS = 15,
      COLS = 15;

  function initMap() {
    var
    i = 0,
    j = 0;

    for ( i; i < ROWS; i++ ) {
      var row = [];
      for ( j = 0; j < COLS; j++ ) {
        if ( Math.random() > 0.8 ) {
          row.push(1);
        } else {
          row.push(0);
        }
      }
      map.push(row);
    }
    console.log(map);

  }

  function Game() {
    this.player = null;
    this.kibus = null;
    this.tiles = null;
  }

  Game.prototype = {

    create: function() {
      var
      x = this.game.width / 2,
      y = this.game.height / 2;

      this.player = this.add.sprite(x, y, 'player');
      this.player.anchor.setTo(0.5, 0.5);

      this.kibus = this.add.sprite(0, 1, 'kibus');
      this.kibus.animations.add('walk');
      this.kibus.animations.play('walk', 7, true);

      this.tiles = this.add.sprite(200, 200, 'floor');

      this.input.onDown.add(this.onInputDown, this);
      initMap();
    },

    update: function() {
      var x, y, cx, cy, dx, dy, angle, scale;


      x = this.input.position.x;
      y = this.input.position.y;
      cx = this.world.centerX;
      cy = this.world.centerY;

      angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      this.player.angle = angle;

      dx = x - cx;
      dy = y - cy;
      scale = Math.sqrt(dx * dx + dy * dy) / 100;

      this.player.scale.x = scale * 0.6;
      this.player.scale.y = scale * 0.6;
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Game = Game;

})();

