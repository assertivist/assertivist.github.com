var xstart = -245;
var xend = -100;
var ystart = 0;
var yend = 0;


function drawBG(){
	var canvas = document.getElementById('thebgcanvas');
	canvas.width = canvas.width;
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = 'rgba(0,0,0,0.4)';  
		ctx.strokeStyle = 'rgba(0,153,255,0.4)'; 
		ctx.lineWidth = 30;
		ctx.lineCap = "butt";
		var space = 70;
		var lines = 30;
		for (var x = 0; x < lines; x++) {
			for(var z = 0; z < 1800; z=z+45){
				if(Math.abs(Math.floor(Math.random()*10)) > 8) continue;
				ctx.moveTo(xstart + (x*space), z);
				ctx.lineTo(xend + (x*space), z+30);
		  	}
		}
		ctx.strokeStyle = "#222";
		ctx.stroke();
	}
}
function decay(){
	xend = -100;
	//if(Math.abs(Math.floor(Math.random()*10)) > 5) ystart += 1; yend +=1;
	//if(Math.abs(Math.floor(Math.random()*10)) > 7) xstart += .5; 
	xstart += 3;
	if(xstart > 40) xstart = -245;
}


var bg = window.setInterval("decay();drawBG();",75);