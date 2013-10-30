//devkit imports
import device;
import ui.View as View;
import math.geom.Rect as Rect;
import math.geom.Point as Point;
import math.geom.intersect as intersect;

//our imports
import .Block as Block;
import .Terrain as Terrain;

exports = new Class(View, function(supr){

	this.init = function(opts) {
		
		supr(this, "init", opts);

		this.superView = opts.superview;

		this.blocks = [];
		this.viewBlocks = [];

		this.viewBlocksWidth = 0;
		this.viewBlocksHeight = 0;

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
        	yf: this.deviceHeight
        });
        this.generateBlocksOnTheLeft();
        this.generateBlocksOnTheRight();
	};

	this.generateBlocksOnTheLeft = function () {
		this.generateBlocks({
        	viewX: 0,
        	viewY: 0,
        	xi: 0,
        	xf: this.deviceWidth,
        	yi: this.blocksSize.y,
        	yf: this.deviceHeight
        });
        this.adjustSuperViewPosition();
	};

	this.generateBlocksOnTheRight = function () {
        this.generateBlocks({
			viewX: this.superView.style.width,
        	viewY: 0,
        	xi: 0,
        	xf: this.deviceWidth,
        	yi: this.blocksSize.y,
        	yf: this.deviceHeight
        });
	};

	this.adjustSuperViewPosition = function () {
		var lastBlock = this.viewBlocks[this.viewBlocks.length -1];
		for(i = 0; i < this.viewBlocks.length -1; i++) {
			var viewblock = this.viewBlocks[i];
			viewblock.updateOpts({x: viewblock.style.x + lastBlock.style.width});
		};	
		this.superView.updateOpts({x: this.superView.style.x - lastBlock.style.width});
	};

	this.adjustSuperViewSize = function (opts) {
		var totalWidth = 0;
		var totalHeigth = 0;
		for(i = 0; i < this.viewBlocks.length; i++) {
			var viewBlock = this.viewBlocks[i];
			totalWidth += viewBlock.style.width;
		};	
		if(opts.yi === this.blocksSize.y) {
			totalHeigth = this.viewBlocksHeight;
		}
		this.superView.updateOpts({width: totalWidth, height: totalHeigth});
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

		height +=this.blocksSize.y;

		view.updateOpts({width: width, height: height});
		this.viewBlocks.push(view);
    	
    	this.viewBlocksWidth = width;
    	this.viewBlocksHeight = height;

    	this.adjustSuperViewSize(opts);
	};

	this.checkVisibility = function () {
		for(i = 0; i < this.viewBlocks.length; i++) {
			var viewBlock = this.viewBlocks[i];
			var r1 = viewBlock.getBoundingShape();
			var topLeft = new Point(-this.superView.style.x - this.deviceWidth,
				this.superView.style.y - this.deviceHeight);
			var r2 = new Rect(topLeft, 3*this.deviceWidth, 
				3*this.deviceHeight);
			if(intersect.rectAndRect(r1, r2)){
				viewBlock.show();
			} else {
				viewBlock.hide();
			}
		};
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});