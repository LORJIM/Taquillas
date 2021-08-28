<?php
  
	$Usuario=filter_input(INPUT_GET,"Usuario");
  require "Conectarse.php";

  $conexion->query("SET NAMES 'utf8'");
  

  $seleccionar="SELECT curso_a FROM alumnos WHERE dni_a LIKE '".$Usuario."'"; 
  $resultado=$conexion->query($seleccionar);
  if ($resultado-> num_rows > 0)
  { 
      $curso=$resultado-> fetch_assoc(); //obtener curso de los resultados
      switch($curso['curso_a']){ //en funcion del curso mandamos un valor u otro que equivale al valor del select (desplegable) en el html
        case 'ESO':
          echo '0';
          break;
        case 'BACHILLER':
          echo '1';
          break;
        case 'GRADO':
          echo '2';
          break;
        default:
          echo 'Algo no va bien ¯\_(ツ)_/¯';
          break;
      }
    }
  else {
    echo "Sin resultados";
    }
  $conexion-> close();
  ?>