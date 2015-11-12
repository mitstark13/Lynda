$('strong a').mouseenter(function() {
	$('.sort').css('display','block');
});

$('.sort').mouseleave(function() {
	$('.sort').css('display','none');
});

$('.sort a').click(function (e) {
	e.preventDefault();
	var newsort = $(this).text();
	$('main strong b').text(newsort);
	$('.sort').css('display', 'none');
})