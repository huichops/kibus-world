(function() {
  'use strict';

  function Game() { }

  Game.prototype = {

    preload: function() {
      this.kibus = new Kibus(this);
      this.worldd = new World(this);
    }, 
    
    create: function() {

      g.kibus.create();
      this.world.setBounds(0, 0, 640, 640);
      this.game.camera.follow(this.kibus.sprite);
    },

    update: function() {
      g.kibus.update();
    },

    onInputDown: function() {
      // this.game.state.start('menu');
    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Game = Game;

})();

