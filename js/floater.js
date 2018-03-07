/**
* Date: 2018/03/06
* Desc: 有閑入口&店鋪後台入口
*/
$(function() {
  (function(win) {
    var $win = $(win)
      , $floater = $('#floater')
      , $iconOpen = $floater.find('.open')
      , $iconHome = $floater.find('.home')
      , $iconSetting = $floater.find('.setting')
      , initCoord = $win.width() / 2 - $iconOpen.width() / 2
      , travel = 80
      , active = 'active'
      , animationClass = {
        zoomIn: 'zoomIn',
        rubberBand: 'rubberBand'
      },

    init = function() {
      $floater.find('.icon').each(function() {
        $(this).css({left: initCoord});
      });
      tween();
    },

    tween = function() {
      $iconOpen.on('click', function() {
        //$(this).removeClass('zoomIn')
        $(this).toggleClass(active);
        if ($(this).hasClass(active)) {
          $iconOpen.removeClass(animationClass.zoomIn).animateCss(animationClass.rubberBand);
          setTimeout(function() {
            $iconHome.css({left: initCoord - travel, opacity: 1});
            $iconSetting.css({left: initCoord + travel, opacity: 1});
          }, 200);
        } else {
          $iconOpen.animateCss(animationClass.rubberBand);
          setTimeout(function() {
            $iconHome.css({left: initCoord, opacity: 0});
            $iconSetting.css({left: initCoord, opacity: 0});
          }, 200);
        }
      });
    };

    init();

  })(window);
});



/**
animate.css
*/
$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});
