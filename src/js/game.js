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
        var 
        freq = this.rnd.frac(),
        frame = this.rnd.integerInRange(0,2);

        if ( freq < 0.8 ) {
          this.add.sprite(i*64, j*64, 'floor');
        } else {
          var o = this.obstacles .create( i*64, j*64, 'obstacles', frame);
          o.name = 'obs' + i;

          o.body.immovable = true;
          
        }
      }
    }
  }

  function Game() {
    this.kibus = null;
    this.obstacles = null;
  }

  Game.prototype = {

    preload: function() {
      this.kibus = new Kibus(this);
    }, 
    
    create: function() {

      this.obstacles = this.add.group();

      drawMap.apply(this);
      // initMap();
      this.kibus.create();
    },

    update: function() {

      /*this.physics.collide( this.kibus.sprite,
          this.obstacles,
          null, null, this );
          */
      this.kibus.update();

    },

    onInputDown: function () {
      // this.game.state.start('menu');
    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Game = Game;

})();

