import ui.ImageView as ImageView;

exports = new Class(ImageView, function(supr){
	this.init = function(opts) {
		var boxOptions = {
			width: 50,
			height: 50,
			image: "resources/images/simpleSoil.jpg",
			zIndex: 0
		};
		supr(this, "init", [merge(opts, boxOptions)]);
	};
	this.clean = function () {
		this.removeFromSuperView();
	};
});