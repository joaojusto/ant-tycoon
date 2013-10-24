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
	};

	this.launchUI = function () {};
});
