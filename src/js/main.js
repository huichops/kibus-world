window.onload = function () {
  'use strict';

  var 
  game,
  ns = window['tutorial'];
  window.g = {};

  game = new Phaser.Game(480, 480, Phaser.AUTO, 'tutorial-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('setup', ns.Setup);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};

