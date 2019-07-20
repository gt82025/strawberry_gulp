// init foundarion 
$(document).foundation();

//IE old version tip
var userAgent = window.navigator.userAgent;
var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
if (userAgent.indexOf("MSIE 7.0") > 0 || userAgent.indexOf("MSIE 8.0") > 0 || userAgent.indexOf("MSIE 9.0") > 0 || navigator.appVersion.indexOf("MSIE 10") !== -1) {
	var url = "browser.html";
	setTimeout(
		function () {
			$(location).attr('href', url);
		}, 0);
}

var u = window.navigator.userAgent.toLocaleLowerCase(),
ie11 = /(trident)\/([\d.]+)/,
b = u.match(ie11);
if(b){
	$(".footer_bar , .wrap , .search").addClass('ie');    
}


// doc ready
(function ($, window, document) {
	// Window 相關設定
	var w = window,
		win = $(window),
		ww,
		wh,
		ws;


	// 取得Window設定值
	var windowSetting = function () {
		ww = win.innerWidth();
		wh = win.innerHeight();
		ws = win.scrollTop();
	}
	windowSetting();
	// ----------------------------------- Window 相關監測
	// window on scroll use javascript
	// Reference: https://stackoverflow.com/a/10915048
	// http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html#event-type-scroll
	function onScrollEventHandler(ev) { }
	function onResizeEventHandler(ev) {
		windowSetting();
	}
	if (w.addEventListener) {
		w.addEventListener('scroll', onScrollEventHandler, false);
		w.addEventListener('resize', onResizeEventHandler, false);
		// w.addEventListener('load', onLoadEventHandler, false);   
	} else if (w.attachEvent) {
		w.attachEvent('onscroll', onScrollEventHandler);
		w.attachEvent('onresize', onScrollEventHandler);
		w.attachEvent('load', onLoadEventHandler);
	}

	// -----------------------------------
	// =================================================

	//init ease scroll
	// ----------------------------------- 
	// $("html").easeScroll({
	// 	frameRate: 20,
	// 	animationTime: 1000,
	// 	stepSize: 35,
	// 	pulseAlgorithm: !0,
	// 	pulseScale: 8,
	// 	pulseNormalize: 1,
	// 	accelerationDelta: 20,
	// 	accelerationMax: 1,
	// 	keyboardSupport: !0,
	// 	arrowScroll: 50
	// }); 

	// -----------------------------------
	// Loader 
	// var loaderRemove = function(){
	// 	$('.loader').fadeOut('1000',function(){
	// 		$(this).remove();
	// 	});
	// }
	// ----------------------------------- Start : Loader
	// Loader 
	var loaderRemove = function () {
		$('.loader').addClass('loaded');
		$('html').addClass('loaded');
		setTimeout(function(){
			$('.loader').remove();
		},3000);
		$('.loader').fadeOut('2000',function(){
			$(this).remove();
		});
	}
	
	setTimeout(function(){
		// $('.loader').remove();
		$('.loader').fadeOut('3000',function(){
			$(this).remove();
		});
	},1000);
	// ----------------------------------- End : Loader

	
	
	// window load 
	$(window).on("load", function (e) {
		
	})
	$(document).ready(function(){
		// easeScroll
		var buildEaseScrollWaitTime = 0;
		var buildEaseScroll = function(){
			if(typeof $().easeScroll != 'function'){
				// 如果讀取不到easeScroll => 等待 => 十秒後放棄[試寫，目前測不到]
				if(buildEaseScrollWaitTime < 10){
					setTimeout(function(){
						buildEaseScrollWaitTime++
						console.log(buildEaseScrollWaitTime)
						buildEaseScroll();
					}, 1000)
				}
			}else{
				$("html").easeScroll({
					frameRate: 60,
					animationTime: 1000,
					stepSize: 100,
					pulseAlgorithm: 1,
					pulseScale: 6,
					pulseNormalize: 1,
					accelerationDelta: 20,
					accelerationMax: 1,
					keyboardSupport: true,
					arrowScroll: 30,
					touchpadSupport: true,
					fixedBackground: true
				});
			}
		}
		buildEaseScroll();


		var scroll_top = $(document).scrollTop();
		if(scroll_top == 0)
		{
			$('header , .menu_button , .carcontent , .mo_logo').addClass('top');
			$('header , .menu_button , .carcontent , .mo_logo').removeClass('scroll');
		}else{
			$('header , .menu_button , .carcontent , .mo_logo').removeClass('top');
			$('header , .menu_button , .carcontent , .mo_logo').addClass('scroll');
		}
		var p=0,t=0; 
		$(document).scroll(function(){
			var scroll_top = $(document).scrollTop();
			var header_bar_height = $('header').height();
			if(scroll_top > 0)
			{
				$('header , .menu_button , .carcontent , .mo_logo').removeClass('top');
				$('header , .menu_button , .carcontent , .mo_logo').addClass('scroll');
			}
			else if(scroll_top == 0)
			{
				$('header , .menu_button , .carcontent , .mo_logo').addClass('top');
				$('header , .menu_button , .carcontent , .mo_logo').removeClass('scroll');
			}
			p = $(this).scrollTop();  
			if(t<=scroll_top){//下滚  
				$('header , .mo_logo').addClass('scrolling');
			}else{//上滚  
				$('header , .mo_logo').removeClass('scrolling');
			}  
			setTimeout(function(){t = scroll_top;},0);      
		});
		
		$(document).on('click', '.menu_button', function() {
			$('.menu').addClass('click');
		});
		$(document).on('click', '.menu_button.click', function() {
			$('.menu').removeClass('click');
		});
		// easeScroll
		var buildEaseScrollWaitTime = 0;
		var buildEaseScroll = function(){
			if(typeof $().easeScroll != 'function'){
				// 如果讀取不到easeScroll => 等待 => 十秒後放棄[試寫，目前測不到]
				if(buildEaseScrollWaitTime < 10){
					setTimeout(function(){
						buildEaseScrollWaitTime++
						console.log(buildEaseScrollWaitTime)
						buildEaseScroll();
					}, 1000)
				}
			}else{
				$("html").easeScroll({
					frameRate: 60,
					animationTime: 1000,
					stepSize: 100,
					pulseAlgorithm: 1,
					pulseScale: 6,
					pulseNormalize: 1,
					accelerationDelta: 20,
					accelerationMax: 1,
					keyboardSupport: true,
					arrowScroll: 30,
					touchpadSupport: true,
					fixedBackground: true
				});
			}
		}
		buildEaseScroll();
		if($('.gallery-thumbs .swiper-wrapper .swiper-slide').length == 5){
		  $('.gallery-thumbs').addClass('five');
		}else if($('.gallery-thumbs .swiper-wrapper .swiper-slide').length == 4){
		  $('.gallery-thumbs').addClass('four');
		}else if($('.gallery-thumbs .swiper-wrapper .swiper-slide').length == 3){
		  $('.gallery-thumbs').addClass('three');
		}else if($('.gallery-thumbs .swiper-wrapper .swiper-slide').length == 2){
		  $('.gallery-thumbs').addClass('two');
		}else if($('.gallery-thumbs .swiper-wrapper .swiper-slide').length == 1){
		  $('.gallery-thumbs').addClass('one');
		}else if($('.gallery-thumbs .swiper-wrapper .swiper-slide').length > 5){
		  $('.gallery-thumbs .arrowicon').addClass('full');
		}
		var gallery_w = $('.gallery-thumbs').width();
		console.log(windows_w);
		console.log(gallery_w);
		if(windows_w <= gallery_w){
		  $('.gallery-thumbs').addClass('full');
		  $('.gallery-thumbs .arrowicon').addClass('full');
		}

	});
	// end doc ready
})(jQuery, window, document);



$(document).ready(function() {
	//go top
	var $gotop = $(".gotop");
	$gotop.on("click touchstart",function(){
		$('html, body').animate({
			scrollTop: 0
		}, 400, "swing");
	}).focus(function(){
		$(this).blur();
	});
});

function onLoadEventHandler(ev) {
	loaderRemove();
}
// loaderRemove();
// if (w.addEventListener) {
// 	w.addEventListener('scroll', onScrollEventHandler, false);
// 	w.addEventListener('resize', onResizeEventHandler, false);
// 	w.addEventListener('load', onLoadEventHandler, false);
// } else if (w.attachEvent) {
// 	w.attachEvent('onscroll', onScrollEventHandler);
// 	w.attachEvent('onresize', onResizeEventHandler);
// 	w.attachEvent('load', onLoadEventHandler);
// }