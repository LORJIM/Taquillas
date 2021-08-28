$(document).ready(function() {
    $("#btnBuscar").click(function(){
        var desde=$("#desde").val();
        var hasta=$("#hasta").val();
        $.get("../taquillas/php/consultarReservasAdmin.php",{Desde:desde,Hasta:hasta},function(data){
            $('#tabla').html(data);    
        }); 
    });
});