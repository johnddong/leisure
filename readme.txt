/**
*Date: 2018/04/15
*���e�G���~�J�f��
*TKT: #72933
*/
�ѼƳ]�w:

1. #scrollmenu ���:
	data-nav���ȭn�M�s���W�ܼƦW�٬�nav���ȬۦP�C �d��: <a href="index.html?nav=01" data-nav="01">NEW</a>
	
2. #countdown �˼ƭp��:
	�bdata-distance���ȳ]�w�Z�������ɶ��Ѿl����ơC �d��: <div id="countdown" class="timer" data-distance="5000000"></div>
	
/**
*Date: 2018/04/16
*���e�G���~������
*TKT: #72933
*/
1. �ĤG�h���� .sub-nav>.scrollmenu :
	�̷Ӥ��P���]�O��ܹ������ĤG�h�����A��e�������n�[�W.active
	�d��:<a class="phone active" href="javascript:void(0);">����P��</a>

2.�z�� .filter-wrapper:
	���J��b�Q��w�����ؤW�n�[�W.active
	�d��:
	���"�̷s" <div class="item active"><a href="category.html?filter=latest">�̷s</a></div>
	���"�̼��P" <div class="item active"><a href="category.html?filter=hottest">�̼��P</a></div>
	���"����"
	<div class="price-block active">
          <a href="javascript:void(0);">����</a>
          <i class="fa fa-caret-up active" aria-hidden="true"></i>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>

/**
*Date: 2018/04/18
*���e�G���~�����վ�
*TKT: #72933
*/
1.���� index.html:
  markup:
  <!-- ���ʱ��� -->
      <div class="promo-shopping-guide promo-section">  �� �W�[ promo-shopping-guide
        <div class="header">
          <div class="sub-title">
2.��s:
leisure.css
leisure.js

/**
*Date: 2018/04/30
*���e�G�ӫ~�վ�P���s�վ�
*TKT: #72933
*/
1.markup:
���:
<nav>
  <div class="btn">
	<a href="javascript:void(0);">
	  <img src="beango/images/icon/menu/btn.jpg" alt="�k�H�`">
	</a>
  </div>

2.��s:
leisure.css

/**
*Date: 2018/05/03
*���e�G���~�����s�W������icon�ק�
*TKT: #72933
*/
1.category.html
    <div class="food">
        <a class="snacks" href="javascript:void(0);">�s��</a>
        <a class="cake" href="index.html?nav=02" >���I</a>
        <a class="dumpling" href="index.html?nav=03" >�p�Y����</a>
        <a class="meat" href="index.html?nav=04" >���A���~</a>
        <a class="coffee" href="index.html?nav=05" >���~/�R�w�~</a>
		/*-----------------�s�W��----------------------*/
        <a class="healthy" href="javascript:void(0);" >�O�����~</a>
		/*-----------------�s�W��----------------------*/
        <a class="other" href="javascript:void(0);" >��L</a>
      </div>
2.��s:
leisure.css
leisure-category.css

3.�s�W�Ϥ�:
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
*���e�G���~�������X�վ�
*TKT: #72933-#29#30 #74192
*/
1.����:index.html�Bcategory.html�Bsearch.html
markup
	1.1����:<li><a href="#">���ʤ��i</a></li> �M <div><a href="javascript:void(0);">���ʤ��i</a></div>

	1.2 #navbarSide�ק�
				<li><a class="casual" href="category.html">��</a></li>
			<li><a class="mom" href="category.html">����</a></li>
		  </ul>
		</div>
		/*-----------------�ק��----------------------*/
		<div><a href="http://dev-www.jollybuy.com/act/mb-about.html">���󦳶~</a></div>
		<div><a href="http://dev-www.jollybuy.com/act/mb-Terms.html">���~����</a></div>
		<div><a href="http://dev-www.jollybuy.com/act/mb-privacy.html">���p�v�F��</a></div>
		<div><a href="mailto:Jollybuy_cs@jollywiz.com">�p���ڭ�</a></div>
		/*-----------------�ק��----------------------*/
	  </div>
	1.3 .fixed-footer
		<div class="fixed-footer">
        <ul>
		/*-----------------�ק��----------------------*/
          <li class="goback"><a href="https://dev-www.jollybuy.com/Beango/IndexNew">�^����</a></li>
          <li class="dollar"><a href="https://dev-admin.jollybuy.com/">�Ⱦ��ʪ�</a></li>
          <li class="shop"><a href="https://dev-admin.jollybuy.com/">�ڪ����E</a></li>
          <li class="member"><a href="http://dev-www.jollybuy.com/act/construction.html">�ʪ��|��</a></li>
		/*-----------------�ק��----------------------*/
          <li class="cart"><a href="javascript:void(0);">�ʪ���</a></li>
        </ul>
      </div>
	1.4 #menu-list
		<div id="menu-list" class="col">
          <ul>
		  /*-----------------�ק��----------------------*/
            <li class="shop"><a href="https://dev-admin.jollybuy.com/">�ڪ����E</a></li>
            <li class="dollar"><a href="https://dev-admin.jollybuy.com/">�Ⱦ��ʪ�</a></li>
            <li class="member"><a href="http://dev-www.jollybuy.com/act/construction.html">�ʪ��|��</a></li>
			/*-----------------�ק��----------------------*/
            <li class="cart"><a href="javascript:void(0);">�ʪ���</a></li>
          </ul>
        </div>
	1.5 .footer
		<div class="footer">
			<ul>
			/*-----------------�ק��----------------------*/
			  <li><a href="http://dev-www.jollybuy.com/act/mb-about.html">���󦳶~</a></li>
			  <li><a href="http://dev-www.jollybuy.com/act/mb-privacy.html">���p�v�F��</a></li>
			  <li><a href="http://dev-www.jollybuy.com/act/mb-Terms.html">���~����</a></li>
			  <li><a href="mailto:Jollybuy_cs@jollywiz.com">�p���ڭ�</a></li>
			/*-----------------�ק��----------------------*/
			</ul>
			<div class="copy-right">c 2018 JollyBuy Limited</div>
		  </div>
		</footer>
	
	
2.��s:
leisure.css
leisure-search.css

/**
*Date: 2018/05/07
*���e�G���~�������X�վ�
*TKT: #74356
*/

1.����:index.html�Bcategory.html�Bsearch.html

����: .fixed-footer �M #menu-list����
<li class="cart"><a href="javascript:void(0);">�ʪ���</a></li>

2.��s:
leisure.css

/**
*Date: 2018/05/18
*���e�GHeader�[�^�ʪ���icon�A�����Ⱦ��ʪ�
*TKT: #74801
*/
1. ����: index.html
	markup1:
		<div id="menu-list" class="col">
		  <ul>
			<li class="shop"><a href="https://dev-admin.jollybuy.com/">�ڪ����E</a></li>
			<li class="member"><a href="https://dev-www.jollybuy.com/Member/IndexNew">�ʪ��|��</a></li>
			<li class="cart"><a href="javascript:void(0);">�ʪ���</a></li>
		  </ul>
		</div>
		
	markup2:
	<div class="fixed-footer">
        <ul>
          <li class="goback"><a href="https://dev-www.jollybuy.com/Beango/IndexNew">�^����</a></li>
          <li class="shop"><a href="https://dev-admin.jollybuy.com/">�ڪ����E</a></li>
          <li class="member"><a href="https://dev-www.jollybuy.com/Member/IndexNew">�ʪ��|��</a></li>
          <li class="cart"><a href="javascript:void(0);">�ʪ���</a></li>
        </ul>
      </div>