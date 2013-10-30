//devkit imports
import ui.ImageView as ImageView;

exports = new Class(ImageView, function(supr){

	this.init = function(opts) {
		var antOptions = {
			x: 0,
    		y: this.blocksSize.y - this.blocksSize.y/4,
			width: this.blocksSize.x/2,
			height: this.blocksSize.y/4,
			zIndex: 20,
			image: "resources/images/ant.png"
		};
		supr(this, "init", [merge(opts, blockOptions)]);
	};
	this.clean = function() {
		this.removeFromSuperView();
	};
});