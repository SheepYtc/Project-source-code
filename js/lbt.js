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
    $('.top').toTop();
    $('.news_1').liMarquee();
        // scrollName: 'scrollUp';
        // topDistance: '300'; // Distance from top before showing element (px)
        // topSpeed: 300; // Speed back to top (ms)
        // animation: 'slide'; // Fade, slide, none
        // animationInSpeed: 200; // Animation in speed (ms)
        // animationOutSpeed: 200; // Animation out speed (ms)
        // scrollText: 'Scroll to top'; // Text for element
        // activeOverlay: false; // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});