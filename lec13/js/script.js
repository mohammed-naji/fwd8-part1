// function sayHi() {
//     alert("Hi from external file!");
// }

/*

$(selector).event(function() {
    action
})

*/

$('#hide').on('click', function() {
    // $('p').hide();
    // $('p').fadeOut();
    $('p').slideUp();
});

$('#show').on('click', function() {
    // $('p').show();
    // $('p').fadeIn();
    $('p').slideDown();
});

$('#toggle').on('click', function() {
    // $('p').toggle();
    // $('p').fadeToggle();
    $('p').slideToggle();
});


$(window).scroll(function() {
    let top = $(window).scrollTop();

    if (top > 300) {
        $('.top').fadeIn();
    }else {
        $('.top').fadeOut();
    }
})

$('.top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

