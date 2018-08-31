$(function(){
    var st= {
    //Declaracion de selectores
    favoriteWindow : '.s-favorite',
    btnHeart : '.js-courses__heart',
    listCourses : '.js-favorite__list',
    liItem : 's-favorite__item',
    liController : 'js-favorite__item'

    }
    var dom={}
    var catchDom=function(){
        dom.favoriteWindow = $(st.favoriteWindow);
        dom.btnHeart = $(st.btnHeart);
        dom.listCourses = $(st.listCourses);
        dom.liController = $(st.liController);
    }
    
        var suscribeEvents=function(){
        dom.btnHeart.on('click',events.activeWindow);

        
        }
    
        var events={
            
            activeWindow : function(){
                dom.favoriteWindow.addClass("s-favorite__active");
                var cover = $(this).parent();
                var container = $(cover).parent();
                var textContainer = $(container).find('main');
                var headerTitle = $(textContainer).find('header');
                var titleText = $(headerTitle).children().html();


                var newItem = document.createElement('li');
                var newLink = document.createElement('a');
                var textNode = document.createTextNode(titleText);
                

                if(titleText===""){
                    return false;
                }
                newLink.appendChild(textNode);
                $(newLink).attr('href','javascript:;');
                newItem.appendChild(newLink);
                $(newItem).attr('class',st.liItem);
                $(newItem).addClass(st.liController);
                dom.listCourses.append(newItem);
                
            },
            removeCourse : function(){

            }


        }
    
        //funciones reutilizables
        var fn={
            animate(){
    
            }
    
        }
    
        var initialice=function(){
            catchDom();
            suscribeEvents();
        }
    
        initialice();
    




    
    
    
    
    
});