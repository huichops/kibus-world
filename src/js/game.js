(function() {
  'use strict';

  function Game() { 
    this.setup = true;
  }

  Game.prototype = {

    preload: function() {

    }, 
    
    create: function() {

      g.world.draw();
      g.kibus.create();
      this.world.setBounds(0, 0, 960, 960);
      this.game.camera.follow(g.kibus.sprite);
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

