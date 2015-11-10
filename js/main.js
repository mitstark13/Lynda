$('.navbar .search img').click(function() {
	$('.search input').animate({opacity: '1'});
	$('.search input').animate({width: '250px'}, "slow");
	$('.search input').css('display', 'block');
});
$('.search input').keypress(function() {
	$('.searchDrop').css('display', 'block');
});
$('.searchDrop').mouseleave(function() {
	$('.searchDrop').css('display', 'none');
});
$('.courses').mouseenter(function() {
	$('.fullDrop').css('display', 'block');
});
$('.dropdown').mouseleave(function() {
	$('.fullDrop').css('display', 'none');
});