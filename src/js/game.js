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
    console.log(map);

  }

  function drawMap() {
    var
    i,
    j;

    for ( i = 0; i < ROWS; i++ ) {
      for ( j = 0; j < COLS; j++ ) {
        var rand = this.rnd.frac();
        console.log(rand);
        if ( rand < 0.8 ) {
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
  }

  Game.prototype = {

    create: function() {



      this.input.onDown.add(this.onInputDown, this);

      drawMap.apply(this);
      // initMap();
      this.kibus = this.add.sprite(64, 64, 'kibus');
      this.kibus.animations.add( 'walk', [0, 1, 0, 2], true );
      this.kibus.animations.add( 'idle', [0], true );
      this.kibus.animations.play('walk', 6, true);

    },

    update: function() {
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

