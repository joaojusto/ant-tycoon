//devkit imports
import animate;
import ui.View as View;
import event.input.drag as drag;

//our imports
import .TerrainFactory as TerrainFactory;

exports = new Class(View, function(supr){

	this.init = function(opts) {
		
		supr(this, "init", opts);

		this.terrain = [];

		this.terrainView = new View({
			x: opts.x,
            y: opts.y,
			id: 'TerrainView',
            superview: opts.superview,
            width: opts.deviceWidth,
            height: opts.deviceHeight
        });

		this.animator = animate(this.terrainView);

		drag.makeDraggable(this.terrainView, {
			radius: 5,
			unbound: true
		});

		this.terrainView.on('Drag', function (startEvt, dragEvt, delta) {
  			var view = GC.app.terrainMap.getTerrainView();
			var animator = GC.app.terrainMap.getAnimator();
			animate(view).clear();
		});

		this.terrainView.tick = function (dt) {
			var view = GC.app.terrainMap.getTerrainView();
			var factory = GC.app.terrainMap.getFactory();
			var animator = GC.app.terrainMap.getAnimator();
  			
  			if(view.style.y > GC.app.upperLimit) {
				animate(view).now({y: GC.app.upperLimit});
			}
		};

		this.factory = new TerrainFactory({
			superview: this.terrainView,
			blocksSize: opts.blocksSize,
			deviceWidth: opts.deviceWidth,
			deviceHeight: opts.deviceHeight,
			terrainView: this.terrainView
		});

		this.factory.initBlocks(this.terrainView);
	};

	this.clean = function () {
		this.removeFromSuperView();
	};

	this.getTerrain = function () {
		return this.terrain;
	};

	this.getFactory = function () {
		return this.factory;
	};

	this.getAnimator = function () {
		return this.animator;
	};

	this.getTerrainView = function () {
		return this.terrainView;
	};
});