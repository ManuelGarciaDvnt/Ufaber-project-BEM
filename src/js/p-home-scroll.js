(function(){
    var st = {
        //Declaracion de selectores
        container : '.p-home-sections',
        sections  : '.p-sections'

    }
    var dom = {}
    var catchDom = function(){
        dom.container = $(st.container);
    }
    var suscribeEvents = function(){
        container.on('click',event.slide);
    }
    var events = {

        slide(e){
            var transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
            var className = $(e.target).att('class');
            if(className != 's-cover__next-section'){
                return;
            }

            container.onclick = '';
            father = e.target.parentNode;
            var distance = father.getBoundingClientRect();
            var scrollDistance = father.offset.top;

            container.style.top = (-distance.height - distance.top) + 'px';
            
            setTimeout(() => {
                container.style.transition = 'none';
                container.style.top = '';
                window.scrollTo(0, distance.height + scrollDistance);
                container.style.transition = transition;

                $(container).on('click',this.slide);





            }, 800);
        }
    }
    var initialice = function(){
        var transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
        dom.container.style.transition = transition;

    }
    initialice();



})();

