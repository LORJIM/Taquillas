<?php
  
	$Planta=filter_input(INPUT_GET,"Planta");
	$Zona=filter_input(INPUT_GET,"Zona");
	$Estado=filter_input(INPUT_GET,"Estado");
  require "Conectarse.php";

  $conexion->query("SET NAMES 'utf8'");
  

  $seleccionar="SELECT * FROM taquillas WHERE estado_t LIKE '".$Estado."' AND zonas LIKE '".$Zona."' AND nivel_t LIKE '".$Planta."'"; //aqui consultamos las taquillas
  $resultado=$conexion->query($seleccionar);
  if ($resultado-> num_rows > 0)
  { 
    
      $ID="ID";
      $Estado="Estado";
      $Planta="Planta";
      $Zona="Zona";
      echo "<table border='1' id='table'>
          <tbody>
              <tr>
                <th>".$ID."</th>
                <th>".$Estado."</th>
                <th>".$Planta."</th>
                <th>".$Zona."</th>

            </tr>";
      while ($fila=$resultado-> fetch_assoc())
    {      
      echo"<tr><td>".$fila["id_t"] ."</td><td>".$fila["estado_t"] ."</td><td>".$fila["nivel_t"] ."</td><td>".$fila["zonas"] ."</td></tr>";;

    }
    echo "</table>";
    }
  else {
    echo "Sin resultados";
    }
  $conexion-> close();
  ?>