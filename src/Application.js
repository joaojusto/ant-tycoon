//devkit imports
import device;
import ui.TextView as TextView;

//our imports;
import .Terrain as Terrain;

exports = Class(GC.Application, function () {

	this.initUI = function () {
		var textview = new TextView({
			superview: this.view,
			layout: "box",
			text: device.width + "x" + device.height,
			color: "white"
		});
	};

	this.initTerrain = function () {
		Terrain.init();
	};
	
	this.launchUI = function () {};
});