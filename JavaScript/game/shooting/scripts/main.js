// global variables ----------------

var screenCanvas, info;
var run = true;
var fps = 1000 / 30;
var mouse = new Point();
var ctx;

// - main ---------------------------
window.onload = function(){
	// initializing the screen
	screenCanvas = document.getElementById('screen');
	screenCanvas.width = 256;
	screenCanvas.height = 256;

	// using canvas2d
	ctx = screenCanvas.getContext('2d');

	// Registering events
	screenCanvas.addEventListener('mousemove', mouseMove, true);
	window.addEventListener('keydown', keyDown, true);

	info = document.getElementById('info');

	(function () {
		// Reload html
		info.innerHTML = mouse.x + ':' + mouse.y;

		ctx.clearRect(0, 0, screenCanvas.width, screenCanvas.height);
		// declaring a path is important when it comes to canvas2d
		// need to set the properties(position, color, and etc)
		ctx.beginPath();
		ctx.fillStyle = 'rgba(0, 0, 255, 0.75)';
		ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2, false);
		ctx.fill();

		if(run){setTimeout(arguments.callee, fps);}

	})();
};

// - event functions -------------------
function mouseMove(event){
	// Getting the position of mouse
	mouse.x = event.clientX - screenCanvas.offsetLeft;
	mouse.y = event.clientY - screenCanvas.offsetTop;
}

function keyDown(event){
	// Getting keyocode
	var ck = event.keyCode;

	// if the keycode is 27, game stops.
	if(ck === 27){ run = false };
}