<?php
	
	$contrasena="";
	$usuario="root";
	$servidor="localhost:3307";
	$nombredatabase="administraciontaquillas";
	$conexion=new mysqli($servidor,$usuario,$contrasena,$nombredatabase);
	if($conexion->connect_errno){
		exit("Conexion fallida. Razon: ".$conexion->connect_error);
	}
	$conexion->query("SET NAMES 'utf8'");
?>