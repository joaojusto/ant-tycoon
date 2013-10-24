//devkit imports
import math.geom.Point as Point;
import ui.ImageView as ImageView;

exports = new Class(ImageView, function(supr){

	this.blockSize = new Point(50, 50);

	this.init = function(opts) {
		var blockOptions = {
			width: this.blockSize.x,
			height: this.blockSize.y,
			zIndex: 0
		};
		supr(this, "init", [merge(opts, blockOptions)]);

		this.on("InputSelect", function () {
			console.log("clicked = " + this.style.x + ", " + this.style.y);
    	});
	};
	this.clean = function() {
		this.removeFromSuperView();
	};
});