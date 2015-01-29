var MAX_ITERATION = 768;
var COLOR = 25;

onmessage = function(event) {
    var obj = JSON.parse(event.data);
	var result = [];
	
	for(var i = 0, n = obj.width; i < n; i++) {
		var x = i * (obj.xe - obj.xs) / obj.width + obj.xs;
		
		for(var j = 0, m = obj.height; j < m; j++) {
			var y = j * (obj.ye - obj.ys) / obj.height + obj.ys;
			var c = MAX_ITERATION - run(x, y) * COLOR;
            r = Math.max(Math.min(c, 255), 0);
            g = Math.max(Math.min(c - 255, 255), 0);
            b = Math.max(Math.min(c - 511, 255), 0);
            result.push([i, j, r, g, b]);
		}
		
		postMessage(JSON.stringify(result));
		result = [];
	}
};

function run(x0, y0) {
	var x = 0,
		y = 0,
		iteration = 0;

	while (x * x + y * y < 4 && iteration < MAX_ITERATION) {
		var xt = x * x - y * y + x0;
		y = 2 * x * y + y0;
		x = xt;
		++iteration;
	}
	
	return iteration;
}