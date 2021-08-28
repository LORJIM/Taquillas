<?php
	$Usuario=filter_input(INPUT_POST,"Usuario");
	$Posiciones= json_decode($_POST['Posiciones'], true);
	require "Conectarse.php";

	$login = "SELECT * FROM alumnos WHERE dni_a ='".$Usuario."'";
	$resultados = $conexion->query($login);
	

	if ($resultados-> num_rows > 0) { //si existe el usuario

		//VALIDAMOS CLAVE
		$clave = $conexion->query("SELECT password_a FROM alumnos WHERE dni_a ='".$Usuario."'"); //obtenemos la clave de bbdd
		$clave=$clave-> fetch_assoc(); //obtener clave del array de resultados
		foreach ($Posiciones as $posicion) { //vamos recorriendo las posiciones introducidas
			if(substr($clave['password_a'], $posicion['posicion'], 1) != $posicion['valor']){ //si la substring de la clave de bbdd no coincide con su posicion equivalente
				echo'<script type="text/javascript">
				alert("Usuario o Contraseña erroneos");
				</script>'; 
				die();
			};
		}
		//si por el contrario, logras superar el for de las posiciones, avanzas
		echo"<script type='text/javascript'>
        window.location.href='Taquillas.html';
        </script>";


	}
	else
	{ //si no existe el usuario, ni nos molestamos en validar clave

		echo'<script type="text/javascript">
        alert("Usuario o Contraseña erroneos");
        </script>';
	}
		



?>