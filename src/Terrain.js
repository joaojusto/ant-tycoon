//devkit imports
import ui.View as View;

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
            width: this.deviceWidth,
            height: this.deviceHeight
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