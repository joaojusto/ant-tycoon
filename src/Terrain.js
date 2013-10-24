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
		
		this.terrainView = new View({
  			id: 'TerrainView',
  			superview: opts.superview,
  			x: 0,
  			y: 0,
  			width: this.deviceWidth,
  			height: this.deviceHeight,
  			backgroundColor: "#666666"
		});

		supr(this, "init", opts);

		this.initTerrain(this.terrainView);
	};

	this.initTerrain = function (superView) {
		var box;
		var xi = 0;
        var yi = 0;
        var grassBlock = false;
        while(xi <= this.deviceWidth) {
        	while(yi <= this.deviceHeight) {
        		if(yi >= 0 && yi < (this.deviceHeight/3)) {
        			
        		} else if (yi >= (this.deviceHeight/3) && !grassBlock) {
        			box = new Box({
        				superview: superView, 
        				x: xi, 
        				y: yi,
        				image: "resources/images/grassOnTopSoil.png"
        			});
        			grassBlock = true;
        			this.terrain.push(box);
        		} else {
        			box = new Box({
        				superview: superView, 
        				x: xi, 
        				y: yi,
        				image: "resources/images/simpleSoil.jpg"
        			});
        			this.terrain.push(box);
        		}
        		yi += 50;
        	}
        	yi = 0;
        	xi += 50;
        	grassBlock = false;
        }
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});