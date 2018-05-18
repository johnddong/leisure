/**
*Date: 2018/04/15
*內容：有閑入口頁
*TKT: #72933
*/
參數設定:

1. #scrollmenu 選單:
	data-nav的值要和連結上變數名稱為nav的值相同。 範例: <a href="index.html?nav=01" data-nav="01">NEW</a>
	
2. #countdown 倒數計時:
	在data-distance的值設定距離結束時間剩餘的秒數。 範例: <div id="countdown" class="timer" data-distance="5000000"></div>
	
/**
*Date: 2018/04/16
*內容：有閑分類頁
*TKT: #72933
*/
1. 第二層分類 .sub-nav>.scrollmenu :
	依照不同的館別顯示對應的第二層分類，當前的分類要加上.active
	範例:<a class="phone active" href="javascript:void(0);">手機周邊</a>

2.篩選 .filter-wrapper:
	載入後在被選定的項目上要加上.active
	範例:
	選擇"最新" <div class="item active"><a href="category.html?filter=latest">最新</a></div>
	選擇"最熱銷" <div class="item active"><a href="category.html?filter=hottest">最熱銷</a></div>
	選擇"價格"
	<div class="price-block active">
          <a href="javascript:void(0);">價格</a>
          <i class="fa fa-caret-up active" aria-hidden="true"></i>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

/**
*Date: 2018/04/18
*內容：有閑首頁調整
*TKT: #72933
*/
1.頁面 index.html:
  markup:
  <!-- 導購推推 -->
      <div class="promo-shopping-guide promo-section">  → 增加 promo-shopping-guide
        <div class="header">
          <div class="sub-title">
2.更新:
leisure.css
leisure.js

/**
*Date: 2018/04/30
*內容：商品調整與按鈕調整
*TKT: #72933
*/
1.markup:
選單:
<nav>
  <div class="btn">
	<a href="javascript:void(0);">
	  <img src="beango/images/icon/menu/btn.jpg" alt="女人節">
	</a>
  </div>

2.更新:
leisure.css

/**
*Date: 2018/05/03
*內容：有閑首頁新增分類及icon修改
*TKT: #72933
*/
1.category.html
    <div class="food">
        <a class="snacks" href="javascript:void(0);">零食</a>
        <a class="cake" href="index.html?nav=02" >甜點</a>
        <a class="dumpling" href="index.html?nav=03" >小吃熟食</a>
        <a class="meat" href="index.html?nav=04" >生鮮食品</a>
        <a class="coffee" href="index.html?nav=05" >飲品/沖泡品</a>
		/*-----------------新增↓----------------------*/
        <a class="healthy" href="javascript:void(0);" >保健食品</a>
		/*-----------------新增↑----------------------*/
        <a class="other" href="javascript:void(0);" >其他</a>
      </div>
2.更新:
leisure.css
leisure-category.css

3.新增圖片:
\beango\images\icon\sub-nav\food\icon-healthcare.png
\beango\images\icon\sub-nav\food\icon-healthcare-hover.png
\beango\images\icon\sub-nav\entertain\icon-bear.png
\beango\images\icon\sub-nav\entertain\icon-bear-hover.png
\beango\images\icon\sub-nav\mom\icon-canfood.png
\beango\images\icon\sub-nav\mom\icon-canfood-hover.png
\beango\images\icon\navbarside\icon-menu-mom.png
\beango\images\icon\navbarside\icon-menu-fashion.png
\beango\images\icon\navbarside\icon-casual.png

/**
*Date: 2018/05/04
*內容：有閑首頁反饋調整
*TKT: #72933-#29#30 #74192
*/
1.頁面:index.html、category.html、search.html
markup
	1.1移除:<li><a href="#">活動公告</a></li> 和 <div><a href="javascript:void(0);">活動公告</a></div>

	1.2 #navbarSide修改
				<li><a class="casual" href="category.html">休閒</a></li>
			<li><a class="mom" href="category.html">母嬰</a></li>
		  </ul>
		</div>
		/*-----------------修改↓----------------------*/
		<div><a href="http://dev-www.jollybuy.com/act/mb-about.html">關於有閑</a></div>
		<div><a href="http://dev-www.jollybuy.com/act/mb-Terms.html">有閑條款</a></div>
		<div><a href="http://dev-www.jollybuy.com/act/mb-privacy.html">隱私權政策</a></div>
		<div><a href="mailto:Jollybuy_cs@jollywiz.com">聯絡我們</a></div>
		/*-----------------修改↑----------------------*/
	  </div>
	1.3 .fixed-footer
		<div class="fixed-footer">
        <ul>
		/*-----------------修改↓----------------------*/
          <li class="goback"><a href="https://dev-www.jollybuy.com/Beango/IndexNew">回首頁</a></li>
          <li class="dollar"><a href="https://dev-admin.jollybuy.com/">賺導購金</a></li>
          <li class="shop"><a href="https://dev-admin.jollybuy.com/">我的店舖</a></li>
          <li class="member"><a href="http://dev-www.jollybuy.com/act/construction.html">購物會員</a></li>
		/*-----------------修改↑----------------------*/
          <li class="cart"><a href="javascript:void(0);">購物車</a></li>
        </ul>
      </div>
	1.4 #menu-list
		<div id="menu-list" class="col">
          <ul>
		  /*-----------------修改↓----------------------*/
            <li class="shop"><a href="https://dev-admin.jollybuy.com/">我的店舖</a></li>
            <li class="dollar"><a href="https://dev-admin.jollybuy.com/">賺導購金</a></li>
            <li class="member"><a href="http://dev-www.jollybuy.com/act/construction.html">購物會員</a></li>
			/*-----------------修改↑----------------------*/
            <li class="cart"><a href="javascript:void(0);">購物車</a></li>
          </ul>
        </div>
	1.5 .footer
		<div class="footer">
			<ul>
			/*-----------------修改↓----------------------*/
			  <li><a href="http://dev-www.jollybuy.com/act/mb-about.html">關於有閑</a></li>
			  <li><a href="http://dev-www.jollybuy.com/act/mb-privacy.html">隱私權政策</a></li>
			  <li><a href="http://dev-www.jollybuy.com/act/mb-Terms.html">有閑條款</a></li>
			  <li><a href="mailto:Jollybuy_cs@jollywiz.com">聯絡我們</a></li>
			/*-----------------修改↑----------------------*/
			</ul>
			<div class="copy-right">c 2018 JollyBuy Limited</div>
		  </div>
		</footer>
	
	
2.更新:
leisure.css
leisure-search.css

/**
*Date: 2018/05/07
*內容：有閑首頁反饋調整
*TKT: #74356
*/

1.頁面:index.html、category.html、search.html

註解: .fixed-footer 和 #menu-list內的
<li class="cart"><a href="javascript:void(0);">購物車</a></li>

2.更新:
leisure.css

/**
*Date: 2018/05/18
*內容：Header加回購物車icon，移除賺導購金
*TKT: #74801
*/
1. 頁面: index.html
	markup1:
		<div id="menu-list" class="col">
		  <ul>
			<li class="shop"><a href="https://dev-admin.jollybuy.com/">我的店舖</a></li>
			<li class="member"><a href="https://dev-www.jollybuy.com/Member/IndexNew">購物會員</a></li>
			<li class="cart"><a href="javascript:void(0);">購物車</a></li>
		  </ul>
		</div>
		
	markup2:
	<div class="fixed-footer">
        <ul>
          <li class="goback"><a href="https://dev-www.jollybuy.com/Beango/IndexNew">回首頁</a></li>
          <li class="shop"><a href="https://dev-admin.jollybuy.com/">我的店舖</a></li>
          <li class="member"><a href="https://dev-www.jollybuy.com/Member/IndexNew">購物會員</a></li>
          <li class="cart"><a href="javascript:void(0);">購物車</a></li>
        </ul>
      </div>