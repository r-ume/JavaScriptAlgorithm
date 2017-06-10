// - global variables -------------------------------------------------------------------
var screenCanvas, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx;
var fire = false;
var counter = 0;

// - constant variables --------------------------------------------------------------------
var CHARACTER_COLOR = 'rgba(0, 0, 255, 0.75)';
var CHARACTER_SHOT_COLOR = 'rgba(0, 255, 0, 0.75)';
var CHARACTER_SHOT_MAX_COUNT = 10;
var ENEMY_COLOR = 'rgba(255, 0, 0, 0.75)';
var ENEMY_MAX_COUNT = 10;
var ENEMY_SHOT_COLOR = 'rgba(255, 0, 255, 0.75)';
var ENEMY_SHOT_MAX_COUNT = 100;

// - main ---------------------------------------------------------------------
window.onload = function(){
	var i, j;
	var p = new Point();
	
	screenCanvas = document.getElementById('screen');
	screenCanvas.width = 256;
	screenCanvas.height = 256;
	
	ctx = screenCanvas.getContext('2d');
	
	screenCanvas.addEventListener('mousemove', mouseMove, true);
	screenCanvas.addEventListener('mousedown', mouseDown, true);
	window.addEventListener('keydown', keyDown, true);
	
	info = document.getElementById('info');
	
	var character = new Character();
	character.init(10);
	
	var characterShot = new Array(CHARACTER_SHOT_MAX_COUNT);
	for(i = 0; i < CHARACTER_SHOT_MAX_COUNT; i++){
		characterShot[i] = new CharacterShot();
	}
	
	var enemy = new Array(ENEMY_MAX_COUNT);
	for(i = 0; i < ENEMY_MAX_COUNT; i++){
		enemy[i] = new Enemy();
	}
	
	var enemyShot = new Array(ENEMY_SHOT_MAX_COUNT);
	for(i = 0; i < ENEMY_SHOT_MAX_COUNT; i++){
		enemyShot[i] = new EnemyShot();
	}
	
	(function(){
		counter++;
		
		info.innerHTML = mouse.x + ' : ' + mouse.y;
	
		ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
		
		// - character -----
		ctx.beginPath();
		
		character.position.x = mouse.x;
		character.position.y = mouse.y;
		
		ctx.arc(
			character.position.x,
			character.position.y,
			character.size,
			0, Math.PI * 2, false
		);
		
		ctx.fillStyle = CHARACTER_COLOR;
		
		ctx.fill();
		
		if(fire){
			for(i = 0; i < CHARA_SHOT_MAX_COUNT; i++){
				if(!characterShot[i].alive){
					characterShot[i].set(character.position, 3, 5);
					
					break;
				}
			}
			fire = false;
		}
		
		// - character shot ---- 
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
			for(i = 0; i < ENEMY_MAX_COUNT; i++){
				if(!enemy[i].alive){
					j = (counter % 200) / 100;
					
					var enemySize = 15;
					p.x = -enemySize + (screenCanvas.width + enemySize * 2) * j
					p.y = screenCanvas.height / 2;
					
					enemy[i].set(p, enemySize, j);
					
					break;
				}
			}
		}
		
		ctx.beginPath();
		
		for(i = 0; i < ENEMY_MAX_COUNT; i++){
			if(enemy[i].alive){
				enemy[i].move();
				
				ctx.arc(
					enemy[i].position.x,
					enemy[i].position.y,
					enemy[i].size,
					0, Math.PI * 2, false
				);
				
				if(enemy[i].param % 30 === 0){
					for(j = 0; j < ENEMY_SHOT_MAX_COUNT; j++){
						if(!enemyShot[j].alive){
							p = enemy[i].position.distance(character.position);
							p.normalize();
							enemyShot[j].set(enemy[i].position, p, 5, 5);
							
							break;
						}
					}
				}
				
				ctx.closePath();
			}
		}
		
		ctx.fillStyle = ENEMY_COLOR;
		
		ctx.fill();
		
		ctx.beginPath();
		
		for(i = 0; i < ENEMY_SHOT_MAX_COUNT; i++){
			if(enemyShot[i].alive){
				enemyShot[i].move();
				
				ctx.arc(
					enemyShot[i].position.x,
					enemyShot[i].position.y,
					enemyShot[i].size,
					0, Math.PI * 2, false
				);
				
				ctx.closePath();
			}
		}
		
		ctx.fillStyle = ENEMY_SHOT_COLOR;
		
		ctx.fill();
		
		if(run){setTimeout(arguments.callee, fps);}
	})();
};


// - event --------------------------------------------------------------------
function mouseMove(event){
	mouse.x = event.clientX - screenCanvas.offsetLeft;
	mouse.y = event.clientY - screenCanvas.offsetTop;
}

function mouseDown(event){
	fire = true;
}

function keyDown(event){
	var ck = event.keyCode;
	
	if(ck === 27){run = false;}
}

