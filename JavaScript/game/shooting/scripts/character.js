
// - character ----------------------------------------------------------------
function Character(){
	this.position = new Point();
	this.size = 0;
}

Character.prototype.init = function(size){
	this.size = size;
};


// - character shot -----------------------------------------------------------
function CharacterShot(){
	this.position = new Point();
	this.size = 0;
	this.speed = 0;
	this.alive = false;
}

CharacterShot.prototype.set = function(p, size, speed){
	// setting coordinates
	this.position.x = p.x;
	this.position.y = p.y;
	
	// setting size and speed
	this.size = size;
	this.speed = speed;
	
	// setting the status
	this.alive = true;
};

CharacterShot.prototype.move = function(){
	this.position.y -= this.speed;
	
	if(this.position.y < -this.size){
		this.alive = false;
	}
};


// - enemy --------------------------------------------------------------------
function Enemy(){
	this.position = new Point();
	this.size = 0;
	this.type = 0;
	this.param = 0;
	this.alive = false;
}

Enemy.prototype.set = function(p, size, type){
	this.position.x = p.x;
	this.position.y = p.y;
	
	this.size = size;
	this.type = type;
	
	this.param = 0;

	this.alive = true;
};

Enemy.prototype.move = function(){
	this.param++;
	
	switch(this.type){
		case 0:
			this.position.x += 2;
			
			if(this.position.x > this.size + screenCanvas.width){
				this.alive = false;
			}
			break;
		case 1:
			this.position.x -= 2;
			
			if(this.position.x < -this.size){
				this.alive = false;
			}
			break;
	}
};


// - enemy shot ---------------------------------------------------------------
function EnemyShot(){
	this.position = new Point();
	this.vector = new Point();
	this.size = 0;
	this.speed = 0;
	this.alive = false;
}

EnemyShot.prototype.set = function(p, vector, size, speed){
	this.position.x = p.x;
	this.position.y = p.y;
	this.vector.x = vector.x;
	this.vector.y = vector.y;
	
	this.size = size;
	this.speed = speed;
	
	this.alive = true;
};

EnemyShot.prototype.move = function(){
	 // incrementing vector to keep the proportion constant
	this.position.x += this.vector.x * this.speed;
	this.position.y += this.vector.y * this.speed;
	
	if(
	   this.position.x < -this.size ||
	   this.position.y < -this.size ||
	   this.position.x > this.size + screenCanvas.width ||
	   this.position.y > this.size + screenCanvas.height
	){
		this.alive = false;
	}
};