(function() {
  'use strict';

  function Game() { }

  Game.prototype = {

    preload: function() {

    }, 
    
    create: function() {

      g.world.draw();
      g.kibus.create();
      this.world.setBounds(0, 0, 640, 640);
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

