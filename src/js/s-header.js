(function () {
    var st = {
        //Declaracion de selectores
        header: '.js-header'
    }
    var dom = {}
    var catchDom = function () {
        dom.header = $(st.header);
        dom.window = $(window);
    }

    var suscribeEvents = function () {
        dom.window.on('scroll',events.setSticky)
    }

    var events = {
        
        setSticky() {
            if(dom.window.scrollTop()>100){
                dom.header.addClass('s-header--sticky');
            }
            else{
                dom.header.removeClass('s-header--sticky');
            }
        }
    }

    var initialice = function () {
        catchDom();
        suscribeEvents();
    }

    initialice();


})();

