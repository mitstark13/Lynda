//Variables
var editTop = $('.editProject');
var editBtn = $('.projectInfo strong');


$('.comments li button').click(function() {
	$('.reply').css('display', 'block');
});
$('.writeReply button:last-of-type').click(function(){
	$('.reply').css('display', 'none');
});
$('.writeReply button:first-of-type').click(function(){
	$('.reply').css('display', 'none');
	var reply = ($('.writeReply textarea').val());
	$('.comments ul li:first-child').after('<div class="fullReply"><img src=img/replyArrow.png class=replyArrow> <li class=newComment> <div class=comment> <h3>John Wright | Some job at Salesforce</h3> <img src=img/john.jpg> <p>' + reply + '</p> <small>Posted 0 minutes ago</small> <button>Reply</button></li></div>');
	$('main').height(function (index, height) {
    return (height + 210);
	});
});


editBtn.click(function() {
	editTop.css('display', 'block');
	editBtn.css('opacity', '0');
});
$('.editProject img:first-of-type').click(function() {
	editTop.css('display', 'none');
	editBtn.css('opacity', '1');
})
$('.editProject img:last-of-type').click(function() {
	editTop.css('display', 'none');
	$('.logoInfo h3').text($('.editProject input').val());
	$('.logoInfo p').text($('.editProject textarea').val());
	editBtn.css('opacity', '1');
})