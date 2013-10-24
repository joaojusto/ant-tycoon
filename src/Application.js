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

		this.style.backgroundColor = " #82CAFF";

		this.terrainMap = new Terrain({superview: this.view});

        this.view.on("InputStart", function (evt, pt) {
        	this.scrollStart = new Point(pt.x, pt.y);           
        });

        this.view.on("InputMove", function (evt, pt) {
        	this.scrollEnd = new Point(pt.x, pt.y);
        	this.scrollTerrain();
        	this.scrollStart = this.scrollEnd;
        });

        this.view.on("InputOut", function (evt, pt) {
        });
	};

	this.scrollTerrain = function () {
		var deltaX = (this.scrollEnd.x - this.scrollStart.x) * 2;
		var deltaY = (this.scrollEnd.y - this.scrollStart.y) * 2;

		var amountX = this.terrainMap.terrainView.style.x + deltaX;
		var amountY = this.terrainMap.terrainView.style.y + deltaY;
		
		var animator = animate(this.terrainMap.terrainView);
		animate(this.terrainMap.terrainView).now({x: amountX, y: amountY});
	};

	this.launchUI = function () {};
});
