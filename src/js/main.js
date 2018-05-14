/* End mobile nav */

$('#nav-toggle').click(function() {
    $(this).parent().find('#main-nav').slideToggle();
    $("body").find('.pageOverlay').toggleClass("visible");
  //  $("body").toggleClass("overflow-hidden");
});

/* Header scroll */

$(window).scroll(function() {
    if ($(".fixed-top").offset().top > 1) {
        $(".fixed-top").addClass("top-nav-collapse");
       
    } else {
        $(".fixed-top").removeClass("top-nav-collapse");
     
    }
});

/* img cover */

if ($('img.coverImage').length) {
    jQuery(function() {
        $("img.coverImage").cover();
    });
}

/* footer mobile link */

$('.footer-main__nav__heading').click(function() {
    var $this = $(this);
    $this.parent().find('.footer-main__nav__list').slideToggle();
    $this.toggleClass('active');
    $this.parents().siblings().find('.footer-main__nav__list').slideUp();
    $this.parents().siblings().find('.footer-main__nav__heading').removeClass('active');
});
