$(document).ready(function() {
    $("#btnBuscar").click(function(){
        var planta=$("#selectPlanta").val();
        var zona=$("#selectZona").val();
        var estado=$("#selectEstado").val();
        $.get("../taquillas/php/consultarTaquillasAdmin.php",{Planta:planta,Zona:zona,Estado:estado},function(data){
            $('#tabla').html(data);    
        }); 
    });
});