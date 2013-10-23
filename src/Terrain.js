//DevKit imports
import device;
import ui.View as View;
import math.geom.Line as Line;
import math.geom.Rect as Rect;
import math.geom.Point as Point;
import math.geom.intersect as intersect;

//Our imports
import .Box;

exports = new Class(View, function(supr) {

        this.deviceWidth = device.screen.width;
        this.deviceHeight = device.screen.height;
        
        //class constructor;
        this.init = function(opts) {

                var terrainOptions = {
                        backgroundColor: "#000000"
                };

                //merge the options passed to this function and
                //those initialized above;
                supr(this, "init", [merge(opts, terrainOptions)]);

                this.grid = [];
                this.creatGride(opts);
        };

        this.creatGride = function(opts) {
                var xi = 0;
                var yi = 0;

                while(x >= this.deviceWidth || y >= this.deviceHeight) {
                        this.grid.push(new Box(x=xi, y=yi));
                        x += 50;
                        y += 50;
                }
        };
});