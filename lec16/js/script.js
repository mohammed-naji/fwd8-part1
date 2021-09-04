$(window).scroll(function() {
    let top = $(window).scrollTop();
    if(top > 20) {
        $('header').addClass('fixed')
    }else {
        $('header').removeClass('fixed')
    }
})


$('#text').on('keyup', function() {
    let textLength = $('#text').val().length;
    $('#msg').text( 100 - textLength );
    if(100 - textLength == 0) {
        $('#text').css('color', '#f00')
        $('#msg').css('color', '#f00')
    }else {
        $('#text').css('color', '#000')
        $('#msg').css('color', '#000')
    }
    // console.log(textLength);
})



$('.input-wrapper button').on('click', function() {

    let type = $('.input-wrapper input').attr('type');

    if(type == 'password') {
        $('.input-wrapper input').attr('type', 'text');
        $('.input-wrapper i').addClass('fa-eye-slash');
    }else {
        $('.input-wrapper input').attr('type', 'password');
        $('.input-wrapper i').removeClass('fa-eye-slash');
    }
})

$('#mode').on('click', function() {
    $('body').toggleClass('dark');
    $('#mode i').toggleClass('fa-sun')
})