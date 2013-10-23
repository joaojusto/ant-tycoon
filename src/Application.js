//devkit imports
import device;

//our imports;
import .Box as Box;

exports = Class(GC.Application, function () {

	this.terrain = [];

	this.deviceWidth = device.screen.width;
    this.deviceHeight = device.screen.height;

	this.initUI = function () {
		
		this.initTerrain();
	};

	this.initTerrain = function () {
		var xi = 0;
        var yi = 0;

        while(xi <= this.deviceWidth) {
        	while(yi <= this.deviceHeight)  {
        		var box = new Box({superview: this.view, x: xi, y: yi});
        		this.terrain.push(box);
        		yi += 50;
        	}
        	yi = 0;
        	xi += 50;
        }
	};

	this.launchUI = function () {};
});