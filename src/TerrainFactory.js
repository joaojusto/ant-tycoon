//devkit imports
import device;
import ui.View as View;
import ui.TextView as TextView;

//our imports
import .Block as Block;
import .Terrain as Terrain;

exports = new Class(View, function(supr){

	this.init = function(opts) {
		
		supr(this, "init", opts);

		this.superView = opts.superview;

		this.blocks = [];
		this.viewBlocks = [];

		this.deviceWidth = opts.deviceWidth;
    	this.deviceHeight = opts.deviceHeight;

    	this.blocksSize = opts.blocksSize;

    	this.blockId = 0;
	};

	this.initViewBlocks = function () {
        this.generateBlocks({
        	viewX: 0,
        	viewY: 0,
        	xi: 0,
        	xf: this.deviceWidth,
        	yi: this.blocksSize.y,
        	yf: this.deviceHeight,
        });
        this.adjustSuperViewSize();
	};

	this.generateBlocksOnTheLeft = function (opts) {
		console.log("gen left, ");
		this.generateBlocks({
        	viewX: 0,
        	viewY: 0,
        	xi: 0,
        	xf: this.deviceWidth,
        	yi: this.blocksSize.y,
        	yf: this.deviceHeight,
        });
        this.adjustSuperViewSize();
        this.adjustSuperViewPosition();
	};

	this.generateBlocksOnTheRight = function () {
        console.log("gen right, ");
        this.generateBlocks({
			viewX: this.superView.style.width,
        	viewY: 0,
        	xi: 0,
        	xf: this.deviceWidth,
        	yi: this.blocksSize.y,
        	yf: this.deviceHeight,
        });
        this.adjustSuperViewSize();
	};

	this.adjustSuperViewPosition = function () {
		var lastBlock = this.viewBlocks[this.viewBlocks.length -1];
		for(i = 0; i < this.viewBlocks.length -1; i++) {
			var viewblock = this.viewBlocks[i];
			var opts = {
				x: viewblock.style.x + lastBlock.style.width,
			};
			viewblock.updateOpts(opts);
		};	
		var opts = {
			x: this.superView.style.x - lastBlock.style.width,
		};
		this.superView.updateOpts(opts);
	};

	this.adjustSuperViewSize = function () {
		var totalWidth = 0;
		var totalHeigth = 0;
		for(i = 0; i < this.viewBlocks.length; i++) {
			totalWidth += this.viewBlocks[i].style.width;
			totalHeigth += this.viewBlocks[i].style.height;
		};	
		var opts = {
			width: totalWidth,
			height: totalHeigth
		};
		this.superView.updateOpts(opts)
	};

	this.generateBlocks = function (opts) {
		var view;
		var block;
		var width = 0;
		var height = 0;
		var xi = opts.xi;
		var xf = opts.xf;
		var yi = opts.yi;
		var yf = opts.yf;

		view = new View({
			x: opts.viewX,
            y: opts.viewY,
			tag: 'block:' + this.blockId, 
            superview: this.superView
        });

		this.blockId ++;

		for (x = xi; x <= xf; x += this.blocksSize.x) {
        	for (y = yi; y <= yf; y += this.blocksSize.y) {
        		block = new Block({
        			x: x,
        			y: y,
        			superview: view,
        			blocksSize: this.blocksSize,
        			image: "resources/images/simpleSoil.jpg"
        		});
        		this.blocks.push(block);
        		if(x === xi) {
        			height += this.blocksSize.y;
        		}
        	}
        	y = 0;
        	width += this.blocksSize.x;
        }

        for(x = xi; x <= xf; x += this.blocksSize.x) {
			block = new Block({
				y: 0,
				x: x,
				superview: view,
				blocksSize: this.blocksSize,
				image: "resources/images/grassOnTopSoil.png"
			});
			this.blocks.push(block);
		}
		var opts = {
			width: width,
			height: height + this.blocksSize.y
		};
		view.updateOpts(opts)
		this.viewBlocks.push(view);
				var textview = new TextView({
      		superview: view,
      		layout: "box",
      		text: 'block:' + this.blockId,
      		color: "white"
    	});
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});