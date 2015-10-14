$(function(){
    var $partyImg = $('.wedding-party-row img'),
        $navbarCollapse = $('.navbar-collapse');

    $partyImg.mouseenter(function(){
       $(this).attr('src', function( i, val ) {
           var len = val.length;
           return val.substring(0, len-4) + '-color' + val.substring(len-4);
       });
   });

    $partyImg.mouseleave(function(){
        $(this).attr('src', function( i, val ) {
            return val.replace('-color','');
        });
    });

    $('.nav li a').on('click', function(e){
        e.preventDefault();

        var location = $(this).attr('class'),
            scroll = $('#' + location).offset().top - $('.header').height() + $navbarCollapse.height();

        if($navbarCollapse.hasClass('in')){
            $('button.navbar-toggle').click();
        }

        $('html, body').animate({
            scrollTop: scroll
        }, 500);
    });
});