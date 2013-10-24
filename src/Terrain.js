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

		drag.makeDraggable(this.terrainView, {
			radius: 5,
			unbound: true
		});

		this.terrainView.tick = function (dt) {
  			if(GC.app.terrainMap.terrainView.style.y > GC.app.upperLimit) {
				var animator = animate(GC.app.terrainMap.terrainView);
				animate(GC.app.terrainMap.terrainView).now({y: GC.app.upperLimit});
			}
		};

		this.terrainView.on('Drag', function (startEvt, dragEvt, delta) {
  			console.log("x:", GC.app.terrainMap.terrainView.style.x, ", y:", GC.app.terrainMap.terrainView.style.y);
		});

		this.factory = new TerrainFactory({
			superview: this.terrainView,
			deviceWidth: opts.deviceWidth,
			deviceHeight: opts.deviceHeight,
			terrainView: this.terrainView
		});

		this.factory.initBlocks(this.terrainView);
	};

	this.getTerrain = function () {
		return this.terrain;
	};

	this.getTerrainView = function () {
		return this.terrainView;
	};

	this.clean = function () {
		this.removeFromSuperView();
	};
});