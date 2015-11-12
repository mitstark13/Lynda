//Variables
var editTop = $('.editProject');
var editBtn = $('.projectInfo strong');

//Adding a comment
$('.comments li button').click(function() {
	$('.reply').css('display', 'block');
});

$('.writeReply button:last-of-type').click(function(){
	$('.reply').css('display', 'none');
});

$('.writeReply button:first-of-type').click(function(){
	$('.reply').css('display', 'none');
	var reply = ($('.writeReply textarea').val());
	$('.comments ul li:first-child').after('<div class="fullReply"><img src=img/replyArrow.png class=replyArrow> <li class=newComment> <div class=comment> <h3>John Wright | Project Manager at Salesforce</h3> <strong id=strong><a href="#"><img src="img/edit.png" alt=""> Edit</a></strong><img src=img/john.jpg> <p>' + reply + '</p> <small>Posted 0 minutes ago</small> <button>Reply</button></li></div>');
	$('.fullReply').after('<div class="editReply"><textarea name=editReply cols=80 rows=6</div>');
	$('main').height(function (index, height) {
    return (height + 210);
	});
	// $(function() {
	// 		    setInterval(function() {
	// 		        $('#myscript').remove();
	// 		        $.getScript("js/comment.js", function() {
	// 		            $('script:last').attr('id', 'myscript');
	// 		        });
	// 		    }, 2000);

	// 		});
});

//Editing a comment
$('strong').click(function(e) {
	e.preventDefault();
});

//Editing the project info
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