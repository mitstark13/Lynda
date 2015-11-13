


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
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});

$("#cc").mouseleave(function(){
  
 $('.closed').velocity({
    height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});


  
$("#settings").mouseenter(function(){
  $('.settings').velocity({
     height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#settings").mouseleave(function(){
  $('.settings').delay(500).velocity({
     height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});
  $("#popout").mouseenter(function(){
  $('.popout').velocity({
     height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#popout").mouseleave(function(){
  $('.popout').delay(500).velocity({
    height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});

$("#fullscreen").mouseenter(function(){
  $('.fullscreen').velocity({
     height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});



$("#fullscreen").mouseleave(function(){
  $('.fullscreen').delay(500).velocity({
     height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});

$("#expand").mouseenter(function(){
  $('.expands').velocity({
     height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});



$("#expand").mouseleave(function(){
  $('.expands').delay(500).velocity({
    height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});

$("#volume").mouseenter(function(){
  $('.volumeContainer').velocity({
      opacity: 1,
      width: '115px',
  }, 100, 'swing');
});

$("#volume").mouseleave(function(){
  $('.volumeContainer').delay(4000).velocity({
    opacity: 0,
 }, 150, 'swing');
});

$("#rewind").mouseenter(function(){
  $('.rewind').velocity({
     height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#rewind").mouseleave(function(){
  $('.rewind').delay(500).velocity({
     height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});

$("#timeStamp").mouseenter(function(){
  $('.timeStamp').velocity({
      height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#timeStamp").mouseleave(function(){
  $('.timeStamp').delay(500).velocity({
     height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});


$("#bookmark").mouseenter(function(){
  $('.bookmark').velocity({
      height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#bookmark").mouseleave(function(){
  $('.bookmark').delay(500).velocity({
   height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});


$("#nextBtn").mouseenter(function(){
  $('.nextVid').velocity({
      height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#nextBtn").mouseleave(function(){
  $('.nextVid').delay(500).velocity({
     height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});

$("#previousBtn").mouseenter(function(){
  $('.prevVid').velocity({
        height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
  }, 100, 'swing');
});


$("#previousBtn").mouseleave(function(){
  $('.prevVid').delay(500).velocity({
   height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 70, 'swing');
});
 

 var videoPlayer = $('#videoPlayer');




$('#play, #pause').click(function() {
    if(videoPlayer[0].paused) {
    videoPlayer[0].play();
    $('#pause').css('display', 'inline-block');
    $('#play').css('display', 'none');

  }
      else {
        videoPlayer[0].pause();
        $('#play').css('display', 'inline-block');
      $('#pause').css('display', 'none');
    }
});




/*
$(function(){
$('#current').html($('#videoPlayer').find('video').get(0).load());                      
$('#currentTime').html($('#videoPlayer').find('video').get(0).play());
})
setInterval(function(){
$('#current').html($('#videoPlayer').find('video').get(0).currentTime);
$('#totalTime').html($('#videoPlayer').find('video').get(0).duration);},500)
});

*/
var video = document.getElementsByTagName('video')[0];

video.addEventListener('loadedmetadata', function() {
       var time = video.duration;
if(time<0) {
    time = 0;
}

var seconds = Math.floor(time%60);
var minutes = Math.floor((time-seconds)/60);
var output;

if(minutes >= 10) {
    output = ""+minutes;
} else {
    output = "0"+minutes;
}
output += ":";
if(seconds >= 10) {
    output += seconds;
} else {
    output += "0"+seconds;
}
       $('#totalTime').html(output);
});

$(document).ready(function(){
  $('video').bind('timeupdate',function(){
    var current_time = $('video')[0].currentTime;
    var s = parseInt(current_time % 60);
    var m = parseInt((current_time / 60) % 60);
    
    $('#current').html( m + ':' + s );

    
  });
});


    $(document).ready(function () {
        var $video = $("#videoPlayer");
        var $scrubber = $("#scrubber");
        var $progress = $("#progress");
        
        $video.bind("timeupdate", videoTimeUpdateHandler);
        $scrubber.bind("mousedown", scrubberMouseDownHandler);
        
        function videoTimeUpdateHandler(e) {
            var video = $video.get(0);
            var percent = video.currentTime / video.duration;
            updateProgressWidth(percent);
        }
        
        function scrubberMouseDownHandler(e) {
            var $this = $(this);
            var x = e.pageX - $this.offset().left;
            var percent = x / $this.width();
            updateProgressWidth(percent);
            updateVideoTime(percent);
        }
        
        function updateProgressWidth(percent) {
            $progress.width((percent * 100) + "%");
        }
        
        function updateVideoTime(percent) {
            var video = $video.get(0);
            video.currentTime = percent * video.duration;
        }
    });

$('#fullscreen').click(function(){ 
var elem = document.getElementById("videoPlayer");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
} else if (elem.msRequestFullscreen) {
  elem.msRequestFullscreen();
} else if (elem.mozRequestFullScreen) {
  elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
  elem.webkitRequestFullscreen();
}
}) 

  var volumeBar = document.getElementById("volume-bar");

volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});

$('#rewind').click(function (){
      video.currentTime -=10;
    })
