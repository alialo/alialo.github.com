$(function() {
	$('a[data-fancybox-group=portfolio-image]').fancybox({
		nextEffect: 'fade',
		prevEffect: 'fade',
		fitToView: true,
		helpers : {
			title : {
				type : 'inside'
			}
		},
		afterShow:function() {
			_gaq.push(['_trackEvent','Portfolio','View', $('a[href="' + this.href + '"]').children()[0].title]);
		}
	});

	$('.cma').each(function() {
		var href = $(this).attr('title') + '@' + $(this).attr('href');
		$(this).text(href);
		$(this).attr('href', 'm' + 'ai' + 'lto' + ':' + href);
		$(this).removeAttr('title');
	});
});
