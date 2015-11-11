$('.comments li button').click(function() {
	$('.reply').css('display', 'block');
});
$('.writeReply button:last-of-type').click(function(){
	$('.reply').css('display', 'none');
});
$('.writeReply button:first-of-type').click(function(){
	$('.reply').css('display', 'none');
	var reply = ($('.writeReply textarea').val());
	$('.comments ul li:first-child').after('<img src=img/replyArrow.png class=replyArrow> <li class=newComment> <div class=comment> <h3>John Wright | Some job at Salesforce</h3> <img src=img/john.jpg> <p>' + reply + '</p> <small>Posted 0 minutes ago</small> <button>Reply</button></li>');
});