//var buttons_link = document.getElementsByClassName('s-slider__link');
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

/*var node1 = document.createTextNode($(".s-slider__link")[0].getAttribute("data-text"));
var node2 = document.createTextNode($(".s-slider__link")[1].getAttribute("data-text"));
var node3 = document.createTextNode($(".s-slider__link")[2].getAttribute("data-text"));
var node4 = document.createTextNode($(".s-slider__link")[3].getAttribute("data-text"));
var node5 = document.createTextNode($(".s-slider__link")[4].getAttribute("data-text"));
var node6 = document.createTextNode($(".s-slider__link")[5].getAttribute("data-text"));
var node7 = document.createTextNode($(".s-slider__link")[6].getAttribute("data-text"));
var node8 = document.createTextNode($(".s-slider__link")[7].getAttribute("data-text"));
var node9 = document.createTextNode($(".s-slider__link")[8].getAttribute("data-text"));*/


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

//buttons_link[0].addEventListener('click', sentence_container.text(sentence1));

var buttons_link=$(".s-slider__link");
var btn_1=$(buttons_link[0]);


btn_1.click(function(){
    alert('hi');
    sentence_container.text(sentence2);
});




