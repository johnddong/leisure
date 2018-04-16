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
   };

   /*nav highlight*/
    var
    $menu = $('#scrollmenu'),
    $submenu =  $('.scrollmenu'),
    $menuItem = $menu.find('a'),
    nav_value = getParam('nav'),
    menu_options = {
      axis:"x",
      theme:"minimal",
      alwaysShowScrollbar: 1
    };
    $menuItem.each(function(){
      if($(this).data('nav') == nav_value ){
        $(this).addClass('active');
      }else{
        $(this).removeClass('active');
      }
    });

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
  $searchbar = $('#searchbar');

  $('#search a').on('click',function(){
    $nav.toggle('slow');
    $searchbar.toggle('slow');
  });
  $win.resize(function() {
    if($win.width()>992){
      $nav.show();
      $searchbar.show();
    }
  });

  /*countdown*/
  // Update the count down every 1 second
  var $countdown = $('#countdown'),
      distance = $('#countdown').data('distance');
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
    navText: ['<span class="flaticon-arrows-left"></span>','<span class="flaticon-arrows-right"></span>']
  });
  $('.slider-item3').owlCarousel({
    items:3,
    loop:false,
    margin:10,
    nav:true,
    navText: ['<span class="flaticon-arrows-left"></span>','<span class="flaticon-arrows-right"></span>']
  });
  $('.slider-item4').owlCarousel({
    items:4,
    loop:true,
    margin:10,
    nav:true,
    navText: ['<span class="flaticon-arrows-left"></span>','<span class="flaticon-arrows-right"></span>']
  });

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
    if($this.hasClass('active')){
      $this.removeClass('active');
    }else{
      $this.addClass('active').siblings().removeClass('active');
      $price.find('.fa').removeClass('active');
    }
  });
  $price.on('click',function(){
    var $this = $(this),
        $active = $this.find('.active');
    $this.addClass('active').siblings().removeClass('active');
    if($active.length == 0){
      $this.find('.fa-caret-up').addClass('active');
    }else{
      var fa = $this.find('.fa');
      $.each(fa,function(){
        if($(this).hasClass('active')){
          $(this).removeClass('active');
        }else{
          $(this).addClass('active');
        }
      });
    }
  });

})(jQuery);
