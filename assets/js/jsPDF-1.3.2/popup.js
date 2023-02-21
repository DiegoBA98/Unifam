$(document).ready(function(){ 
 
    //hacemos aparecer el modal (solo en caso de que le hayamos asignado display:none en CSS
    $(".modal").css({"display" : "block"}) 
    
        //cuando hacemos click en el elemento con clase "cerrar"
    $(".cerrar").click(function(){ 
        
                //el modal se desvanece
        $(".modal").fadeOut(300); 
        
    });
 
});