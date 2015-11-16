


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


	




$('.courseList ul li img,  .projectList ul li img').not( ".submenu img" ).click(function() {
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

/******************************************************
Hover Functions
*******************************************************/

function flyin(className){
  $(className).velocity({
    height: "30px",
    opacity: 1,
    bottom: "-45px",
    rotateY: "360deg",
    }, 100, 'swing');
};

function flyout(className){
  $(className).velocity({
    height: "0px",
    opacity: 0,
    bottom: "45px",
    rotateY: "-360deg",
 }, 10, 'swing');
};




$('#cc').mouseenter(function() {
  flyin('.closed');
});

$('#cc').mouseleave(function() {
  flyout('.closed');
});

$('#popout').mouseenter(function() {
  flyin('.popout');
});

$('#popout').mouseleave(function() {
  flyout('.popout');
});
$('#fullscreen').mouseenter(function() {
  flyin('.fullscreen');
});

$('#fullscreen').mouseleave(function() {
  flyout('.fullscreen');
});
$('#expand').mouseenter(function() {
  flyin('.expands');
});

$('#expand').mouseleave(function() {
  flyout('.expands');
});
$('#rewind').mouseenter(function() {
  flyin('.rewind');
});

$('#rewind').mouseleave(function() {
  flyout('.rewind');
});
$('#timeStamp').mouseenter(function() {
  flyin('.timeStamp');
});

$('#timeStamp').mouseleave(function() {
  flyout('.timeStamp');
});
$('#bookmark').mouseenter(function() {
  flyin('.bookmark');
});

$('#bookmark').mouseleave(function() {
  flyout('.bookmark');
});
$('#nextBtn').mouseenter(function() {
  flyin('.nextVid');
});

$('#nextBtn').mouseleave(function() {
  flyout('.nextVid');
});
$('#previousBtn').mouseenter(function() {
  flyin('.prevVid');
});

$('#previousBtn').mouseleave(function() {
  flyout('.prevVid');
});


$("#settings").mouseenter(function(){
  $('.settings').velocity({
      opacity: 1,
      width: '190px',
  }, 100, 'swing');
});

$("#settings").mouseleave(function(){
  $('.settings').delay(2000).velocity({
    opacity: 0,
    width: '0px'
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

$("#speed").mouseenter(function(){
  $('.speedBar').velocity({
      opacity: 1,
      width: '45px',
  }, 100, 'swing');
});

$("#speed").mouseleave(function(){
  $('.speedBar').delay(4000).velocity({
    opacity: 0,
 }, 150, 'swing');
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
video.volume= .8;

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


  var volumeBar = document.getElementById("volume-bar");


volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});

/******************************************************
REWIND
*******************************************************/

$('#rewind').click(function (){
      video.currentTime -=10;
    })
/******************************************************
BOOKMARK
*******************************************************/

$('#bookmark').click(function() {
    $('#blackbook').toggleClass('blackbook');
})

/******************************************************
PREVIOUS/NEXT BUTTONS
*******************************************************/

$('#nextBtn').click(function() {
  $('#videoPlayer').attr('src', "../../lyndaillustrator.mp4");
  video.load();
  video.play();
})

$('#previousBtn').click(function() {
  $('#videoPlayer').attr('src', "../../lyndadraplin.mp4");
  video.load();
  video.play();
})

/******************************************************
SPEEDBAR
*******************************************************/


$('#2x').on('click', function(e) {
    $("video")[0].playbackRate = 2;
    $('.speedBar li.active').removeClass('active');
    $(this).toggleClass('active');
    $('#speed').text('2x');
   e.preventDefault();
}); 

$('#175').on('click', function(e) {
    $("video")[0].playbackRate = 1.75;
    $('.speedBar li.active').removeClass('active');
    $(this).toggleClass('active');
    $('#speed').text('1.75x');
   e.preventDefault();
}); 

$('#15').on('click', function(e) {
    $("video")[0].playbackRate = 1.5;
    $('.speedBar li.active').removeClass('active');
    $(this).toggleClass('active');
    $('#speed').text(' 1.5x');
   e.preventDefault();
}); 

$('#125').on('click', function(e) {
    $("video")[0].playbackRate = 1.25;
    $('.speedBar li.active').removeClass('active');
    $(this).toggleClass('active');
    $('#speed').text('1.25x');
   e.preventDefault();
}); 

$('#1x').on('click', function(e) {
    $("video")[0].playbackRate = 1;
    $('.speedBar li.active').removeClass('active');
    $(this).toggleClass('active');
    $('#speed').text('1x');
   e.preventDefault();
}); 

/******************************************************
AUTOPLAY
*******************************************************/

jQuery.fn.extend({
        toggleText: function (a, b){
            var isClicked = false;
            var that = this;
            this.click(function (){
                if (isClicked) { that.text(a); isClicked = false; }
                else { that.text(b); isClicked = true; }
            });
            return this;
        }
    });




$('#autoPlayBtn').toggleText("ON", "OFF");

/******************************************************
EXPAND
*******************************************************/

function handler1(e) {
    $('.videoPlayer').css("width", '100%');
    $('main').css('height', '2000px');
    $('.detailHeaderContainer').css('width', '60%');
    $('#expand img').attr('src', "img/close.png" );
    $(this).one("click", handler2);
     e.preventDefault;
 }   


function handler2(e) {
    $('.videoPlayer').css("width", '67%');
    $('main').css('height', '');
    $('.detailHeaderContainer').css('width', '100%');
    $('#expand img').attr('src', "img/expand.png" );
    $(this).one("click", handler1);
     e.preventDefault;
 }   

$("#expand").one("click", handler1);

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
});

/******************************************************
UPLOAD MODALS
*******************************************************/

$('a.upload').click(function(e){
    $('#upload1').css('display', 'block');
    e.preventDefault();

});

$('.cancel, .submit').click(function(e){
    $('#upload1, #upload2, #upload3, #upload4').css('display', 'none');
    e.preventDefault();

});

$('.next').click(function(e){
    $(this).parent().parent().next().css('display', 'block');
    e.preventDefault();

});

$('.previous').click(function(e){
    $(this).parent().parent().css('display', 'none');
    e.preventDefault();

});

$(function(){
  $('#textInput').keyup(function(){
     $('#newTitle').text($(this).val());
  });
});

$(function(){
  $('#textarea').keyup(function(){
     $('#newp').text($(this).val());
  });
});

$('#popout').click(function (e) {
    e.preventDefault();
    window.open('../../lyndadraplin.mp4', '_blank', 'location=yes,height=500,width=600,scrollbars=no,status=yes');
    $('#pause').click;
});


$('video').textTracks[0].mode = "showing";


