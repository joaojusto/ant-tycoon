//devkit imports
import device;
import ui.View as View;

//our imports
import .Block as Block;
import .Terrain as Terrain;

exports = new Class(View, function(supr){

	this.init = function(opts) {
		
		supr(this, "init", opts);

		this.blocks = [];

		this.deviceWidth = opts.deviceWidth;
    	this.deviceHeight = opts.deviceHeight;

    	this.blocksSize = opts.blocksSize;

    	this.blockId = 0;
	};

	this.generateGrassBlocks = function (opts) {
		var block;
		var xi = opts.xi;
		var xf = opts.xf;

		for(x = xi; x <= xf; x += this.blocksSize.x) {
			block = new Block({
				y: 0,
				x: x,
				blocksSize: this.blocksSize,
				superview: opts.terrainView,
				image: "resources/images/grassOnTopSoil.png"
			});
			this.blocks.push(block);
		}
	};

	this.initBlocks = function (superView) {
		var block;
        var grassBlock = false;

        this.generateGrassBlocks({
        	xi: 0,
        	xf: this.deviceWidth,
        	terrainView: superView
        });

        for (xi = 0; xi <= this.deviceWidth; xi += this.blocksSize.x) {
        	for (yi = this.blocksSize.y; yi <= this.deviceHeight; yi += this.blocksSize.y) {
        		block = new Block({
        			x: xi,
        			y: yi,
        			superview: superView,
        			blocksSize: this.blocksSize,
        			image: "resources/images/simpleSoil.jpg"
        		});
        		this.blocks.push(block);
        	}
        	yi = 0;
        }
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});