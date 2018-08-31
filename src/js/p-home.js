// (function(){
//     var st = {
//         buttonSlide: '.js-next-section',
//         page2 : '#page2',
//         page3 : '#page3',
//         page4 : '#page4',
//         page5 : '#page5'
//     }
//     var dom = {}
//     var catchDom = function(){
//         dom.buttonSlide = $(st.buttonSlide);
//         dom.page2 = $(st.page2);
//         dom.page3 = $(st.page3);
//         dom.page4 = $(st.page4);
//         dom.page5 = $(st.page5);
//     }
//     var suscribeEvents = function(){
//         dom.buttonSlide.on('click', events.smooth);
//     }
//     var events = {

//         smooth() {
//             var section = dom.page2;
//             $('html,body').animate({
//                 scrollTop: section.offset().top
//             }, 'slow');
//             console.log("asd");
//         }
//     }

//     var initialice = function () {
//         catchDom();
//         suscribeEvents();
//     }

//     initialice();



// })();