var $input = $('.searchCom input')
var $drop = $('.comDrop')

$input.keypress(function() {
	if ($drop.css('display') === 'none'){
		displayDropdown(); 
		$('main').height(function (index, height) {
		    return (height + $('.comments .comment').height() + 230);
		});
	};
});
$input.mouseleave(hideDropdown);
$drop.mouseleave(function() {
	hideDropdown();
	$('main').height(function (index, height) {
	    return (height + $('.comments .comment').height() - 230);
	});
});
$drop.mouseenter(displayDropdown);

function displayDropdown () {
	$drop.css('display', 'block');
}

function hideDropdown () {
	$drop.css('display', 'none');
}