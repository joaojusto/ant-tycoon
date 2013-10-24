//devkit imports
import device;
import ui.View as View;

//our imports
import .Block as Block;
import .Terrain as Terrain;

exports = new Class(View, function(supr){

	this.init = function(opts) {
		
		supr(this, "init", opts);

		this.superView = opts.superview;

		this.blocks = [];

		this.deviceWidth = opts.deviceWidth;
    	this.deviceHeight = opts.deviceHeight;

    	this.blocksSize = opts.blocksSize;

    	this.blockId = 0;
	};

	this.generateBlocksOnTheLeft = function (opts) {
		this.generateGrassBlocks(opts);
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
				superview: this.superView,
				image: "resources/images/grassOnTopSoil.png"
			});
			this.blocks.push(block);
		}
	};

	this.initBlocks = function () {
		var block;

        this.generateGrassBlocks({
        	xi: 0,
        	xf: this.deviceWidth,
        });

        this.generateBlocks({
        	xi: 0,
        	xf: this.deviceWidth,
        	yi: this.blocksSize.y,
        	yf: this.deviceHeight,
        });
	};

	this.generateBlocks = function (opts) {
		var block;
		var xi = opts.xi;
		var xf = opts.xf;
		var yi = opts.yi;
		var yf = opts.yf;

		for (x = xi; x <= xf; x += this.blocksSize.x) {
        	for (y = yi; y <= yf; y += this.blocksSize.y) {
        		block = new Block({
        			x: x,
        			y: y,
        			superview: this.superView,
        			blocksSize: this.blocksSize,
        			image: "resources/images/simpleSoil.jpg"
        		});
        		this.blocks.push(block);
        	}
        	y = 0;
        }
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});