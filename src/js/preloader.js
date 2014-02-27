(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function() {
      var kibus = new Kibus(this);
      kibus.preload();

      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('floor', 'assets/floor.png');
      this.load.spritesheet('obstacles', 'assets/obstacles.png', 64, 64);

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

