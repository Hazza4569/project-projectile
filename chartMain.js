var ctx = document.getElementById("vidCanvas").getContext('2d');

var x = [];
var y = [];
	for (var i= 0; i <= 640; i++)
	{
		x[i]=i;
		y[i]=x[i]*x[i] - 778*x[i] + 151423;
	}

/*	var line = [];
	for (var i = 0; i < 640; i+=2);
	{
		line = two.makeCurve(points, true);


		line[i] = two.makeLine(x[i],y[i],x[i+2],y[i+2]);
		line[i].linewidth = 2;
		two.update();
	}*/
console.log(x,y);

var scat = new Chart(ctx,
{
	type: 'line',
	data:
	{
		labels: x,
		datasets:
		[
			{
				data: y
			}
		]
	}
});