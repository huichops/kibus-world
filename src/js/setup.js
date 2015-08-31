(function() {
  'use strict';

  function Setup() {
    this.states = {
      kibus: 0,
      house: 1,
      obstacles: 2
    },
    this.text = null,
    this.ins = null,
    this.state = -1;
  }

  Setup.prototype = {

    create: function() {
      this.state = this.states.kibus;
      this.ins = this.add.bitmapText(0, 0, 'h house, k kibus',
        {font: '16px minecraftia', align: 'center'});
      g.world.create();
      g.world.draw();
      this.setKibus();

      this.text = this.add.bitmapText(0, 400, 'Drag Kibus to starting position',
        {font: '16px minecraftia', align: 'center'});
      this.keyText = this.add.bitmapText(0, 400, 'Press Space when ready',
        {font: '16px minecraftia', align: 'center'});
      this.world.setBounds(0, 0, 960, 960);
    },

    update: function() {
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.H)){
        g.kibus.inputEnabled = false;
        this.setHouse();
        this.text = this.add.bitmapText(0, 400, 'set house',
          {font: '16px minecraftia', align: 'center'});
      }
      if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
        this.game.state.start('game');

    },

    setHouse: function() {
      g.house.create();
      g.house.sprite.inputEnabled = true;
      g.house.sprite.input.enableDrag(false, true);
      g.house.sprite.input.enableSnap(64, 64, false, true);
      g.house.sprite.events.onDragStop.add(function() {
        var tile = g.house.getTile();
        if (!g.world.collideTile(tile.x, tile.y)) {
          g.house.initialX = tile.x;
          g.house.initialY = tile.y;
        } else {
          g.house.setTilePos(g.house.initialX, g.house.initialY);
        }

      });
      this.game.camera.follow(g.house.sprite);
    },

    setKibus: function() {
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
      this.game.camera.follow(g.kibus.sprite);

    }


  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Setup = Setup;

})();


