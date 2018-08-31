(function () {
    var st = {
        //Declaracion de selectores
        header : '.js-header',
        buttonSlide : '.s-cover__next-section'
    }
    var dom = {}
    var catchDom = function () {
        dom.header = $(st.header);
        dom.window = $(window);
        dom.buttonSlide = $(st.buttonSlide);
    }

    var suscribeEvents = function () {
        dom.window.on('scroll',events.setSticky);
        dom.buttonSlide.on('click',events.smooth);
    }

    var events = {
        
        setSticky() {
            if(dom.window.scrollTop()>100){
                dom.header.addClass('s-header--sticky');
            }
            else{
                dom.header.removeClass('s-header--sticky');
            }
        },
        // smooth(){
        //     var section = $("#page2");
        //     $('html,body').animate({
        //         scrollTop: section.offset().top
        //     }, 'slow');
        //     console.log("asd");
            
        // }
    }

    var initialice = function () {
        catchDom();
        suscribeEvents();
    }

    initialice();


})();

