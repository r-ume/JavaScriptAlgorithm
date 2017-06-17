
phina.globalize();

var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;
var PIECE_SIZE      = 80;
var PIECE_SIZE_HALF = PIECE_SIZE / 2;

phina.define("MainScene", {
	superClass: 'DisplayScene',

	init: function(){
		this.superInit({
			width:  SCREEN_WIDTH,
			height: SCREEN_HEIGHT
		});

		this.fromJSON({
			children: {
				wordGroup: {
					className: 'DisplayElement'
				},
				scoreLabel: {
					className: 'Label',
					text: '999',
					x: this.gridX.span(15),
					y: this.gridX.span(1),
					align: 'right'
				}
			}
		});

		this.score = 0;
		this.scoreLabel.text = this.score + '';
	}
})

phina.main(function() {
	var app = GameApp({
		title: 'Typing Game',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		startLabel: location.search.substr(1).toObject().scene || 'title',
	});

	app.run();
});