import ui.View as View;

exports = new Class(View, function(supr){
	this.init = function(opts) {
		var boxOptions = {
			width: 50,
			height: 50,
			backgroundColor: "#008800"
		};
		supr(this, "init", [merge(opts, boxOptions)]);
	};
	this.clean = function () {
		this.removeFromSuperView();
	};
});