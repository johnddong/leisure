$(function(){

  var helpToggle = function () {
    var $help = $('.help-video');
    $('.help-video .box-info:first i').addClass('fa-minus');
    $('.help-video .box-info:first ul').show();
    $('.help-video h3 .btn-drag').on('click', function(){
        var $this = $(this);
        $this.parents('h3').next('ul').toggle();
        $this.find('i').toggleClass('fa-minus');
    });
  }

  $.getJSON('js/api-temp/video-list-owner.json', function(json) {

    for(var i=0;i<json.length;i++){
      var html = "";
      html += '<div class="box-info video-course">';
      html += '<h3>'+ json[i].title +'<span class="btn-drag"><i class="fa fa-plus fa-1g"></i></span></h3>';
      html += '<ul>';

      for(var j=0;j<json[i].video.length;j++){
        html += '<li class="col-sm-12 col-md-4">';
        html += '<a href="javascript:void(0);" idx="'+ j +'"><i class="fa fa-youtube-play"></i>'+ json[i].video[j].name +'';
        html += '</a></li>';        
      }

      html += '</ul></div>';

      $('.video-loader').removeClass('active');
      $('.help-video').append(html);
    }
    
    helpToggle();
    
    var $yt = $('.ytwrapper');
    $('.help-video .box-info ul li a').on('click', function(){
        var $this = $(this);
        var $yttitle = $this.text();
        var $index = $this.parents($('.video-course')).index();
        var video = '<video width="100%" autoplay controls><source src="'+ json[$index].video[parseInt($this.attr('idx'))].src +'" type="video/mp4"></video>';
        $('.ytwrapper .modal-content').append(video);
    
        $yt.find('h3').text($yttitle);
        $yt.show();
        $yt.on('click','i', function(){
            $yt.hide().find('video').remove();
        });
    });
  
  });  
  
});
