(function(){
    var st= {
    //Declaracion de selectores
    containerCard  : '.js-slider__main',
    card           : '.js-slider__card',
    image          : '.js-slider__image',
    itemList       : '.js-slider__list-item',
    itemLink       : '.js-slider__link',
    textBox        : '.js-slider__text-box',
    active         : 'js-isActive',
    firstcard      : '.s-slider__card:first',
    lastcard       : '.s-slider__card:last',
    //imagenes a utilizar
    sliderData     : []
    }
    var dom={}
    var catchDom=function(){
        dom.containerCard = $(st.containerCard);
        dom.card          = $(st.card);
        dom.image         = $(st.image);
        dom.itemList      = $(st.itemList);
        dom.itemLink      = $(st.itemLink,dom.itemList);
        dom.textBox       = $(st.textBox);
        dom.firstcard     = $(st.firstcard);
        dom.lastcard      = $(st.lastcard);
    }

    var suscribeEvents=function(){
        dom.itemLink.on('click',events.changeUrl);
    }

    var events={
        changeUrl : function(){
            var $this=$(this);
            var index=$this.data("index");
            // console.log(st.sliderData[index]);
            console.log("ruta de la imagen: "+st.sliderData[index].srcImage);
            var ruta=st.sliderData[index].srcImage;
            dom.card.last().removeClass("s-slider__card--top");

            var lastcard_new= $('.s-slider__card:last');
            var firtscard_new=$('.s-slider__card:first');
            dom.containerCard.prepend(lastcard_new);
            $(firtscard_new).removeClass("s-slider__card--top");
            $(lastcard_new).removeClass("s-slider__card--central");

            //Captura de la actual ultima tarjeta
            var lcard=$('.s-slider__card:last');
            $(lcard).removeClass("s-slider__card--central");
            $(lcard).addClass("s-slider__card--top");
            //Captura la tarjeta hermana de la ultima tarjeta
            var previewcard=$(lcard.prev());
            $(previewcard).addClass("s-slider__card--central");

            
        }
        ,
        togleButtons : function(){
            var $this=$(this);
            
        }
        
    }

    //funciones reutilizables
    var fn={
        
        loadSliderData(){
            $.each(dom.itemLink, function(index, value) {                
                var elem = $(value);
                
                elem.data('index',index);
                var item = {
                    srcImage: elem.data("src"),
                    text: elem.data("text")
                };
                st.sliderData[index] = item;
            });            
            // console.log(st.sliderData[0].srcImage);
        },
        loadSentences(){
            
        }

    }

    var initialice=function(){
        catchDom();
        suscribeEvents();
        fn.loadSliderData();
        console.log(st.sliderData);
    }

    initialice();


})();