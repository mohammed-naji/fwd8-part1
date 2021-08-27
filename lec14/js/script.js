// $('button').click(function(){

// });

$('#show-modal').on('click', function(){
    // console.log('button clicked');
    $('.modal').fadeIn();
});

$('#close-modal').on('click', function(){
    $('.modal').fadeOut();
});


$('.images img').on('click', function(){

    // get the image src and update the modal image
    let path = $(this).attr('src');

    $('.images-modal img').attr('src', path);

    $('.images-modal').fadeIn();
});

$('.images-modal .close').on('click', function(){
    $('.images-modal').fadeOut();
});
