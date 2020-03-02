$(function () {

    // Active link navbar
    $('.nav-item').on('click', function (e) {

        e.preventDefault();

        $(this).addClass('active').siblings().removeClass('active')

        $('body, html').animate({

            scrollTop: $('.' + $(this).data('scroll')).offset().top

        }, 1000)

    })


    $(window).scroll(function () {

        // change navbar background when body scroll

        if ($(this).scrollTop() > $('.navbar').innerHeight()) {

            $('.navbar').css({ background: '#3b3f41' })

        } else {

            $('.navbar').css({ background: 'transparent' })

        }

        // scroll to top

        let scrollToTopBtn = $('.scroll-to-top');

        if ($(this).scrollTop() > 300) {

            if (scrollToTopBtn.is(':hidden')) {

                scrollToTopBtn.fadeIn(300)

            }

        } else {

            scrollToTopBtn.fadeOut(300)

        }

        scrollToTopBtn.on('click', () => {

            $('html, body').animate({

                scrollTop: 0

            }, 1000)

        })

    });

    // animate pragraph 

    let text = $('.ani').data('text'),
        textlength = text.length,
        x = 0,

        myset = setInterval(typer, 200);

    function typer() {

        $('.ani').text($('.ani').text() + (text[x]));

        x++

        if (x >= textlength) {

            clearInterval(myset)

        }

    }

    // function hover btn

    function btnHover(selector, childNme, colorOnHover, colorOnLeav) {

        $(selector).hover(function () {

            $(this).children(childNme).slideDown();

            $(this).css({ color: colorOnHover })

        }, function () {

            $(this).children(childNme).slideUp();

            $(this).css({ color: colorOnLeav })

        }

        );

    };

    btnHover('.get-btn', '.child', '#fff', '#000')

    btnHover('.more-btn', '.child', '#fff', '#fff')

    btnHover('.contact-btn', '.child', '#fff', '#fff')

    // portfolio btn add class select on active button and filter porfolio

    $(".btn-menu").click(function (e) {
        e.preventDefault();

        $(".btn-menu").removeClass("select");

        $(this).addClass("select");

        $(".all, .web, .creative, .graphic").fadeOut()

        $($(this).data("filter")).fadeIn()

    });

    // imge popup gallrey

    $('.link-over').click(function (x) {

        x.preventDefault();

        $('.popup').fadeIn();

        $('.popup img').attr('src', $(this).parent().parent().children('.gallrey-img').attr('src'));

        $('.close').click(() => {

            $('.popup').fadeOut()

        });

    });

    $(document).keyup(function (e) {

        if (e.keyCode === 27) {

            $('.popup').fadeOut()

        }

    });

    // btn pricing hover

    btnHover('.btn-pric', '.child', '#fff', '#FFF')

    // btn form contact 

    btnHover('.btn-form', '.child', '#fff', '#FFF')


    // form 

    $('.custom, .message[required="required"]').on('focus', function () { 

        // remove blaceholder on focus
        $(this).attr('placeholder', '');
        
    }).blur( function () {

        if ($(this).val() == '') {

            // set blaceholder on blur if input is empty
            $(this).attr('placeholder', $(this).data('blur'));

            // add astris if input is empty
            $(this).next('.astris').fadeIn()
            
        } else {

            $(this).next('.astris').fadeOut()

        }

    })

   















});



