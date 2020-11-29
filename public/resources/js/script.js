$(document).ready(() => {

    /* sticky navigation */
    $('#section-feature').waypoint(function (direction) {
        if (direction === 'down') {
            $('header nav').addClass('stick-nav');
        } else {
            $('header nav').removeClass('stick-nav');
        }
    }, {
        offset: '80px'
    });

    /* scroll on buttons */
    $('#scroll-to-plans').click(function () {
        $('html, body').animate({ scrollTop: $('#price-plan').offset().top }, 0);
    });

    $('#scroll-to-feature').click(function () {
        $('html, body').animate({ scrollTop: $('#section-feature').offset().top }, 0);
    });

    /* scroll on navigation*/
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 0, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
        /* Animation on scroll*/
        $('#wp-1').waypoint(function(){
            $('#wp-1').addClass('animated fadeIn');
        },{
            offset: '50%'
        });

        $('#wp-2').waypoint(function(){
            $('#wp-2').addClass('animated fadeInUp');
        },{
            offset: '50%'
        });

        $('#wp-3').waypoint(function(){
            $('#wp-3').addClass('animated fadeIn');
        },{
            offset: '50%'
        });

        $('#wp-4').waypoint(function(){
            $('#wp-4').addClass('animated pulse');
        },{
            offset: '50%'
        });

        /* Mobile navigation */
        $('#nav-icon').click(function(){
            const nav = $('#main-nav');
            const nav_icon = $('#nav-icon ion-icon');
            nav.slideToggle(200);
            nav_icon.attr('name') === "menu-outline" ? nav_icon.attr('name', 'close-outline') :  nav_icon.attr('name', 'menu-outline');
        });
});