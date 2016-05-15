(function ($) {
	var my_validate_plug_name = "myvalidate";
	function MyJqValidate(element, options){
		this.init(element, options);
	}
	MyJqValidate.prototype = {
		init: function (element, options) {
			var allowFilter = ["positiveNumber"];
			var defaults = {filter_type: "positiveNumber", enterCallback: function (obj){}, 
				valCallback: function (val){}};
			this.element = element;
			this.settings = $.extend( {}, defaults, options );
			if($.inArray( this.settings.filter_type, allowFilter) == -1) {
				return;
			}
			this[this.settings.filter_type].call(this);
		},
		positiveNumber: function (){
			var _this = this;
			/* 大于0的正则匹配    匹配：0.1   1.  3.0  	.1 */
			this.element.keyup(function (e){
				var code = e.keyCode || e.which;
				var txt = $(this).val();
				var reg = /^(0*\.?[1-9]\d*|[1-9]+(\d*\.\d*)?)$/;
				if(reg.test(txt)){
					callback.call(_this, e);
					return;
				}
				var numb = txt.match(/\d|\./g);
				if(numb == null) {
					$(this).val("");
					callback.call(_this, e);
					return;
				}
				numb = numb.join("");
				var str = "";
				var f = true;
				for(var i=0; i<numb.length; i++){
					var s = numb[i];
					if (s=="."){
						if (f) {
							str += s;
							f = false;
						}
					} else {
						str += s;
					}
				}
				$(this).val(str);
				callback.call(_this, e);
			});
			function callback(e){
				this.value = $.trim(this.element.val());
				var v = parseFloat(this.value);
				this.format_value = isNaN(v) ? "" : v;
				this.settings.valCallback(this.format_value);
				var code = e.keyCode || e.which;
				if(code == 13) { //Enter keycode
					this.settings.enterCallback(this.element);
				}
			}
		}
	};
	
	$.fn[my_validate_plug_name] = function(options){
		var elt;
        if ( options instanceof Object || !this.data( "plugin_" + my_validate_plug_name ) ) {
            elt = new MyJqValidate( this, options );
            this.data('plugin_' + my_validate_plug_name, elt);
        } else {
            elt = this.data( "plugin_" + my_dialog_plug_name );
        }
        /*
        if (typeof(options) == "string" && options.length>0){
        	eval("elt."+options+"(this)");
        }
        */
        return this;
	};
}( jQuery ));