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
        dom.itemLink.on('click',events.activeLink);
        dom.itemLink.on('click',events.changeUrl);
        dom.itemLink.on('click',events.changeParagraph);
    }

    var events={
        changeUrl : function(){
            var $this=$(this);
            var index=$this.data("index");
            // console.log(st.sliderData[index]);
            var ruta=st.sliderData[index].srcImage;
            
            var label = $('<figure class="s-slider__picture"><img class="s-slider__image" src="' + ruta + '"></figure>');
            console.log("ruta de la imagen: "+ruta);
            
            dom.card.last().removeClass("s-slider__card--top");

            var lastcard_new= $('.s-slider__card:last');
            var firtscard_new=$('.s-slider__card:first');

            //Manda al inicio la ultima tarjeta
            dom.containerCard.prepend(lastcard_new);
            $(firtscard_new).removeClass("s-slider__card--top");
            $(lastcard_new).removeClass("s-slider__card--central");

            //Captura de la actual ultima tarjeta
            var lcard=$('.s-slider__card:last');
            $(lcard).empty();
            $(lcard).append(label);
            $(lcard).removeClass("s-slider__card--central");
            $(lcard).addClass("s-slider__card--top");
            //Captura al hermano de la ultima tarjeta
            var previewcard=$(lcard.prev());
            $(previewcard).addClass("s-slider__card--central");

            
            console.log(label);
        }

        ,
        changeParagraph : function(){
            var $this = $(this);
            var index = $this.data("index");
            var paragraph = st.sliderData[index].text;
            dom.textBox.text(paragraph);
        },
        sliderPlay : function() {
            console.log('jsdjasd');
            
        },
        activeLink : function(){
            dom.itemList.removeClass("is-active");
            $(this).parent().addClass("is-active");
            console.log($(this));
            
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
        },
        loadSentences(){
            console.log('dasdj');
            
        },
        sliderAuto(){
            setInterval(events.sliderPlay, 1000);    
        }


    }

    var initialice=function(){
        catchDom();
        suscribeEvents();
        fn.loadSliderData();
        console.log(st.sliderData);
        fn.sliderAuto();
        
    }

    initialice();


})();

