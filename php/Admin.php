<?php
	$Email=filter_input(INPUT_POST,"Email");
	$Password=filter_input(INPUT_POST,"Password");
	require "Conectarse.php";

	$login = "SELECT * FROM administrador WHERE correo ='".$Email."' AND pasword ='".$Password."'";
	$resultados = $conexion->query($login);
	

	if ($resultados-> num_rows > 0) { //si existe el email y clave asociada significa que coinciden con lo introducido


		echo"<script type='text/javascript'>
        window.location.href='ConsultarTaquillas.html';
        </script>";


	}
	else
	{ 

		echo'<script type="text/javascript">
        alert("Usuario o Contraseña erroneos");
        </script>';
	}
		



?>