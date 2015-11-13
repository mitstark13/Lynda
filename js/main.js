//Search
//Variables
var search = $('.search input');


$('.navbar .search img').click(function() {
	search.animate({opacity: '1'});
	search.animate({width: '250px'}, "slow");
	search.css('display', 'block');
});
search.keypress(function() {
	$('.searchDrop').css('display', 'block');
});
$('.searchDrop').mouseleave(function() {
	$('.searchDrop').css('display', 'none');
});


//Nav Dropdowns
//Variables
var first = $('.fullDrop');
var second = $('.secondDrop');


$('.courses').mouseenter(function() {
	first.css('display', 'block');
});
second.mouseenter(function() {
	second.css('display', 'block');
	first.css('display', 'block');
});
second.mouseleave(function() {
	second.css('display', 'none');
	$('.fullDrop li a').css('color', 'white');
	first.css('display', 'none');
	$('.secondDrop div').css('display', 'none');
});
first.mouseenter(function() {
	$('.fullDrop li a').css({
		'color': '',
		'border-bottom' : '',
	});
	first.css('display', 'block');
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
	second.css('display', 'block');
	$('.secondDrop div:nth-child(' + index + ')').css('display', 'block');
	first.css('display', 'block');
});
first.mouseleave(function() {
	first.css('display', 'none');
	second.css('display', 'none');
})


//Profile John Settings
//Variables
var john = $('header span');
var account = $('.profileInfo');


$('.profilepic').mouseenter(function() {
	john.animate({opacity: '0'});
	john.css('display', 'none');
	account.css('display', 'inline-block');
	account.animate({opacity: '1'});
});
account.mouseleave(function() {
	john.animate({opacity: '1'});
	john.css('display', 'inline-block');
	account.css('display', 'none');
	account.animate({opacity: '0'});
});




