<?php
	$ID=filter_input(INPUT_POST,"ID");
	require "Conectarse.php";
	if($conexion->connect_errno){
		exit("Conexion fallida. Razon: ".$conexion->connect_error);
	}
	else{
		$insertar="UPDATE taquillas SET estado_t='4' WHERE id_t='$ID'";
	
		if($conexion->query($insertar)){ //si ha ido guay
			echo "<div class='alert alert-success alert-dismissible fade show' role='alert'>
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
			   <span aria-hidden='true'>&times;</span>
			 </button>
			<strong>:(</strong> Sentimos que haya una incidencia.
		  </div>"; 
		}else{
			echo "<div class='alert alert-danger alert-dismissible fade show' role='alert'>
			<button type='button' class='close' data-dismiss='alert' aria-label='Close'>
			   <span aria-hidden='true'>&times;</span>
			 </button>
			<strong>¡Ooops!</strong> Nuestras taquillas nunca tienen errores ;).
		  </div>"; 
		}
	}
	$conexion->close();
?>