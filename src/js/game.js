(function() {
  'use strict';

  function Game() { }

  Game.prototype = {

    preload: function() {

    },

    create: function() {

      g.world.draw();
      g.kibus.create();
      g.house.create();
      this.text = this.add.bitmapText(0, 400, 'Press R to go back',
        {font: '16px minecraftia', align: 'center'});
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

