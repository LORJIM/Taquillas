<?php
	$ID=filter_input(INPUT_POST,"ID");
	$Usuario=filter_input(INPUT_POST,"Usuario");
	require "Conectarse.php";
	if($conexion->connect_errno){
		exit("Conexion fallida. Razon: ".$conexion->connect_error);
	}
	else{
		$insertar="UPDATE taquillas SET estado_t='2' WHERE id_t='$ID'"; //actualiza el estado de la taquilla
		$insertar2="INSERT INTO reservas( id_t_r, fecha_r, dni_a_r) VALUES ('$ID',CURDATE(),'$Usuario')"; //registra la reserva
		$insertar3="UPDATE alumnos SET tieneReserva_a='1' WHERE dni_a='$Usuario'"; //actualiza la info del alumno como que tiene reserva
		if($conexion->query($insertar) && $conexion->query($insertar2) && $conexion->query($insertar3)){ //si ha ido guay
			echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
			   <span aria-hidden='true'>&times;</span>
			 </button>
			<strong>¡Genial!</strong> ¡Has reservado una taquilla!.
		  </div>"; 
		}else{
			echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
			   <span aria-hidden='true'>&times;</span>
			 </button>
			<strong>¡Ooops!</strong> Algo ha ido mal en tu reserva, contáctanos :).
		  </div>"; 
		}
	}
	$conexion->close();
?>