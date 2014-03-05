(function() {
  'use strict';

  function Setup() { }

  Setup.prototype = {

    create: function() {
      g.world.create();
      g.world.draw();
      g.house.create();
      g.kibus.create();
      g.kibus.sprite.inputEnabled = true;
      g.kibus.sprite.input.enableDrag(false, true);
      g.kibus.sprite.input.enableSnap(64, 64, false, true);
      g.kibus.sprite.events.onDragStop.add(function() {
        var tile = g.kibus.getTile();
        if (!g.world.collideTile(tile.x, tile.y)) {
          g.kibus.initialX = tile.x;
          g.kibus.initialY = tile.y;
        } else {
          g.kibus.setTilePos(g.kibus.initialX, g.kibus.initialY);
        }

      });
      this.world.setBounds(0, 0, 960, 960);
      this.game.camera.follow(g.kibus.sprite);
    },

    update: function() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        this.game.state.start('game');

    }


  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Setup = Setup;

})();


