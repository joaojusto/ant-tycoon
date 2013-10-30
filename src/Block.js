//devkit imports
import ui.ImageView as ImageView;

//our imports
import .Ant as Ant;

exports = new Class(ImageView, function(supr){

	this.init = function(opts) {
		var blockOptions = {
			width: opts.blocksSize.x,
			height: opts.blocksSize.y,
			zIndex: 0
		};
		supr(this, "init", [merge(opts, blockOptions)]);

		this.on("InputSelect", function () {
			console.log("viewBlock = " + this.getSuperview().getTag());
			console.log("clicked = " + this.style.x + ", " + this.style.y);

			var ant = new Ant({
				x:this.style.x,
        		blocksSize:opts.blocksSize,
		 		superview: this.getSuperview()
		 	});
    	});
	};
	this.clean = function() {
		this.removeFromSuperView();
	};
});