$(function() {
	$(".fancybox").fancybox({
		nextEffect: "fade",
		prevEffect: "fade",
		fitToView: true,
		helpers:  {
			title : {
				type : "inside"
			}
		}
	});

	$('.cma').each(function() {
		var href = $(this).attr('title') + '@' + $(this).attr('href');
		$(this).text(href);
		$(this).attr('href', 'm' + 'ai' + 'lto' + ':' + href);
		$(this).removeAttr('title');
	});
});
