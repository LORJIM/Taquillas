<?php
  
	$Desde=filter_input(INPUT_GET,"Desde");
	$Hasta=filter_input(INPUT_GET,"Hasta");
  require "Conectarse.php";

  $conexion->query("SET NAMES 'utf8'");
  

  $seleccionar="SELECT * FROM reservas WHERE fecha_r>='".$Desde."' AND fechaPago_r<='".$Hasta."'"; //aqui consultamos las reservas
  $resultado=$conexion->query($seleccionar);
  if ($resultado-> num_rows > 0)
  { 
      echo "<table border='1' id='table'>
          <tbody>
              <tr>
                <th>ID Reserva</th>
                <th>Alumno</th>
                <th>Compartida</th>
                <th>ID Taquilla</th>
                <th>Desde</th>
                <th>Hasta</th>
            </tr>";
      while ($fila=$resultado-> fetch_assoc())
    {      
      echo"<tr><td>".$fila["id_r"] ."</td><td>".$fila["dni_a_r"] ."</td><td>".$fila["compartidaDNI_r"] ."</td><td>".$fila["id_t_r"] ."</td>
      <td>".$fila["fecha_r"] ."</td><td>".$fila["fechaPago_r"] ."</td></tr>";

    }
    echo "</table>";
    }
  else {
    echo "Sin resultados";
    }
  $conexion-> close();
  ?>