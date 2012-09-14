$(function() {
	$('a[data-fancybox-group=portfolio-image]').fancybox({
		nextEffect: 'fade',
		prevEffect: 'fade',
		fitToView: true,
		helpers : {
			title : null
		},
		afterShow:function() {
			_gaq.push(['_trackEvent','Portfolio','View', $('a[href="' + this.href + '"]').children()[0].title]);
		}
	});
});
