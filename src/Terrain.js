//devkit imports
import device;
import ui.View as View;

//our imports
import .Box as Box

exports = new Class(View, function(supr){
		
	this.terrain = [];

	this.deviceWidth = device.screen.width;
    this.deviceHeight = device.screen.height;

	this.init = function(opts) {
		
		supr(this, "init", opts);

		this.initTerrain(opts.superview);
	};

	this.initTerrain = function (superView) {
		var box;
		var xi = 0;
        var yi = 0;
        while(xi <= this.deviceWidth) {
        	while(yi <= this.deviceHeight) {
        		if(yi === 0) {
        			box = new Box({
        				superview: superView, 
        				x: xi, 
        				y: yi,
        				image: "resources/images/grassOnTopSoil.png"
        			});
        		} else {
        			box = new Box({
        				superview: superView, 
        				x: xi, 
        				y: yi,
        				image: "resources/images/simpleSoil.jpg"
        			});
        		}
        		this.terrain.push(box);
        		yi += 50;
        	}
        	yi = 0;
        	xi += 50;
        }
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});