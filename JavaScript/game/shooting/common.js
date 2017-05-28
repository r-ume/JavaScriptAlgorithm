// ============================================================================
//
// common.js
//
// 豎守畑逧�↑繧ｯ繝ｩ繧ｹ縺ｮ螳夂ｾｩ繧定ｨ倩ｿｰ縺励◆繝輔ぃ繧､繝ｫ縺ｧ縺吶�
// 縺薙�繝輔ぃ繧､繝ｫ縺ｫ縺ｯ縲∽ｻ･荳九�繧ｯ繝ｩ繧ｹ縺悟性縺ｾ繧後∪縺吶�
//
// 繝ｻPoint繧ｯ繝ｩ繧ｹ
//
// ============================================================================

// - point --------------------------------------------------------------------
function Point(){
	this.x = 0;
	this.y = 0;
}

Point.prototype.distance = function(p){
	var q = new Point();
	q.x = p.x - this.x;
	q.y = p.y - this.y;
	return q;
};

Point.prototype.length = function(){
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Point.prototype.normalize = function(){
	var i = this.length();
	if(i > 0){
		var j = 1 / i;
		this.x *= j;
		this.y *= j;
	}
};

Point.prototype.rotate = function(radian){
	var sin = Math.sin(radian);
	var cos = Math.cos(radian);
	var x = this.x * cos - this.y * sin;
	var y = this.x * sin + this.y * cos;
	this.x = x;
	this.y = y;
};
