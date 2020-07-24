var typed = new Typed('#typed', {
    strings: [
        'Web Designer',
        'Web Devloper',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


$(document).ready(function () {

    var navber_offset_top = $('.my_nav').height();

    function navberFixed() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= navber_offset_top) {
                $('.my_nav').addClass('navbar_fixed');
                $('nav.navbar.navbar-expand-lg.navbar-light').addClass('sticky_padding');
            } else {
                $('.my_nav').removeClass('navbar_fixed');
                $('nav.navbar.navbar-expand-lg.navbar-light').removeClass('sticky_padding');
            }

        })



    }
    navberFixed();




    var $navbtn = $('.nav-item a');

    $navbtn.click(function (e) {
        $('.navbar-nav li a').removeClass('active');
        e.target.classList.add('active');
        $('.navbar-collapse').removeClass('show');
    })


    var navberHeigt = $('nav').height();

    var $toggleBtn = $('nav button');

    $toggleBtn.click(function (e) {
        $('.my_nav').css({
            marginBottom: '500px',
            background: '#007BFF'
        })
    })




    // isotop
    var $btns = $('.awsome_menu ul li a');

    $btns.click(function (e) {

        $('.awsome_menu ul li a').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });

        return false;
    })



    $('.project_menu #a1').trigger('click');

    $('.grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});