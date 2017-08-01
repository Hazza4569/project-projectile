var w = 640; var h = 360;
var vidDone = true;
var runs = 0;

var elem = document.getElementById("mydiv");
var params = { width: w, height: h };
var two = new Two(params).appendTo(elem);

var theCanvas = document.getElementById("vidCanvas")
var ctx = theCanvas.getContext('2d');
ctx.lineWidth = 5;
ctx.strokeStyle = "blue";
var v = document.getElementById("vid");
v.addEventListener('ended',onVidEnd,false);

var xscale = 2.13;
var yscale = 2.4;
var expSlow = -10;

var t = 1;
var x,y;
[x,y] = getPoints();

function Run()
{
	btn.disabled = true;
	ctx.clearRect(0,0,theCanvas.width,theCanvas.height);
	v.play();
	vidDone = false;
	runs+=1;
	console.log(runs);
	setInterval(animateParabola, 350);
	t=1;	
};


//t = 1;

//animateAxes();


// function printMousePos(event)
// {
//  	console.log(event.clientX,event.clientY);
// }
//
// document.addEventListener("click", printMousePos);


function animateParabola()
{
	if (t< x.length - 1)
	{
		if (t<80/xscale)
		{
			setInterval(animateParabola,29*((runs-1)*(x.length-2)+t));
		}
		else
		{
			setInterval(animateParabola,80*((runs-1)*(x.length-2)+t));
		}
	}

	ctx.beginPath();
	ctx.moveTo(x[t-1],y[t-1]);
	ctx.lineTo(x[t],y[t]);
	ctx.stroke();

	t++
	makeBorders();
}


/*function animateAxes()
{
	if (t < 641)
	{
		requestAnimationFrame(animateParabola);
	}

	ctx.beginPath();
	ctx.moveTo((t-1)/xscale,355/yscale);
	ctx.lineTo(t/xscale,355/yscale);
	ctx.stroke();

	t++
}
*/

function onVidEnd(e)
{
	btn.disabled=false;
}



function parabolaMaker()
{
	var points = [];
	for (var i= 0; i <= 645; i++)
	{
		var x=i;
		var y=11561*x*x/7811120 - 8473069*x/7811120 + 296;
		points[i] = new Two.Vector(x,y);

	}

	var line = [];
	for (var i = 0; i < 645; i++);
	{
		line = two.makeCurve(points, true);
		line.noFill();
		line.stroke = 'red';
		line.linewidth=10;


		/*line[i] = two.makeLine(x[i],y[i],x[i+2],y[i+2]);
		line[i].linewidth = 2;
		two.update();*/
	}

}

function getPoints()
{
	//var points = [];
	var x = [];
	var y = [];
	for (var i= 0; i <= 645; i++)
	{
		x[i]=i;
		y[i]=11561*x[i]*x[i]/7811120 - 8473069*x[i]/7811120 + 296;
		//points[i] = new Two.Vector(x[i]*w/640,y[i]*h/360);
		x[i] = x[i]*w/640/xscale; y[i] = y[i]*h/360/yscale;

	}
	return [x,y];
}

function makeBorders()
{
	var top = two.makeRectangle(320,0,640,10);
	top.fill = 'white';
	top.noStroke();

	var bottom = two.makeRectangle(0,180,10,360);
	bottom.fill = 'white';
	bottom.noStroke();
}


// var curve = two.makeCurve(0, 300, 389, 102, 640, 212, true);
// curve.noFill();
// curve.scale=2;
// two.update();






/*var curve = two.makeCurve(5, 293, 53, 242, 137, 177, true);
var curve2 = two.makeCurve(137, 177, 222, 131, 328, 103, true);
var curve3 = two.makeCurve(328, 103, 474, 115, 644, 216, true);
var curve4 = two.makeCurve(644, 216, 584, 162, 639, 212, true);
curve.noFill();
curve2.noFill();
curve3.noFill();
curve4.noFill();
two.update();*/
/*401, 110
130, 198
303, 115
575, 167
13, 303*/





// var el = document.getElementById("vidCanvas"),
// 	two = new Two({
// 			autostart: "true",
// 			type: Two.Types.canvas
// 		});
// two.appendTo(el);

// var circle = two.makeCircle(110,110,100);
// circle.fill = "#ffff00";

// two.update();
