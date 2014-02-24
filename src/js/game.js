(function() {
  'use strict';

  var map = [],
      ROWS = 10,
      COLS = 10;

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
    // console.log(map);

  }

  function drawMap() {
    var
    i,
    j;

    for ( i = 0; i < ROWS; i++ ) {
      for ( j = 0; j < COLS; j++ ) {
        var rand = this.rnd.frac();
        // console.log(rand);
        if ( rand < 0.7 ) {
          this.add.sprite(i*64, j*64, 'floor');
        } else {
          this.add.sprite(i*64, j*64, 'obstacles');
        }
      }
    }
  }

  function Game() {
    this.player = null;
    this.kibus = null;
    this.tiles = null;
    this.cursors = null;
  }

  Game.prototype = {

    create: function() {

      this.input.onDown.add(this.onInputDown, this);
      this.cursors = this.input.keyboard.createCursorKeys();


      drawMap.apply(this);
      // initMap();
      this.kibus = this.add.sprite(64, 64, 'kibus');
      this.kibus.animations.add( 'walk', [0, 1, 0, 2], true );
      this.kibus.animations.add( 'idle', [0], true );
      this.kibus.animations.play('walk', 6, true);

    },

    update: function() {

      if ( this.cursors.up.isDown ) {
        this.kibus.body.velocity.y = -200;
      } else if ( this.cursors.down.isDown ) {
        this.kibus.body.velocity.y = 200;
      } else {
        this.kibus.body.velocity.y = 0;
      }

      if ( this.cursors.left.isDown ) {
        this.kibus.body.velocity.x = -200;
      } else if ( this.cursors.right.isDown ) {
        this.kibus.body.velocity.x = 200;
      } else {
        this.kibus.body.velocity.x = 0;
      }

    },

    onInputDown: function () {
      // this.game.state.start('menu');
      if ( this.kibus.animations.currentAnim.name === 'walk' ) this.kibus.animations.play('idle');
      else this.kibus.animations.play('walk', 6, true);
    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Game = Game;

})();

