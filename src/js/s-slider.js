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
    }

    var suscribeEvents=function(){
        dom.itemLink.on('click',events.changeUrl);
    }

    var events={
        changeUrl : function(){
            var $this=$(this);
            var index=$this.data("index");
            console.log(st.sliderData[index]);
            
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
            console.log(st.sliderData[0].srcImage);
        },
        loadSentences(){
            for(i=0;i<sliderData.length;i++){
                dom.image.attr('src',st.sliderData[i].srcImage);
            }
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