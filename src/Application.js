//devkit imports
import device
import ui.View as View;;
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

    	this.blocksSize = new Point(this.deviceWidth/12, this.deviceWidth/12);

		this.superView = new View({
			x: 0,
            y: 0,
			tag: 'super',
			width: this.deviceWidth,
			height: this.deviceHeight,
			backgroundColor: "#82CAFF",
            superview: this.view
        });

		this.terrainMap = new Terrain({
			x: 0,
			y: this.upperLimit,
			superview: this.superView, 
			blocksSize: this.blocksSize,
			deviceWidth: this.deviceWidth,
			deviceHeight: this.deviceHeight
		});
	};

	this.launchUI = function () {};
});
