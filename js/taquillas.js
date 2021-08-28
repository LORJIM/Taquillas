$(document).ready(function() {

        consultar();
        //seleccionar la primera taquilla disponible con delay para que le de tiempo a consultar y poner a escuchar los listeners
        setTimeout(function() {
            if($(".Libre")!=null){
                $(".Libre")[0].focus();
            }
        }, 400);
    
    //consulta de taquillas
    function consultar(){
        $.get("../taquillas/php/consultarTaquillas.php",function(data){
            $('#tablas').html(data);
            //ponemos los listeners a escuchar
            $(".btnTaquillas").focus(function(){ //onSeleccionarTaquilla
                $("#taqReservada")[0].innerText=this.parentElement.textContent; //ponemos la id de la taquilla seleccionada a la izquierda
                if(this.className.includes( "Libre" )){ //si esta disponible habilitamos el boton reservar y deshabilitamos cancelar
                    $("#btnReservar").attr("disabled", false);
                    $("#btnCancReserva").attr("disabled", true);
                    $("#btnIncidencia").attr("disabled", false);
                } 
                else if(this.className.includes( "Reservada" )){ //si esta reservada pues lo mismo de arriba pero al reves
                    $("#btnCancReserva").attr("disabled", false);
                    $("#btnReservar").attr("disabled", true);
                    $("#btnIncidencia").attr("disabled", false);
                }else if(this.className.includes( "Incidencia" )){ //si ya esta en incidencia no vamos a habilitar ese boton
                    $("#btnIncidencia").attr("disabled", true);
                    $("#btnReservar").attr("disabled", true);
                    $("#btnCancReserva").attr("disabled", true);
                }
                else{//si no esta disponible ni reservada ni en incidencia deshabilitamos reservar y cancelar pero habilitamos incidencia
                    $("#btnReservar").attr("disabled", true);
                    $("#btnCancReserva").attr("disabled", true);
                    $("#btnIncidencia").attr("disabled", false);
                }
            });
            $(".btnTaquillas, body").blur(function(){ //cuando clickamos fuera de la taquilla
                setTimeout(function() {
                    if(!document.activeElement.className.includes("btnTaquillas")){
                        $("#taqReservada")[0].innerText=''; //quitamos la id de la izquierda
                        $("#btnReservar").attr("disabled", true); //deshabilitamos el boton de reservar
                    }
                }, 100);
            });
        });
    }

    //cambio de planta
    $("#selectPlantas").change(function(){
        var plantaSeleccionada=$("#selectPlantas").val();
        if(plantaSeleccionada!=''){ //este if es para no repetirlo en los cases
            $("#sinPlantas").hide();
            $("#imagenPlanta").show();
        }
        switch(plantaSeleccionada){ //muestra una imagen u otra dependiendo del valor seleccionado
            case '0':
                $("#imagenPlanta")[0].src="images/Planta0.png";
                break;
            case '1':
                $("#imagenPlanta")[0].src="images/Planta1.png";
                break;
            case '2':
                $("#imagenPlanta")[0].src="images/Planta2.png";
                break;
            default: //si no hay ninguna seleccionada, se muestra el mensaje de sin plantas y ocultamos la imagen
                $("#sinPlantas").show();
                $("#imagenPlanta").hide();
                break;
        }
    });    

    //reservar taquillas
    $("#btnReservar").click(function(){ 
        var id=$("#taqReservada")[0].innerText;
        var usuario=localStorage.getItem("user");
        $.post("../taquillas/php/Reservar.php",{ID:id,Usuario:usuario},function(data){
            $('#mensajeReserva').html(data);
           consultar();
        });
    });

    //cancelar reserva
    $("#btnCancReserva").click(function(){ 
        var id=$("#taqReservada")[0].innerText;
        var usuario=localStorage.getItem("user");
        $.post("../taquillas/php/CancelarReserva.php",{ID:id,Usuario:usuario},function(data){
            $('#mensajeReserva').html(data);
           consultar();
        });
    });

    //reportar incidencia
    $("#btnIncidencia").click(function(){ 
        var id=$("#taqReservada")[0].innerText;
        $.post("../taquillas/php/Incidencia.php",{ID:id},function(data){
            $('#mensajeReserva').html(data);
           consultar();
        });
    });

    //consulta el usuario para saber a que planta pertenece
    var usuario=localStorage.getItem("user");
    $.get("../taquillas/php/consultarUsuario.php",{Usuario:usuario},function(data){
        $("#selectPlantas").val(data); //establezco la planta
        $("#selectPlantas").attr("disabled", true); //deshabilito desplegable
        $("#selectPlantas").change(); //disparo el change
    });

});
