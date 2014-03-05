(function() {
  'use strict';

  function Setup() {
    this.setup = true;
  }

  Setup.prototype = {

    create: function() {

      g.world.create();
      g.kibus.create();
      this.world.setBounds(0, 0, 640, 640);
      this.game.camera.follow(this.kibus.sprite);
    },

    update: function() {

    }

  };

  window['tutorial'] = window['tutorial'] || {};
  window['tutorial'].Setup = Setup;

})();


