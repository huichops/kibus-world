(function() {
  'use strict';

  function Game() {
    this.kibus = null;
    this.obstacles = null;
    this.world = null;
  }

  Game.prototype = {

    preload: function() {
      this.kibus = new Kibus(this);
      this.world = new World(this);
    }, 
    
    create: function() {

      this.world.create();
      this.kibus.create();
    },

    update: function() {

      this.kibus.update();

    },

    onInputDown: function () {
      // this.game.state.start('menu');
    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Game = Game;

})();

