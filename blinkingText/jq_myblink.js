(function ($) {
	var my_blink_plug_name = "myblink";

	$.fn[my_blink_plug_name] = function( options ) {
		var defaults = {
			interval: 100, 
			blink_count: 0,
			before_blink: function (obj){},
			after_blink: function (obj){}
		};
		this.settings = $.extend( {}, defaults, options );
		var _this = this;
		var c = 0;
		_this.settings.before_blink(_this);
		var myVar = setInterval(function() {
			if (_this.css("visibility") == "visible") {
				_this.css('visibility', 'hidden');
			} else {
				_this.css('visibility', 'visible');
				if(_this.settings.blink_count > 0) {
					c ++;
					if(c == _this.settings.blink_count){
						clearInterval(myVar);
						_this.settings.after_blink(_this);
					}
				}
			}
		}, _this.settings.interval);
        return this;
	};
}( jQuery ));