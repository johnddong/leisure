// 倒數功能
(function($){
	$.digit_countdown =function($this, settings){
		var _defaultSettings = {
      src : '/images/v2/sample_countdown/countdown/',
      number : ['0.gif','1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif'],
			head : 'blank.gif',
			day : 'countdown_03.gif',
			hour : 'countdown_05.gif',
			minute : 'countdown_07.gif',
			second : 'countdown_09.gif',
			width : 'auto',
			height : 20,
      digit : true,
      count_to : 'all',
      digit_unit : ['天','時','分','秒'], 
      timer : '',
			callback : function(){/*location.reload()*/}
		};
		var v, init, img_html, body_html,
		counttime = 0;
		if(typeof(settings) == 'number'){
			v = _defaultSettings;
			counttime = settings;
		}else{
			v = $.extend(_defaultSettings, settings);
			counttime = v.counttime;
		}
		init = function(){		
			var i, t;
			$this.width(v.width).height(v.height);
			for(i=0;i<10;i++){
				t = new Image();
				t.src = v.src + v.number[i];
			}
      v.timer = setInterval(counting, 1000);
		}
		img_html = function(n){
			var img;
			switch(n){
				case 'head':
					img = v.src + v.head;
				break;
				case 'd':
					img = v.src + v.day;
				break;
				case 'h':
					img = v.src + v.hour;
				break;
				case 'm':
					img = v.src + v.minute;
				break;
				case 's':
					img = v.src + v.second;
				break;
				default:
					if(!isNaN(n) && n >= 0 && n <=9){
						img = v.src + v.number[n];
					}
				break;
			}
			return '<img src="' + img + '" alt="' + n + '" />';
		}
		body_html = function(ary){
			var tmp, time;
      if (v.digit){
        tmp =	img_html('head');
        switch(v.count_to) {
        	case 's':
        		time = '<span>' + ary[0] + ary[1] + '</span> ' + v.digit_unit[3] + ' ';
        		break;
        	case 'm':
        		time = '<span>' + ary[0] + ary[1] + '</span> ' + v.digit_unit[2] + ' ' + 
        					 '<span>' + ary[2] + ary[3] + '</span> ' + v.digit_unit[3] + ' ';
        		break;
        	case 'h':
        		time = '<span>' + ary[0] + ary[1] + '</span> ' + v.digit_unit[1] + ' ' +
              		 '<span>' + ary[2] + ary[3] + '</span> ' + v.digit_unit[2] + ' ' +
              		 '<span>' + ary[4] + ary[5] + '</span> ' + v.digit_unit[3] + ' ';
        		break;
        	default:
        		time = '<span>' + ary[0] + ary[1] + '</span> ' + v.digit_unit[0] + ' ' +
              		 '<span>' + ary[2] + ary[3] + '</span> ' + v.digit_unit[1] + ' ' +
              		 '<span>' + ary[4] + ary[5] + '</span> ' + v.digit_unit[2] + ' ' +
              		 '<span>' + ary[6] + ary[7] + '</span> ' + v.digit_unit[3] + ' ';
        		break;
        }
        tmp = tmp + time;
      }else{
        tmp = img_html('head') + 
              img_html(ary[0]) + img_html(ary[1]) + img_html('d') + 
              img_html(ary[2]) + img_html(ary[3]) + img_html('h') + 
              img_html(ary[4]) + img_html(ary[5]) + img_html('m') + 
              img_html(ary[6]) + img_html(ary[7]) + img_html('s');
      }
			return tmp;
		}
		get_timer = function(time, count_to){
			var s,m,h,d,tmp,ary = [];
			switch (count_to) {
				case 's':
					s = time;
					ary.push(Math.floor(s/10));
					ary.push(s%10);
					break;
				case 'm':
					s = time % 60;
					m = (time - s) / 60;
					ary.push(Math.floor(m/10));
					ary.push(m%10);
					ary.push(Math.floor(s/10));
					ary.push(s%10);
					break;
				case 'h':
					s = time % 60;
					tmp = (time - s) / 60;
					m = tmp % 60;
					h = (tmp - m) / 60;
					ary.push(Math.floor(h/10));
					ary.push(h%10);
					ary.push(Math.floor(m/10));
					ary.push(m%10);
					ary.push(Math.floor(s/10));
					ary.push(s%10);
					break;
				default:
					s = time % 60;
					tmp = (time - s) / 60;
					m = tmp % 60;
					tmp = (tmp - m) / 60;
					h = tmp % 24;
					d = (tmp - h) /24;
					ary.push(Math.floor(d/10));
					ary.push(d%10);
					ary.push(Math.floor(h/10));
					ary.push(h%10);
					ary.push(Math.floor(m/10));
					ary.push(m%10);
					ary.push(Math.floor(s/10));
					ary.push(s%10);
					break;
			}
			return ary;
		}
		counting = function(){
			$this.html(body_html(get_timer(counttime, v.count_to)));
			counttime--;
			if(counttime < 0){
        clearInterval(v.timer);
				v.callback();
			}
		}
		init();
	}
	$.fn.digit_countdown = function(setting){
		var $this = $(this);
		if($this.data('digit_countdown')){
			return ;
		}else{
			$this.data('digit_countdown', new $.digit_countdown($this, setting));
		}
		return $this.data('digit_countdown');
	}
})(jQuery);