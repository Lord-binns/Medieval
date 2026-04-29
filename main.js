import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Load assets here
}

function create() {
    // Create game objects here
    this.add.text(400, 300, 'Medieval Game', {
        font: '32px Arial',
        fill: '#ffffff'
    }).setOrigin(0.5);
}

function update() {
    // Update game logic here
}
