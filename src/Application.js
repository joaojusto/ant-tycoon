//devkit imports
import device;

//our imports;
import .Box as Box;
import .Terrain as Terrain;

exports = Class(GC.Application, function () {

	this.terrainMap;

	this.initUI = function () {
		
		this.style.backgroundColor = " #82CAFF";

		this.terrainMap = new Terrain({superview: this.view});
	};

	this.launchUI = function () {};
});