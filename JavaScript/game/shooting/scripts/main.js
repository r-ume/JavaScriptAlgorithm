// - global variables ----------------
var screenCanvas, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx;
var permit_fire = false;
var counter = 0;

// - constant variables -------
var CHARACTER_COLOR = 'rgba(0, 0, 255, 0.75)';
var CHARACTER_SHOT_COLOR = 'rgba(0, 255, 0, 0.75)';
var ENEMY_COLOR = 'rgba(255, 0, 0, 0.75)'
var CHARACTER_SHOT_MAX_COUNT = 10;
var ENEMY_MAX_COUNT = 10;

// - main ---------------------------
window.onload = function(){
	var i, j;
	var p = new Point();

	// initializing the screen
	screenCanvas = document.getElementById('screen');
	screenCanvas.width = 256;
	screenCanvas.height = 256;

	// using canvas2d
	ctx = screenCanvas.getContext('2d');

	// Registering events
	screenCanvas.addEventListener('mousemove', mouseMove, true);
	screenCanvas.addEventListener('mousedown', mouseDown, true);
	window.addEventListener('keydown', keyDown, true);

	info = document.getElementById('info');

	// making an instance of Character class
	var character = new Character();
	character.init(10);

	var enemy = new Array(ENEMY_MAX_COUNT);
	for(var i = 0; i < ENEMY_MAX_COUNT; i++){
		enemy[i] = new Enemy();
 	}

	// making instances of CharacterShot class
	var characterShot = new Array(CHARACTER_SHOT_MAX_COUNT);
	for(var i = 0; i < CHARACTER_SHOT_MAX_COUNT; i++){
		characterShot[i] = new CharacterShot();
	}

	(function () {
		counter++;

		// Reload html
		info.innerHTML = mouse.x + ':' + mouse.y;

		ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
		// declaring a path is important when it comes to canvas2d
		// need to set the properties(position, color, and etc)
		ctx.beginPath();

		// setting the position of the player.
		character.position.x = mouse.x;
		character.position.y = mouse.y;

		// setting character's color
		ctx.fillStyle = CHARACTER_COLOR;

		// setting the path
		ctx.arc(character.position.x, character.position.y, character.size, 0, Math.PI * 2, false);
		
		// draw the player
		ctx.fill();

		if(permit_fire){
			for(var i = 0; i < CHARACTER_SHOT_MAX_COUNT; i++){
				if(!characterShot[i].alive){
					// start position is 
					characterShot[i].set(character.position, 3, 5);

					break;
				}
			}

			permit_fire = false;
		}

		ctx.beginPath();

		for(i = 0; i < CHARACTER_SHOT_MAX_COUNT; i++){
			if(characterShot[i].alive){
				characterShot[i].move();

				ctx.arc(
					characterShot[i].position.x,
					characterShot[i].position.y,
					characterShot[i].size,
					0, Math.PI * 2, false
				);

				ctx.closePath();
			}
		}

		ctx.fillStyle = CHARACTER_SHOT_COLOR;
		ctx.fill();

		if(counter % 100 === 0){
			for(var i = 0; i < ENEMY_MAX_COUNT; i++){
				if(!enemy[i].alive){
					type = (counter % 200) / 100;

					var enemySize = 15;
					p.x = -enemySize + (screenCanvas.width + enemySize * 2) * type
					p.y = screenCanvas.height / 2;

					enemy[i].set(p, enemySize, type);

					break;
				}
			}
		}

		ctx.beginPath();

		for(var i = 0; i < ENEMY_MAX_COUNT; i++){
			if(enemy[i].alive){
				enemy[i].move();

				ctx.arc(
					enemy[i].position.x,
					enemy[i].position.y,
					enemy[i].size,
					0, Math.PI * 2, false
				);

				ctx.closePath();
			}
		}

		ctx.fillStyle = ENEMY_COLOR;

		ctx.fill()

		if(run){setTimeout(arguments.callee, fps);}

	})();
};

// - event functions -------------------
function mouseMove(event){
	// Getting the position of mouse
	mouse.x = event.clientX - screenCanvas.offsetLeft;
	mouse.y = event.clientY - screenCanvas.offsetTop;
}

function mouseDown(event){
	permit_fire = true;
}

function keyDown(event){
	// Getting keyocode
	var ck = event.keyCode;

	// if the keycode is 27, game stops.
	if(ck === 27){ run = false };
}