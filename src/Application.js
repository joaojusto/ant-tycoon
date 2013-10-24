//devkit imports
import device;
import animate;
import math.geom.Point as Point;

//our imports;
import .Terrain as Terrain;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		
		this.terrainMap;

		this.scrollEnd = new Point(0, 0);
		this.scrollStart = new Point(0, 0);

		this.deviceWidth = device.screen.width;
    	this.deviceHeight = device.screen.height;

    	this.upperLimit = this.deviceHeight/3;

		this.style.backgroundColor = " #82CAFF";

		this.terrainMap = new Terrain({
			x: 0,
			y: this.upperLimit,
			superview: this.view, 
			deviceWidth: this.deviceWidth,
			deviceHeight: this.deviceHeight
		});

        this.view.on("InputStart", function (evt, pt) {
        	this.scrollStart = new Point(pt.x, pt.y);           
        });

        this.view.on("InputMove", function (evt, pt) {
        	this.scrollEnd = new Point(pt.x, pt.y);

        	this.scrollTerrain(this.terrainMap.getTerrainView());

        	this.scrollStart = this.scrollEnd;
        });
	};

	this.scrollTerrain = function (terrainView) {
		var scrollSensitivity
		var deltaX = (this.scrollEnd.x - this.scrollStart.x); 
		var deltaY = (this.scrollEnd.y - this.scrollStart.y);

		deltaX *= scrollSensitivity;
		deltaY *= scrollSensitivity;

		var amountX = terrainView.style.x + deltaX;
		//var amountY = terrainView.style.y + deltaY;
		if(!this.reachedUpperLimit(terrainView)) {
			var amountY = terrainView.style.y + deltaY;
		} else {
			amountY = terrainView.style.y;
		}
		
		var animator = animate(terrainView);
		animate(terrainView).now({x: amountX, y: amountY});
	};

	this.reachedUpperLimit = function (terrainView) {
		if(terrainView.style.y <= this.upperLimit) {
			return true;
		} else {
			return false;
		}
	};

	this.launchUI = function () {};
});
