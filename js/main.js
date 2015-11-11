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
$('.secondDrop').mouseenter(function() {
	$('.secondDrop').css('display', 'block');
	$('.fullDrop').css('display', 'block');
});
$('.secondDrop').mouseleave(function() {
	$('.secondDrop').css('display', 'none');
	$('.fullDrop li a').css('color', 'white');
	$('.fullDrop').css('display', 'none');
	$('.secondDrop div').css('display', 'none');
});
$('.fullDrop').mouseenter(function() {
	$('.fullDrop li a').css({
		'color': '',
		'border-bottom' : '',
	});
	$('.fullDrop').css('display', 'block');
})
$('.fullDrop li a').mouseenter(function() {
	index = $(this).data('index');
	$('.fullDrop li a').css({
		'color': '',
		'border-bottom' : '',
	});
	$(this).css('color', '#FDBB2B');
	$(this).css('border-bottom', '4px solid #FDBB2B');
	$('.secondDrop div').css('display', 'none');	
	$('.secondDrop').css('display', 'block');
	$('.secondDrop div:nth-child(' + index + ')').css('display', 'block');
	$('.fullDrop').css('display', 'block');
});
$('.fullDrop').mouseleave(function() {
	$('.fullDrop').css('display', 'none');
	$('.secondDrop').css('display', 'none');
})
$('.profilepic').mouseenter(function() {
	$('header span').animate({opacity: '0'});
	$('header span').css('display', 'none');
	$('.profileInfo').css('display', 'inline-block');
	$('.profileInfo').animate({opacity: '1'});
});
$('.profileInfo').mouseleave(function() {
	$('header span').animate({opacity: '1'});
	$('header span').css('display', 'inline-block');
	$('.profileInfo').css('display', 'none');
	$('.profileInfo').animate({opacity: '0'});
});