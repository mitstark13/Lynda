//Variables
var editTop = $('.editProject');
var editBtn = $('.projectInfo strong');
var replyBox = $('.reply');
var replyBtn = $('.fullReply button');
var up = $('.vote small:first-of-type');
var down = $('.vote small:last-of-type');

//Voting on a comment
up.click(function() {
	current = ($(this).next().next().text());
	$(this).next().next().text((parseInt(current) + 1).toString()).css('color', 'green');
	$(this).className("active");
	$(this).next().next().next().next().className('nactive');
});
down.click(function() {
	current = ($(this).prev().prev().text());
	$(this).prev().prev().text((parseInt(current) - 1).toString()).css('color', 'red');
	$(this).className('downvote');
	$(this).prev().prev().prev().prev().className('inactive');
});

//Adding a comment
$('.comments li button').click(function() {
	replyBox.css('display', 'block');
});

$('.writeReply button:last-of-type').click(function(){
	replyBox.css('display', 'none');
});

$('.writeReply button:first-of-type').click(function(){
	replyBox.css('display', 'none');
	var reply = ($('.writeReply textarea').val());
	$('.comments ul li:first-child').after('<div class="fullReply"><img src=img/replyArrow.png class=replyArrow> <li class=newComment> <div class=comment> <h3>John Wright | Project Manager at Salesforce <img src="img/linkedin.png"></h3> <strong id=strong><a href="#"><img src="img/edit.png" alt=""> Edit</a></strong><img src=img/john.jpg> <p>' + reply + '</p> <small>Posted 0 minutes ago</small> <button>Reply</button></li></div>');
	$('.fullReply').after('<div class="editReply"><textarea name=editReply cols=80 rows=6></textarea></div>');
	$('main').height(function (index, height) {
    return (height + 210);
	});

	//Edit your reply
	$('#strong').click(function(e) {
	e.preventDefault();
	$('.editReply').css('display', 'block');
	$('.fullReply button').text("Save").css('font-size', '20px').css('font-weight', '600');
	$('.fullReply button').click(function() {
		var newtext = $('.editReply textarea').val();
		$('.fullReply p').text(newtext);
		$('.editReply').css('display', 'none');
		$('.fullReply button').text('Reply').css('font-size', '14px').css('font-weight', '300');
		});
	});

	// $(function() {
	// 		    setInterval(function() {
	// 		        $('#myscript').remove();
	// 		        $.getScript("js/comment.js", function() {
	// 		            $('script:last').attr('id', 'myscript');
	// 		        });
	// 		    }, 2000);

	// 		});
})

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
	if ($('.editProject input').val() != "") {
		$('.logoInfo h3').text($('.editProject input').val());
	}
	if ($('.editProject textarea').val() != "") {
		$('.logoInfo p').text($('.editProject textarea').val());
	}
	editBtn.css('opacity', '1');
});


