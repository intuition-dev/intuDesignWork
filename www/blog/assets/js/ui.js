// header menu links highlight
if ($('[data-js-menu-highlight="about"]').length !== 0) {
    $('header a.about').addClass('active');
} else if ($('[data-js-menu-highlight="blog"]').length !== 0) {
    $('header a.blog').addClass('active');
} else if ($('[data-js-menu-highlight="forum"]').length !== 0) {
    $('header a.forum').addClass('active');
}

// scroll to tob button
jQuery(document).ready(function($) {
    var scrollBtn = $('#scroll-to-top');
    scrollBtn.fadeOut();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 320) {
            scrollBtn.fadeIn('slow');
        } else {
            scrollBtn.fadeOut();
        }
    });
    scrollBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});