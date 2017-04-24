// ============================================================================
//
// character.js
//
// 閾ｪ讖溘く繝｣繝ｩ繧ｯ繧ｿ繝ｼ縺ｮ繧ｷ繝ｧ繝�ヨ繧�お繝阪Α繝ｼ繧ｭ繝｣繝ｩ繧ｯ繧ｿ繝ｼ縺ｮ謖吝虚繧堤ｮ｡逅�☆繧九け繝ｩ繧ｹ繧定ｨ倩ｿｰ
// 縺励◆繝輔ぃ繧､繝ｫ縺ｧ縺吶ゅ％縺ｮ繝輔ぃ繧､繝ｫ縺ｫ縺ｯ莉･荳九�繧ｯ繝ｩ繧ｹ縺悟性縺ｾ繧後∪縺吶�
//
// 繝ｻCharacter繧ｯ繝ｩ繧ｹ
// 繝ｻCharacterShot繧ｯ繝ｩ繧ｹ
// 繝ｻEnemy繧ｯ繝ｩ繧ｹ
// 繝ｻEnemyShot繧ｯ繝ｩ繧ｹ
// ============================================================================

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
	// 蠎ｧ讓吶ｒ繧ｻ繝�ヨ
	this.position.x = p.x;
	this.position.y = p.y;

	// 繧ｵ繧､繧ｺ縲√せ繝斐�繝峨ｒ繧ｻ繝�ヨ
	this.size = size;
	this.speed = speed;

	// 逕溷ｭ倥ヵ繝ｩ繧ｰ繧堤ｫ九※繧�
	this.alive = true;
};

CharacterShot.prototype.move = function(){
	// 蠎ｧ讓吶ｒ逵滉ｸ翫↓speed蛻�□縺醍ｧｻ蜍輔＆縺帙ｋ
	this.position.y -= this.speed;

	// 荳螳壻ｻ･荳翫�蠎ｧ讓吶↓蛻ｰ驕斐＠縺ｦ縺�◆繧臥函蟄倥ヵ繝ｩ繧ｰ繧帝剄繧阪☆
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
	// 蠎ｧ讓吶ｒ繧ｻ繝�ヨ
	this.position.x = p.x;
	this.position.y = p.y;

	// 繧ｵ繧､繧ｺ縲√ち繧､繝励ｒ繧ｻ繝�ヨ
	this.size = size;
	this.type = type;

	// 繝代Λ繝｡繝ｼ繧ｿ繧偵Μ繧ｻ繝�ヨ
	this.param = 0;

	// 逕溷ｭ倥ヵ繝ｩ繧ｰ繧堤ｫ九※繧�
	this.alive = true;
};

Enemy.prototype.move = function(){
	// 繧ｿ繧､繝励↓蠢懊§縺ｦ蛻�ｲ�
	switch(this.type){
		case 0:
			// 繝代Λ繝｡繝ｼ繧ｿ繧偵う繝ｳ繧ｯ繝ｪ繝｡繝ｳ繝�
			this.param++;

			// X 譁ｹ蜷代∈縺ｾ縺｣縺吶＄騾ｲ繧
			this.position.x += 4;

			// Y 霆ｸ縺ｯ荳翫↓蜷代°縺�
			this.position.y -= radian[this.param % 360] * 1.5;

			// 繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ縺ｮ蜿ｳ遶ｯ繧医ｊ螂･縺ｫ蛻ｰ驕斐＠縺溘ｉ逕溷ｭ倥ヵ繝ｩ繧ｰ繧帝剄繧阪☆
			if(this.position.x > this.size + screenCanvas.width){
				this.alive = false;
			}
			break;
		case 1:
			// 繝代Λ繝｡繝ｼ繧ｿ繧偵う繝ｳ繧ｯ繝ｪ繝｡繝ｳ繝�
			this.param++;

			// 繝槭う繝翫せ X 譁ｹ蜷代∈縺ｾ縺｣縺吶＄騾ｲ繧
			this.position.x -= 4;

			// Y 霆ｸ縺ｯ荳翫↓蜷代°縺�
			this.position.y -= radian[this.param % 360] * 1.5;

			// 繧ｹ繧ｯ繝ｪ繝ｼ繝ｳ縺ｮ蟾ｦ遶ｯ繧医ｊ螂･縺ｫ蛻ｰ驕斐＠縺溘ｉ逕溷ｭ倥ヵ繝ｩ繧ｰ繧帝剄繧阪☆
			if(this.position.x < -this.size){
				this.alive = false;
			}
			break;
		case 2:
			// 繝代Λ繝｡繝ｼ繧ｿ繧�3蜉�邂励☆繧�
			this.param += 3;

			// 菴咲ｽｮ繧堤ｧｻ蜍輔＆縺帙ｋ
			this.position.x -= 0.5;
			this.position.y += Math.cos(radian[this.param]) * 4;

			// 荳頑婿蜷代∈髮｢閼ｱ縺励◆繧峨ヵ繝ｩ繧ｰ繧帝剄繧阪☆
			if(this.position.y < -this.size){
				this.alive = false;
			}
			break;
		case 3:
			// 繝代Λ繝｡繝ｼ繧ｿ繧�3蜉�邂励☆繧�
			this.param += 3;

			// 菴咲ｽｮ繧堤ｧｻ蜍輔＆縺帙ｋ
			this.position.x += 0.5;
			this.position.y += Math.cos(radian[this.param]) * 4;

			// 荳頑婿蜷代∈髮｢閼ｱ縺励◆繧峨ヵ繝ｩ繧ｰ繧帝剄繧阪☆
			if(this.position.y < -this.size){
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
	// 蠎ｧ讓吶√�繧ｯ繝医Ν繧偵そ繝�ヨ
	this.position.x = p.x;
	this.position.y = p.y;
	this.vector.x = vector.x;
	this.vector.y = vector.y;

	// 繧ｵ繧､繧ｺ縲√せ繝斐�繝峨ｒ繧ｻ繝�ヨ
	this.size = size;
	this.speed = speed;

	// 逕溷ｭ倥ヵ繝ｩ繧ｰ繧堤ｫ九※繧�
	this.alive = true;
};

EnemyShot.prototype.move = function(){
	// 蠎ｧ讓吶ｒ繝吶け繝医Ν縺ｫ蠢懊§縺ｦspeed蛻�□縺醍ｧｻ蜍輔＆縺帙ｋ
	this.position.x += this.vector.x * this.speed;
	this.position.y += this.vector.y * this.speed;

	// 荳螳壻ｻ･荳翫�蠎ｧ讓吶↓蛻ｰ驕斐＠縺ｦ縺�◆繧臥函蟄倥ヵ繝ｩ繧ｰ繧帝剄繧阪☆
	if(
	   this.position.x < -this.size ||
	   this.position.y < -this.size ||
	   this.position.x > this.size + screenCanvas.width ||
	   this.position.y > this.size + screenCanvas.height
	){
		this.alive = false;
	}
};
