
$(document).ready(function () {

  $('.themebtn').click(function () {
    $('.card1').slideDown(4000);
  });
});

$(document).ready(function () {
  $('.themesbtn').click(function () {
    $(this).slideUp(1000),
    $('.list-inline-item h3').slideDown();
  });
});

$(document).ready(function () {
    $('.morepaintings img').slice(0, 8).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        $('.morepaintings img:hidden').slice(0, 8).slideDown();
        if ($('.morepaintings img:hidden').length == 0) {
            $('#load').fadeOut('slow');
          }
          $('html,body').animate({
              scrollTop: $(this).offset().top,
            }, 1500);
            });
        });

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0,
      }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});
