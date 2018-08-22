(function(){
    var st= {
    //Declaracion de selectores
    containerCard  : 'js-slider__main',
    card           : 'js-slider__card',
    itemList       : 'js-slider__list-item',
    textBox        : 'js-slider__text-box',
    active         : 'js-isActive',
    //imagenes a utilizar
    images         : [],
    courseImages   : []
    }
    var dom={}
    var catchDom=function(){
        dom.containerCard = $(st.containerCard);
        dom.card          = $(st.card);
        dom.itemList      = $(st.itemList);
        dom.textBox       = $(st.textBox);
    }

    var suscribeEvents=function(){
        dom.item_list.on('click',events.changeColor);
    }

    var events={
        changeUrl: function(){
        
        },
        changeSentence: function(){
        
        },
        changeColor:function(){
        dom.card.css('background-color','green');
        }
    }

    //funciones reutilizables
    var fn={
        
        loadImages(){
            st.images       = ['../assets/img/img1.jpg', '../assets/img/img2.jpg', '../assets/img/img3.jpg', '../assets/img/img4.jpg', '../assets/img/img5.jpg', '../assets/img/img6.jpg', '../assets/img/img7.jpg', '../assets/img/img8.jpg','../assets/img/img9.jpg']
            st.courseImages = ['',''];
        }
    }

    var initialice=function(){
        catchDom();
        suscribeEvents();
        fn.loadImages();
    }

    return{
        init:initialice
    }

    init();


})();