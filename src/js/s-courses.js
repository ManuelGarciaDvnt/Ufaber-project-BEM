(function(){
    var st= {
    //Declaracion de selectores
    heart         :   '.js-courses__heart',
    coverCourse   :   '.js-courses__cover',
    card          :   '.js-courses__card',
    cardContainer :   '.js-courses__card-container',
    star          :   '.js-courses__star',
    starSvg       :   '.js-courses__star-svg'
    }

    var dom={}
    var catchDom=function(){
        dom.heart         = $(st.heart);
        dom.coverCourse   = $(st.coverCourse);
        dom.card          = $(st.card);
        dom.cardContainer = $(st.cardContainer);
        dom.star          = $(st.star);
        dom.starSvg       = $(st.starSvg);
        dom.path          = $(dom.starSvg).children();
    }

    var suscribeEvents=function(){
        dom.heart.on('click',events.setActive);
        dom.star.on('click',events.submitScore);
        dom.star.on('mouseenter', events.setScore);
        dom.star.on('mouseleave',events.removeScore);
    }
    var events={
        setActive : function(){
            var favorite      = $(this).attr('class');
            
            var isActive      = "js-courses__heart s-courses__heart s-courses__heart--active";
            var favoriteClass = "s-courses__heart--active";
            var favoriteCover = "s-courses__cover--favorite";

            if( favorite===isActive){
                console.log("ya estaba como favorito");
                $(this).removeClass(favoriteClass);
                $(this).parent().removeClass(favoriteCover);
            }
            else if( favorite !== isActive){
                $(this).addClass(favoriteClass);
                $(this).parent().addClass(favoriteCover);
                console.log("aun no estaba como favorito");
                
            }
        },
        setScore : function(){
            console.log("mouse entrando");
            console.log($(this).index());
            var container = $(this).parent();
            var star      = $(container).children('i');
            var svg       = $(star).find('svg');
            var path      = $(svg).children();
            var available = $(path).attr('data-available');
            if(available==='true'){
                for (var i = 0; i <= $(this).index(); i++) {
                    console.log("star cambiada: "+i);
                    $(path[i]).addClass("star--active");
                }
            }
            else if(available==='false'){
                return false;
            }

        },
        removeScore : function(){
            console.log("mouse saliendo");
            var container = $(this).parent();
            var star      = $(container).children('i');
            var svg       = $(star).find('svg');
            var path      = $(svg).children();
            var available = $(path).attr('data-available');
            if(available=='true'){
                for (var i = 5; i >= $(this).index(); i--) {
                    $(path[i]).removeClass("star--active");
                }
            }
            else if(available==='false'){
                return false;
            }

        },
        submitScore : function(){
            var index = $(this).index();
            console.log("tocaste la estrella :" + index);
            
            var container = $(this).parent();
            var star = $(container).children('i');
            var svg = $(star).find('svg');
            var path = $(svg).children();
            var available = $(path).attr('data-available');
            if(available==='true'){
                for (var i = 0; i <= index; i++) {
                    console.log("se coloreo hasta el indice: "+i);
                    $(path[i]).addClass("star--active");
                }
                console.log(available);
                $(path).attr('data-available','false');
                

            }
            else if(available==='false'){
                console.log('ya es falso prro');
                return false;
            }

        },
        unSubmitScore : function (){

        }

    }
    //funciones reutilizables
    var fn={

        loadStars(){
            dom.path.attr('data-available','true');
        }

    }
    var initialice=function(){
        catchDom();
        suscribeEvents();
        fn.loadStars();
    }

    initialice();




})();