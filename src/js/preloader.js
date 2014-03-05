(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function() {
      g.kibus = new Kibus(this);
      g.world = new World(this, 15, 15);
      g.house = new House(this);
      g.kibus.preload();
      g.house.preload();
      g.world.preload();

      this.asset = this.add.sprite(320, 320, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);

      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function() {
      this.asset.cropEnabled = false;
    },

    update: function() {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function() {
      this.ready = true;
    }
  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Preloader = Preloader;

})();

