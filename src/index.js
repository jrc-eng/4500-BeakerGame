import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import g from "./scenes/Game"

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [
    g
  ]
};

const game = new Phaser.Game(config);

