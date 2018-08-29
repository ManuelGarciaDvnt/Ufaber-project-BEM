(function(){
var hearts= $(".s-courses__heart");
var covers = $(".s-courses__cover");
hearts.on('click', function(){
    var isActive= $(this).attr('class');
    if(isActive==="s-courses__heart s-courses__heart--active"){
    console.log("ya esta favorito");
    $(this).removeClass("s-courses__heart--active");
    $(this).parent().removeClass("s-courses__cover--favorite");
    }

    else if (isActive !== "s-courses__heart s-courses__heart--active"){
        $(this).addClass("s-courses__heart--active");
        $(this).parent().addClass("s-courses__cover--favorite");
        console.log("Aun no estaba activo");
    }
    


    ;
    
});


})();