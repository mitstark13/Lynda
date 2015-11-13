var $input = $('.searchCom input')
var $drop = $('.comDrop')

$input.keypress(displayDropdown);
$input.mouseleave(hideDropdown);
$drop.mouseleave(hideDropdown);
$drop.mouseenter(displayDropdown);

function displayDropdown () {
	$drop.css('display', 'block');
}

function hideDropdown () {
	$drop.css('display', 'none');	
}