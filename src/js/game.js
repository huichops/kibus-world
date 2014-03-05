(function() {
  'use strict';

  function Game() {
    this.kibus = null;
    this.obstacles = null;
    this.worldd = null;
    this.setup = true;
  }

  Game.prototype = {

    preload: function() {
      this.kibus = new Kibus(this);
      this.worldd = new World(this);
    }, 
    
    create: function() {

      this.worldd.create();
      this.kibus.create();
      this.world.setBounds(0, 0, 640, 640);
      this.game.camera.follow(this.kibus.sprite);
    },

    update: function() {
      this.kibus.update();
    },

    onInputDown: function() {
      // this.game.state.start('menu');
    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Game = Game;

})();

