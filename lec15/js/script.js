/*
$(selector).event(function(){
    Action
}
1. Selector: a
2. Event: click
3. Action: Show the full text
*/

// $("a").click()
$("a").on('click', function() {
    let text = $("a").text();
    if( text == "5" ) {
        $('.full-text').show(); // to show the full text
        $("a").text("Read Less..");
    }else {
        $('.full-text').hide();
        $("a").text("Read More..");
    }
})


$('.menu-toggeler').on('click', function() {
    // $('.side-menu').fadeIn();
    // $('.side-menu').addClass('active');
    $('.side-menu').toggleClass('active');
})

// $('.side-menu-close').on('click', function() {
//     // $('.side-menu').fadeOut();
//     $('.side-menu').removeClass('active');
// })

