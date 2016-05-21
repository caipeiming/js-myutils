(function ($) {
	var my_toast_plug_name = "mytoast";
	$[my_toast_plug_name] = function(options){
		var defaults = {text: "", type: "success"};
		var settings = $.extend( {}, defaults, options );
		var jq_toast = $("<div class='my-toast'><div class='my-toast-icon'></div><div class='my-toast-text'></div></div>");
		var jq_icon = jq_toast.find(".my-toast-icon");
		var jq_text = jq_toast.find(".my-toast-text");
		jq_text.html(settings.text);
		jq_icon.addClass("my-toast-"+settings.type);
		jq_toast.appendTo($("body")).stop().fadeIn(500).delay(3000).fadeOut(500);
		var w = jq_toast.width()-jq_icon.width()-10;
		jq_text.width(w);
		var l = -jq_toast.outerWidth()/2;
		var t = -jq_toast.outerHeight()/2;
		jq_toast.css({"margin-left": l+"px", "margin-top": t+"px"});
		var _jq_toast = jq_toast;
		setTimeout(function (){
			_jq_toast.remove();
		}, 10*1000);
	};
}( jQuery ));