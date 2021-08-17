class SceneOver extends Phaser.Scene {
    constructor() {
        super('SceneOver');
    }
    preload() {}
    create() {
      this.add.image(0, 0, 'background').setOrigin(0.5, 0.5);
        this.alignGrid = new AlignGrid({
            rows: 11,
            cols: 11,
            scene: this
        });
        //this.alignGrid.showNumbers();
        var title = this.add.image(0, 0, 'title');
        Align.scaleToGameW(title, .8);
        this.alignGrid.placeAtIndex(16, title);
        this.winnerText = this.add.text(0, 0, "WINNER", {
            fontSize: game.config.width / 10,
            color: "#3FE213"
        });
        this.winnerText.setOrigin(0.5, 0.5);
        this.alignGrid.placeAtIndex(38, this.winnerText);
        if (model.playerWon == true) {
            this.winner = this.add.image(0, 0, "ship");
        } else {
            this.winner = this.add.image(0, 0, "eship");
        }
        Align.scaleToGameW(this.winner, .25);
        this.winner.angle = 270;
        this.alignGrid.placeAtIndex(60, this.winner);
        var btnStart = new FlatButton({
            scene: this,
            key: 'button1',
            text: 'Play Again!',
            event: 'start_game'
        });
        this.alignGrid.placeAtIndex(93, btnStart);
        emitter.on('start_game', this.startGame, this);

         var sb = new SoundButtons({
            scene: this
        });
    }
    startGame() {
        this.scene.start('SceneMain');
    }
    update() {}
}