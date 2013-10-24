//devkit imports
import device;
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

    	this.blocksSize = new Point(this.deviceWidth/6, this.deviceWidth/6);
		
		this.style.backgroundColor = " #82CAFF";

		this.terrainMap = new Terrain({
			x: 0,
			y: this.upperLimit,
			superview: this.view, 
			blocksSize: this.blocksSize,
			deviceWidth: this.deviceWidth,
			deviceHeight: this.deviceHeight
		});

		var view = GC.app.terrainMap.getTerrainView();
		var factory = GC.app.terrainMap.getFactory();
		var animator = GC.app.terrainMap.getAnimator();
		factory.initBlocks(view);
	};

	this.launchUI = function () {};
});
