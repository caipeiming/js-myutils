(function ($) {
	var my_validate_plug_name = "myvalidate";
	function MyJqValidate(element, options){
		this.init(element, options);
	}
	
	MyJqValidate.prototype = {
		init: function (element, options) {
			var defaults = {enterCallback: function (){}};
			this.element = element;
			this.settings = $.extend( {}, defaults, options );
		},
		
	}
	
	$[my_validate_plug_name] = function(options){
		var elt;
        if ( options instanceof Object || !this.data( "plugin_" + my_validate_plug_name ) ) {
            elt = new MyJqValidate( this, options );
            this.data('plugin_' + my_validate_plug_name, elt);
        } else {
            elt = this.data( "plugin_" + my_dialog_plug_name );
        }
        if (typeof(options) == "string" && options.length>0){
        	eval("elt."+options+"(this)");
        }
        return this;
        
		if(my_loading_box == null){
			my_loading_box = $("<div class='my-loading-box'><div class='my-loading-img'></div><div class='my-loading-title'></div></div>");
			$("body").append(my_loading_box);
		}
		if (typeof(options) == "string" && options=="getDialog"){
        	return my_loading_box;
        }
		if(typeof options === 'undefined'){
			options = {};
		}
		options.loading_box = my_loading_box;
		new MyJqMyLoad(options);
	}
}( jQuery ));