$(function(){
    if($(window).scrollTop()>100){
        $('#s-header__menu').addClass('s-header--sticky');
    }else{
        $('#s-header__menu').removeClass('s-header--sticky');
    }
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('#s-header__menu').addClass('s-header--sticky');
        }
        else
            $('#s-header__menu').removeClass('s-header--sticky');
    });

    

});



