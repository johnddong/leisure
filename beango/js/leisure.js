 (function($){
   var getParam = function(name) {
     name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
     var regexS = "[\\?&]"+name+"=([^&#]*)";
     var regex = new RegExp( regexS );
     var results = regex.exec( window.location.href );
     if( results == null )
       return "";
     else
       return results[1];
   },
   resetUrl = function(url, param, value){
     var a = document.createElement('a'),
     regex = /(?:\?|&amp;|&)+([^=]+)(?:=([^&]*))*/g;
     var match, str = []; a.href = url; param = encodeURIComponent(param);
     while (match = regex.exec(a.search))
       if (param != match[1]) str.push(match[1]+(match[2]?"="+match[2]:""));
         str.push(param+(value?"="+ encodeURIComponent(value):""));
     a.search = str.join("&");
     history.replaceState({}, '', a.href);
   },
   mobilecheck = function() {// isMobile
     var check = false;
     (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
     return check;
   };
   /*nav highlight*/
    var
    $menu = $('#scrollmenu'),
    $submenu =  $('.scrollmenu'),
    $menuItem = $menu.find('a'),
    nav_value = getParam('nav'),
    $nav_img = $('.nav .btn img');
    menu_options = {
      axis:"x",
      theme:"minimal-dark",
      alwaysShowScrollbar: 1,
      set_width: true
    };
    $menuItem.each(function(){
      if($(this).data('nav') == nav_value ){
        $(this).addClass('active');
      }else{
        $(this).removeClass('active');
      }
    });

    if( $nav_img.length == 0 ) {
      $('nav .btn').hide();
    }

  // nav scrollbar style
  $menu.mCustomScrollbar(menu_options);
  $submenu.mCustomScrollbar(menu_options);
  
  /*側欄選單*/
  var
  $overlay = $('.overlay'),
  $navbarSide = $('#navbarSide'),
  $btn_close = $navbarSide.find('.close'),
  close_navbarSide = function(){
    $('#navbarSide').removeClass('reveal');
    $overlay.hide();
  };
  $('#navbarSideButton').on('click', function() {
     $navbarSide.addClass('reveal');
     $overlay.show();
   });
  $overlay.on('click', function(){close_navbarSide();});
  $btn_close.on('click', function(){close_navbarSide();});

/*Search button*/
  var
  $win = $(window),
  $nav = $('nav'),
  $searchbar = $('#searchbar')

  /*$('#search').on('click',function(){
	  $searchbar.toggle('slow');
  });*/
  
  $win.resize(function() {
    aboutwinresize(); //about page top img change on resize
  });

  /*countdown*/
  // Update the count down every 1 second
  var $countdown = $('#countdown'),
      distance = $countdown.data('distance');
  var x = setInterval(function() {
    distance = distance-1000;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $countdown.html('<span>'+ days +'</span>天<span>'+ hours +'</span>時<span>'+ minutes +'</span>分<span>'+seconds+'</span>秒');
    if (distance < 0) {
      clearInterval(x);
      $countdown.html('<span>0</span>天<span>0</span>時<span>0</span>分<span>0</span>秒');
    }
  }, 1000);

  /*電視牆*/
  var owl = $('.main-slideshow').find('.owl-carousel');
  owl.owlCarousel({
    items : 1,
    loop:true,
    autoHeight:true,
    slideSpeed : 2000,
    dots: true,
    nav: true,
    autoplay:true,
    navText: ['<span class="flaticon-arrows-left"></span>','<span class="flaticon-arrows-right"></span>'],
  });
    owl.on('change.owl.carousel',function(event){
      if($(window).width() < 992)  {
        var itembackground = $(".item-background");
        itembackground.each(function(index){
          if ($('.item-background').attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
            var height = parseInt($(this).closest('.owl-carousel').data("height"));
            $(this).css("height", height + 'px');
            $('.slide-img').css("display",'none');
          }
        });
      }
    })
    if($(window).width() < 992)  {
      var itembackground = $(".item-background");
      itembackground.each(function(index){
        if ($('.item-background').attr("data-background")){
          $(this).css("background-image", "url(" + $(this).data("background") + ")");
          var height = parseInt($(this).closest('.owl-carousel').data("height"));
          $(this).closest('.owl-stage-outer').css("height", height + 'px');
          $(this).css("height", height + 'px');
          $('.slide-img').css("display",'none');
        }
      });
    }
  /*end of 電視牆*/
  $('.slider-item2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        992:{
            items:4
        }
    },
    navText: ['<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>']
  });
  $('.slider-item3').owlCarousel({
    items:3,
    loop:false,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>']
  });
  $('.slider-item4').owlCarousel({
    items:4,
    stagePadding: 25,
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>']
  });
  $('.slider-item5').owlCarousel({
    items:3,
    stagePadding: 30,
    loop:false,
    margin:10,
    nav:true,
    navText: ['<i class="fa fa-angle-left fa-4x" aria-hidden="true"></i>','<i class="fa fa-angle-right fa-4x" aria-hidden="true"></i>']
  });
  var
  $owl = $('.owl-carousel'),
  isMobile = mobilecheck();
  if(!isMobile){
    $owl.on('mouseenter',function(){
      var $this = $(this);
      $this.find('.owl-nav.disabled').css('display','block');
      $this.find('.owl-nav .owl-next').css('display','block');
      $this.find('.owl-nav .owl-prev').css('display','block');
    });
    $owl.on('mouseleave',function(){
      var $this = $(this);
      $this.find('.owl-nav.disabled').css('display','none');
      $this.find('.owl-nav .owl-next').css('display','none');
      $this.find('.owl-nav .owl-prev').css('display','none');
    });
  }

  //back to top
  $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
          $('.back-to-top').fadeIn();
          $('.back-to-top').addClass('show');
      } else {
          $('.back-to-top').fadeOut();
          $('.back-to-top').removeClass('show');
      }
  });
  $(document).on('click','.back-to-top',function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
  });

  /***--分類頁--***/
  var
  $filter = $('.filter-wrapper')
  $price = $filter.find('.price-block');
  $filter.find('.item').on('click',function(){
    var $this = $(this);
    $this.addClass('active').siblings().removeClass('active');
    $price.find('.fa').removeClass('active');
  });
  $price.on('click',function(){
    var $this = $(this),
        $active = $this.find('.active'),
        type = $this.data('type'),
        url="";
    if(type == 'search'){
      url = 'search.html';
    }else{
      url = 'category.html';
    }
    $this.addClass('active').siblings().removeClass('active');
    if($active.length == 0){
      $this.find('.fa-caret-up').addClass('active');
      location.href = url+'?filter=descending';
    }else{
      var fa = $this.find('.fa');
      $.each(fa,function(){
        var $this = $(this);
        if($this .hasClass('active')){
          $this .removeClass('active');
        }else{
          if($this .hasClass('fa-caret-up')){
            location.href = url+'?filter=descending';
          }else{
            location.href = url+'?filter=ascending';
          }
          $this .addClass('active');
        }
      });
    }
  });

  /***-- 關於有閑 about start --***/
  //QA
  $('.qa select').change(function () {
    var $this = $(this);
    $.getJSON('beango/js/api-temp/qa-list.json', function(json) {
      var $option = $this.val();
      var $qa = $('.qa .qa-list');
      var html = "";
      for(var i=0;i<json[$option].length;i++){
        html += '<li>';
        html += '<div class="question">'+ json[$option][i].quest +'<i class="icon-arrowright icon-m"></i></div>';
        html += '<div class="answer">'+ json[$option][i].answer +'</div>';
        html += '</li>';
      }
      $('.qa .qa-list ul').html(html);
      
      $qa.find('li').eq(0).addClass('active');
      $qa.find('li').on('click',function(){
        var $this = $(this);    
        $this.addClass('active').siblings().removeClass('active');
      });
    });    
  }).change();
  
  //top menu scroll
  function goToByScroll(id){
    var $id = id.replace("-link","");
    $('html,body').animate({
        scrollTop: $("#"+$id).offset().top},'slow');
  }
  $("#menu-list ul li").click(function(e) { 
    e.preventDefault();
    goToByScroll($(this).attr("id"));
  });

  //top img change on resize
  function aboutwinresize(){
    if ( document.body.clientWidth > 320 ) {
      $("#top-img").attr('src',"beango/images/about/bn-about-pc.png");
    }
    else {
      $("#top-img").attr('src',"beango/images/about/banner-about-mb.jpg");
    }
  }

  /***-- end of 關於有閑 about --***/

})(jQuery);
