$(window).load(function() {
    $('.dowebok').flexslider({
        animation: 'slide',
        pauseOnHover: true,
        directionNav: false,
        manualControls: '.slide-caption li'
    });
    var $item = $('.slide-caption').find('li');
    $item.each(function(i) {
    var $this = $(this);
    $this.on('mouseenter', function() {
        $this.trigger('click');
    });
 });
});
$(function() {
    $('.top').toTop();//返回顶部
    $('.news_1').liMarquee();
        // scrollName: 'scrollUp';
        // topDistance: '300'; // Distance from top before showing element (px)
        // topSpeed: 300; // Speed back to top (ms)
        // animation: 'slide'; // Fade, slide, none
        // animationInSpeed: 200; // Animation in speed (ms)
        // animationOutSpeed: 200; // Animation out speed (ms)
        // scrollText: 'Scroll to top'; // Text for element
        // activeOverlay: false; // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    //    轮播图
        $('#owl-demo').owlCarousel({
            items: 1,
            navigation: true,
            navigationText: ["上一个","下一个"],
            autoPlay: true,
            stopOnHover: true
        }).hover(function(){
            $('.owl-buttons').show();
        }, function(){
            $('.owl-buttons').hide();
        });
        // 滚动页面
    	$('.myscroll').myScroll({
            speed: 40, //数值越大，速度越慢
            rowHeight: 40 //li的高度
        });
        // //故事分享轮播图
        // $('#owl-demo_1').owlCarousel({
        //     navigation: true,
        //     navigationText: ["上一个","下一个"],
        //     autoPlay:3000,
        // });
        //风景美食
        $('.tabs').tabulous({
            effect: 'slideLeft'
        });
        // 锚点滚动
        $(function(){
            $('#nav').onePageNav();
        });

        
        $(document).ready(function() {
            $.fn.fullpage({
                slidesColor: ['#fff', '#fff', '#fff', '#fff', '#fff'],
                anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
                menu: '#menu'
            });
        });

        $(function() {
            $('.zoomify').zoomify();
        });
      
      
});



'use strict';

var $window = $(window);

function run()
{
	var fName = arguments[0],
		aArgs = Array.prototype.slice.call(arguments, 1);
	try {
		fName.apply(window, aArgs);
	} catch(err) {
		 
	}
};
 
/* chart
================================================== */
function _chart ()
{
	$('.b-skills').appear(function() {
		setTimeout(function() {
			$('.chart').easyPieChart({
				easing: 'easeOutElastic',
				delay: 3000,
				barColor: '#369670',
				trackColor: '#fff',
				scaleColor: false,
				lineWidth: 21,
				trackWidth: 21,
				size: 250,
				lineCap: 'round',
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});
		}, 150);
	});
};
 

$(document).ready(function() {
  
	run(_chart);
  
    
});

