
var sentence_container=$("#js-slider__text-box");

var sentence1=$(".s-slider__link")[0].getAttribute("data-text");
var sentence2=$(".s-slider__link")[1].getAttribute("data-text");
var sentence3=$(".s-slider__link")[2].getAttribute("data-text");
var sentence4=$(".s-slider__link")[3].getAttribute("data-text");
var sentence5=$(".s-slider__link")[4].getAttribute("data-text");
var sentence6=$(".s-slider__link")[5].getAttribute("data-text");
var sentence7=$(".s-slider__link")[6].getAttribute("data-text");
var sentence8=$(".s-slider__link")[7].getAttribute("data-text");
var sentence9=$(".s-slider__link")[8].getAttribute("data-text");

//Card-Array
var cards=$(".s-slider__card");
$(cards[8]).addClass('s-slider__card--top');
$(cards[7]).addClass('s-slider__card--central');
$(cards[6]).addClass('s-slider__card--back');




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

var buttons_link=$(".s-slider__link");
var btn_1=$(buttons_link[0]);
var btn_2=$(buttons_link[1]);
var btn_3=$(buttons_link[2]);
var btn_4=$(buttons_link[3]);
var btn_5=$(buttons_link[4]);
var btn_6=$(buttons_link[5]);
var btn_7=$(buttons_link[6]);
var btn_8=$(buttons_link[7]);
var btn_9=$(buttons_link[8]);


btn_1.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!=='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence1);
});
btn_2.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!=='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence2);
});
btn_3.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!=='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence3);
});
btn_4.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!=='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence4);
});
btn_5.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!=='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence5);
});
btn_6.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!=='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence6);
});
btn_7.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence7);
});
btn_8.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else {
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence8);
});
btn_9.click(function(){
    var slide_up=$(sentence_container).attr('class');
    if(slide_up!='s-slider__text-box s-slider__text-box--slideup'){
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    else{
        sentence_container.removeClass('s-slider__text-box--slideup');
        sentence_container.addClass('s-slider__text-box--slideup');
    }
    sentence_container.text(sentence9);
});





