var input = $('.searchCom input')
var drop = $('.comDrop')

input.keypress(function() {
	drop.css('display', 'block');
});
input.mouseleave(function() {
	drop.css('display', 'none');
})
drop.mouseleave(function() {
	drop.css('display', 'none');
})
drop.mouseenter(function() {
	drop.css('display', 'block');
})