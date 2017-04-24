// ============================================================================
//
// boss.js
//
// 繝懊せ繧ｭ繝｣繝ｩ繧ｯ繧ｿ繝ｼ繧堤ｮ｡逅�☆繧九け繝ｩ繧ｹ縲√�繧ｹ繧ｭ繝｣繝ｩ繧ｯ繧ｿ繝ｼ縺ｮ繝薙ャ繝医ｒ邂｡逅�☆繧九け繝ｩ繧ｹ繧�
// 蜷ｫ繧繝輔ぃ繧､繝ｫ縺ｧ縺吶�
//
// 繝ｻBoss繧ｯ繝ｩ繧ｹ
// 繝ｻBit繧ｯ繝ｩ繧ｹ
// ============================================================================

// - boss ---------------------------------------------------------------------
function Boss(){
	this.position = new Point();
	this.size = 0;
	this.life = 0;
	this.param = 0;
	this.alive = false;
}

Boss.prototype.set = function(p, size, life){
	// 蠎ｧ讓吶ｒ繧ｻ繝�ヨ
	this.position.x = p.x;
	this.position.y = p.y;

	// 繧ｵ繧､繧ｺ縲∬蝉ｹ�､繧偵そ繝�ヨ
	this.size = size;
	this.life = life;

	// 繝代Λ繝｡繝ｼ繧ｿ繧偵Μ繧ｻ繝�ヨ
	this.param = 0;

	// 逕溷ｭ倥ヵ繝ｩ繧ｰ繧堤ｫ九※繧�
	this.alive = true;
};

Boss.prototype.move = function(){
	var i, j;
	// 繝代Λ繝｡繝ｼ繧ｿ繧偵う繝ｳ繧ｯ繝ｪ繝｡繝ｳ繝�
	this.param++;

	// 繝代Λ繝｡繝ｼ繧ｿ縺ｫ蠢懊§縺ｦ蛻�ｲ�
	switch(true){
		case this.param < 100:
			// 荳区婿蜷代∈縺ｾ縺｣縺吶＄騾ｲ繧
			this.position.y += 1.5;
			break;
		default:
			// 繝代Λ繝｡繝ｼ繧ｿ縺九ｉ繝ｩ繧ｸ繧｢繝ｳ繧呈ｱゅａ繧�
			i = ((this.param - 100) % 360) * Math.PI / 180;

			// 繝ｩ繧ｸ繧｢繝ｳ縺九ｉ讓ｪ遘ｻ蜍暮㍼繧堤ｮ怜�
			j = screenCanvas.width / 2;
			this.position.x = j + Math.sin(i) * j * 0.75;
			break;
	}
};


// - boss bit -----------------------------------------------------------------
function Bit(){
	this.position = new Point();
	this.parent = null;
	this.size = 0;
	this.life = 0;
	this.param = 0;
	this.alive = false;
}

Bit.prototype.set = function(parent, size, life, param){
	// 豈堺ｽ薙→縺ｪ繧九�繧ｹ繧偵そ繝�ヨ
	this.parent = parent;

	// 繧ｵ繧､繧ｺ縲∬蝉ｹ�､繧偵そ繝�ヨ
	this.size = size;
	this.life = life;

	// 繝代Λ繝｡繝ｼ繧ｿ縺ｫ蛻晄悄蛟､繧偵そ繝�ヨ
	this.param = param;

	// 逕溷ｭ倥ヵ繝ｩ繧ｰ繧堤ｫ九※繧�
	this.alive = true;
};

Bit.prototype.move = function(){
	var i, x, y;

	// 繝代Λ繝｡繝ｼ繧ｿ繧偵う繝ｳ繧ｯ繝ｪ繝｡繝ｳ繝�
	this.param++;

	// 繝代Λ繝｡繝ｼ繧ｿ縺九ｉ繝ｩ繧ｸ繧｢繝ｳ繧呈ｱゅａ繧�
	i = (this.param % 360) * Math.PI / 180;

	// 繝ｩ繧ｸ繧｢繝ｳ縺九ｉ讓ｪ遘ｻ蜍暮㍼繧堤ｮ怜�
	x = Math.cos(i) * (this.parent.size + this.size);
	y = Math.sin(i) * (this.parent.size + this.size);
	this.position.x = this.parent.position.x + x;
	this.position.y = this.parent.position.y + y;
};
