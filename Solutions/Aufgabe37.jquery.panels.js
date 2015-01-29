;(function($, undefined) {
	var defaults = {  
		speed : 200,
		maxwidth : 360,
		width : 180,
		minwidth : 135,
		maxfont : 150,
		font : 100,
		minfont : 50,
	};
	
	$.fn.panels = function(options) {
		var opt = $.extend(defaults, options);
		
		return this.each(function () {
			var current = $(this);
			current.children('li:last-child').addClass('last');
			current.children('li').hover(
			function() {
			
				$(this).stop().animate({
					width : opt.maxwidth,
					fontSize : opt.maxfont
				}, opt.speed)
				
				.siblings('li').stop().animate({
					width : opt.minwidth,
					fontSize : opt.minfont
				}, opt.speed);
			},
			
			function() {
				
				$(this).stop().animate({
					width : opt.width,
					fontSize : opt.font
				}, opt.speed)

				.siblings('li').stop().animate({
					width : opt.width,
					fontSize : opt.font
				}, opt.speed);
			});
		});
	};
})(jQuery);