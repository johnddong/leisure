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