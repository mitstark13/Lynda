//Variables
var editTop = $('.editProject');
var editBtn = $('.projectInfo strong');
var replyBtn = $('.fullReply button');
var replyBox = $('.reply');
var up = $('.vote .like');
var down = $('.vote .dislike');

//Voting on a comment
up.click(function() {
	var color = $(this).nextAll('.num').css('color');
	if (color == 'rgb(0, 128, 0)') {
		$(this).css('color', 'green').prev().css('color', 'green');
	} else if (color == 'rgb(255, 0, 0)') {
		current = ($(this).nextAll('.num').text());
		$(this).nextAll('.num').text((parseInt(current) + 2).toString()).css('color', 'green');
		$(this).css('color', 'green').prev().css('color', 'green');
		$(this).nextAll('.dislike').css('color', '#C2C2C2');
	} else {
		current = ($(this).nextAll('.num').text());
		$(this).nextAll('.num').text((parseInt(current) + 1).toString()).css('color', 'green');
		$(this).css('color', 'green').prev().css('color', 'green');
		$(this).nextAll('.dislike').css('color', '#C2C2C2');
	}
});
down.click(function() {
	var color = $(this).prevAll('.num').css('color');
	if (color == 'rgb(255, 0, 0)') {
		$(this).css('color', 'red').next().css('color', 'red');
	} else if (color == 'rgb(0, 128, 0)') {
		current = ($(this).prevAll('.num').text());
		$(this).prevAll('.num').text((parseInt(current) - 2).toString()).css('color', 'red');
		$(this).css('color', 'red').next().css('color', 'red');
		$(this).prevAll('.like').css('color', '#C2C2C2');
	} else {
		current = ($(this).prevAll('.num').text());
		$(this).prevAll('.num').text((parseInt(current) - 1).toString()).css('color', 'red');
		$(this).css('color', 'red').next().css('color', 'red');
		$(this).prevAll('.like').css('color', '#C2C2C2');
	}
});

//Adding a comment
$(document).on('click', '.replyModal', function() {
	index = $(this).parent().parent().parent();
	replyBox.css('display', 'block');
	$('.writeReply textarea').val('');
	$('.judgeComment').html(($(this).closest("li").html()));

	$(document).on('click', '.submit', function() {
	var reply = ($('.writeReply textarea').val());
	var responseTemplate = getTemplate('response', { reply: reply });
	index.after(responseTemplate);
	
	// create handlebars tempate in HTML of other appended HTML
	var editBox = getTemplate('editTextarea');
	$('.fullReply').after(editBox);
	$('main').height(function (index, height) {
	    return (height + $('.comments .comment').height() + 145);
	});

	//Edit your reply
	$('#strong').click(function(e) {
		e.preventDefault();
		$(this).parent().parent().parent().next('.editReply').css('display', 'block');
		$('.fullReply .change').css('z-index', '999');
		$('.change').click(function() {
			var newtext = $(this).parent().parent().parent().next('.editReply').children('textarea').val();
			$(this).prevAll('p').text(newtext);
			$('.editReply').css('display', 'none');
			$('.fullReply .change').css('z-index', '0');
		});
	});
	closeForm();
});
});


$('.cancel').click(function(){
	closeForm();
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
	if ($('.editProject input').val() != "") {
		$('.logoInfo h3').text($('.editProject input').val());
	}
	if ($('.editProject textarea').val() != "") {
		$('.logoInfo p').text($('.editProject textarea').val());
	}
	editBtn.css('opacity', '1');
});
function closeForm() {
	replyBox.css('display', 'none');
	replyBox.delete();
}
function getTemplate (name, data) {
	var source = $("#" + name).html();
	var template = Handlebars.compile(source);
	return template(data);
}

