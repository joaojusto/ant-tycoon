//devkit imports
import ui.ImageView as ImageView;

exports = new Class(ImageView, function(supr){
	this.init = function(opts) {
		var boxOptions = {
			width: 50,
			height: 50,
			zIndex: 0
		};
		supr(this, "init", [merge(opts, boxOptions)]);

		this.on("InputSelect", function () {
			console.log("clicked = " + this.style.x + ", " + this.style.y);
    	});
	};
	this.clean = function() {
		this.removeFromSuperView();
	};
});