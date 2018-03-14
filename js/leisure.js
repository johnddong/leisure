$(function(){
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
  (function() {
    $("#scrollmenu").mCustomScrollbar({
      axis:"x",
      theme:"minimal",
      alwaysShowScrollbar: 1
    });
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
    })();

    /*nav highlight*/
     var
     $menu = $('#scrollmenu'),
     $menuItem = $menu.find('a'),
     nav_value = getParam('nav');
     $menuItem.each(function(){
       if($(this).data('nav') == nav_value ){
         $(this).addClass('active');
       }else{
         $(this).removeClass('active');
       }
     });

    /*商品展示功能*/
    var
    $pro_menu_bar = $('.pro-menu-bar'),
    $pro_menu_btn = $pro_menu_bar.find('li'),
    img_arr=['icon-grid-active.png','icon-list-active.png','icon-list-active.png'],
    path = 'images/',
    preload_img = function(){
      for (var i = 0; i < img_arr.length; i++) {
        $("<img />").attr("src", path+'icon/'+img_arr[i]);
      }
    },
    set_product_view_layout = function(type){
      var
      $this = $pro_menu_bar.find('.'+type),
      $product_view = $('.product-view'),
      $view = $product_view.children(),
      $prodoct_box = $product_view.find('div[class^="col"]'),
      $prodoct_unit_4 = $product_view.find('.unit-4').find('div[class^="col"]'),
      $prodoct_unit_6 = $product_view.find('.unit-6').find('div[class^="col"]');
      $view.removeClass();
      $this.addClass('active').siblings().removeClass('active');
      switch(type) {
      // case 'item':
      //     $view.addClass('product-item');
      //     $prodoct_box.attr('class','col-sm-3 col-12');
      //     break;
      case 'grid':
          $view.addClass('grid');
          $prodoct_unit_4.attr('class','col-md-3 col-6');
          $prodoct_unit_6.attr('class','col-lg-2 col-md-4 col-6');
          break;
      case 'list':
          $view.addClass('list');
          $prodoct_unit_4.attr('class','col-md-3 col-12');
          $prodoct_unit_6.attr('class','col-lg-2 col-md-4 col-12');
          break;
      default:
        $view.addClass('grid');
        $prodoct_box.attr('class','col-sm-6 col-12');
      }
    };

    preload_img(img_arr);
    if(getParam('type').length == 0){
      set_product_view_layout('grid');
    }else {
      set_product_view_layout(getParam('type'));
    }

    $pro_menu_btn.on('click',function(){
      var
      $this = $(this),
      type = $this.data('type');
      if($this.hasClass('active')){
        return false;
      }else{
        set_product_view_layout(type);
        resetUrl(location.href, 'type', type);
      }
    });

  /*動態載入*/
  $(function(){
    (function(win) {
      var
      $footer = $('footer'),
      $more_section =$('.more-section'),
      $more_btn = $more_section.find('#more-btn'),
      $product_content = $more_section.find('#product-content'),
      $page_input = $more_section.find('#page'),
      ajax_path = 'js/api-temp/product-success.json',
      pageNum = "",
      isMobile = "",
      laoder_tpl =
        '<div class="spinner">'+
          '<div class="dot1"></div>'+
          '<div class="dot2"></div>'+
        '</div>',
      request= function(o){
        $.ajax({
          method: 'post',
          url: ajax_path,
          data: o.data,
          dataType: 'json',
          success: o.success,
          error: error_message
        });
      },
      set_page_number = function(){
        pageNum = (getParam('page').length==0)?0:getParam('page');
        $page_input.val(page);
        return pageNum;
      },
      set_init_page = function(){
        if (isMobile) {
          set_page_number();
          var
          option={
            data: {'page':pageNum},
            success: function(json){
              if(json.qty == 0){ //沒有更多商品
                $more_section.hide();
              }else if (json.qty > 0 && pageNum == 0) {//初始頁
                $footer.hide();
              }else if(json.totalPage == pageNum){ //最後一頁
                $more_section.hide();
                var o = {
                  data: {'page':pageNum,'allProduct':true},
                  success: function(json){
                    populate(json);
                  }
                };
                request(o);
              }else { //中間頁數
                $footer.hide();
                var o = {
                  data: {'page':pageNum,'allProduct':true},
                  success: function(json){
                    populate(json);
                  }
                };
                request(o);
              }
            }
          };
          request(option);
          $more_btn.on('click',function(){
            $(this).hide();
            $more_section.append(laoder_tpl);
            pageNum = parseInt(pageNum, 10)+1;
            $page_input.val(pageNum);
            resetUrl(location.href, 'page', pageNum);
            var o = {
              data:{'page':pageNum},
              success:function(json){
                populate(json);
              }
            };
            request(o);
          });
        }else{ // pc　顯示所有商品
          $more_section.hide();
          var o = {
            data: {'allProduct':true},
            success: function(json){
              populate(json);
            }
          };
          request(o);
        }
      },
      populate = function(json){
        var
        type = $pro_menu_bar.find('.active').data('type'),
        c = "",
        $moreList= $('#more-list'),
        box = $('<div />').attr('class','row justify-content-between');

        if(type == "grid"){
          c = "col-6";
        }else if (type == "list") {
          c = "col-12";
        }

        if(json.success==true){
          if(isMobile) remove_loader();
          $.each(json.product, function(i, e){
            var item =
            '<div class="col-lg-2 col-md-4 '+c+'">'+
              '<div class="cont">'+
                '<div class="photo">'+
                  '<a href="'+e.href+'">'+
                    '<img class="img-fluid" src="'+e.img+'" alt="'+e.alt+'"'+
                  '</a>'+
                '</div>'+
                '<div class="info">'+
                  '<div class="dec"><a href="'+e.href+'">'+e.name+'</a></div>'+
                  '<div class="fixed-price">'+e.price+'</div>'+
                  '<div class="sale-price"><span>$</span>'+e.sale+'</div>'+
                '</div>'+
              '</div>'+
            '</div>';

            $moreList.append(item);
          });

          if(pageNum ==  json.totalPage){
            $footer.show();
            $more_section.remove();
          }else{
            $more_btn.show();
          }
        }
      },
      error_message = function(){
        remove_loader();
        bootDialog({
  				msg: {
  					type: '系統異常，請洽詢客服人員'
  				},
  				btn: {
  					label: '關閉',
  					className: 'btn-close'
  				}
  			});
      },
      remove_loader = function() {
        $more_section.find('.spinner').animate({opacity: 0}, 500, function() {
  	  		$(this).remove();
  	  	});
  	  },
      mobile_devices = function(){
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          return true;
        }else {
          return false;
        }
      },
      init =function (){
        isMobile = mobile_devices();
        set_init_page();
      };

      init();

    })(window);
  });

});
