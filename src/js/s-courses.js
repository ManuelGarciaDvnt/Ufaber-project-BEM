(function(){
var hearts= $(".s-courses__heart");
hearts.on('click', function(){
    var isActive= $(this).attr('class');
    if(isActive==="s-courses__heart s-courses__heart--active"){
    console.log("ya esta favorito");
    $(this).removeClass("s-courses__heart--active");
    }
    else
    $(this).addClass("s-courses__heart--active");
    console.log("Aun no estaba activo");
    
    ;
    
});


})();