<?php
	$ID=filter_input(INPUT_POST,"ID");
	$Usuario=filter_input(INPUT_POST,"Usuario");
	require "Conectarse.php";
	if($conexion->connect_errno){
		exit("Conexion fallida. Razon: ".$conexion->connect_error);
	}
	else{
		$insertar="UPDATE taquillas SET estado_t='1' WHERE id_t='$ID'"; //actualiza el estado de la taquilla
		$eliminar="DELETE FROM reservas WHERE id_t_r='$ID'"; //elimina la reserva
		//SOLO HACER LO DE ABAJO SI UN ALUMNO PUEDE REALIZAR VARIAS RESERVAS
		/*aqui iria una comprobacion de si el alumno tiene alguna reserva aun despues de haber cancelado una, si esa
		comprobacion no devuelve resultados, entonces estableceriamos tieneReserva_a=0*/

		if($conexion->query($insertar) && $conexion->query($eliminar)){ //si ha ido guay
			echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
			   <span aria-hidden='true'>&times;</span>
			 </button>
			<strong>¡Genial!</strong> Se ha cancelado la reserva.
		  </div>"; 
		}else{
			echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
			   <span aria-hidden='true'>&times;</span>
			 </button>
			<strong>¡Ooops!</strong> Algo ha ido mal en tu cancelación, contáctanos :).
		  </div>"; 
		}
	}
	$conexion->close();
?>