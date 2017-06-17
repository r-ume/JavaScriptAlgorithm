
phina.globalize();

var SCREEN_WIDTH    = 640;
var SCREEN_HEIGHT   = 960;
var PIECE_SIZE      = 80;
var PIECE_SIZE_HALF = PIECE_SIZE / 2;

phina.main(function() {
	var app = GameApp({
		title: 'Typing Game',
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT,
		startLabel: location.search.substr(1).toObject().scene || 'title',
	});

	app.run();
});