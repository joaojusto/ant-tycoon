//devkit imports
import animate;
import ui.ImageView as ImageView;

exports = new Class(ImageView, function(supr){

	this.init = function(opts) {
		var antOptions = {
    		y: opts.blocksSize.y - opts.blocksSize.y/4,
			width: opts.blocksSize.x/2,
			height: opts.blocksSize.y/4,
			zIndex: 20,
			image: "resources/images/ant.png"
		};
		supr(this, "init", [merge(opts, antOptions)]);
		this.animate(opts.blocksSize.x - this.style.width);
	};

	this.animate = function(amount) {
		if(amount < 0) {
			this.style.flipX = false;
		} else {
			this.style.flipX = true;
		}
		animate(this).now({x: this.style.x + amount})
		.then(function() {
			this.animate(-amount);
		});
	};

	this.clean = function() {
		this.removeFromSuperView();
	};
});