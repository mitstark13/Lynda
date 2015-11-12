$('.prjList a').click(function(e) {
	$(this).addClass('active');
	$('.crsList a').removeClass('active')
	$('.courseList').removeClass('activeTab');
	$('.projectList').addClass('activeTab');
	e.preventDefault();
});   

$('.crsList a').click(function(e) {
	$(this).addClass('active');
	$('.prjList a').removeClass('active')
	$('.projList').removeClass('activeTab');
	$('.courseList').addClass('activeTab');
	e.preventDefault();
}); 

/* Video Details tabs - the e.preventDefault makes
it so link doesn't jump it to top of page */
$('.detailHeader li a').click(function(e) {
$('.detailHeader li a.active').removeClass('active');
    $(this).toggleClass('active');
 	 e.preventDefault();
 });


	




$('.courseList ul li img').not( ".submenu img" ).click(function() {
  var clicks = $(this).data('clicks');
  if (clicks) {
     $(this).transition({ rotate: '0deg' },500,'ease');
     $(this).siblings('.submenu').hide('slow');
  } else {	
     $(this).transition({ rotate: '90deg' },500,'ease');
     $(this).siblings('.submenu').show('slow');
  }
  $(this).data("clicks", !clicks);
});

$('.expand').click(function(e) {
     $('.courseList ul li img').not( ".submenu img" ).transition({ rotate: '90deg' },500,'ease');
 	 $( ".submenu" ).show( "slow" );
 	 e.preventDefault();
});

$('.collapse').click(function(e) {	
   	$('.courseList ul li img').not( ".submenu img" ).transition({ rotate: '0deg' },500,'ease');  
 	$( ".submenu" ).hide( "slow" );
 e.preventDefault();

}); 

$("#cc").mouseenter(function(){
  $('.closed').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#cc").mouseleave(function(){
  $('.closed').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});
  
$("#settings").mouseenter(function(){
  $('.settings').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#settings").mouseleave(function(){
  $('.settings').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});
  $("#popout").mouseenter(function(){
  $('.popout').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#popout").mouseleave(function(){
  $('.popout').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});

$("#fullscreen").mouseenter(function(){
  $('.fullscreen').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});


$("#fullscreen").mouseleave(function(){
  $('.fullscreen').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});

$("#expand").mouseenter(function(){
  $('.expands').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});


$("#expand").mouseleave(function(){
  $('.expands').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});

$("#rewind").mouseenter(function(){
  $('.rewind').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#rewind").mouseleave(function(){
  $('.rewind').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});

$("#timeStamp").mouseenter(function(){
  $('.timeStamp').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#timeStamp").mouseleave(function(){
  $('.timeStamp').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});


$("#bookmark").mouseenter(function(){
  $('.bookmark').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#bookmark").mouseleave(function(){
  $('.bookmark').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});


$("#nextBtn").mouseenter(function(){
  $('.nextVid').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#nextBtn").mouseleave(function(){
  $('.nextVid').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});

$("#previousBtn").mouseenter(function(){
  $('.prevVid').velocity({
    height: "30px",
    opacity: 1,
    bottom: "50px"
  }, 150, 'swing');
});

$("#previousBtn").mouseleave(function(){
  $('.prevVid').delay(500).velocity({
    opacity: 0,
  }, 300, 'swing');
});
 

 var videoPlayer = $('#videoPlayer');

$('#play').click(function() {
    if(videoPlayer[0].paused) {
    videoPlayer[0].play();
  }
    else {
      videoPlayer[0].pause();
    }
})

var = jeff;