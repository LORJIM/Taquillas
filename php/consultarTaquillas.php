<?php
  
  require "Conectarse.php";

  $conexion->query("SET NAMES 'utf8'");
  $seleccionar="SELECT id_t, estado_t FROM taquillas"; //aqui consultamos las taquillas
  $resultado=$conexion->query($seleccionar);
  if ($resultado-> num_rows > 0)
  { 
      $contador=0; //contador de celdas
      $contadorFilas=0; //contador de filas
      $active="active"; //indicador de primera tabla
      $imagenTaquilla;
      while ($fila=$resultado-> fetch_assoc()) //recorre el array de bbdd y va mostrando cada taquilla
        {  
          if($contadorFilas==0 && $contador==0){ //cuando no haya ni filas ni celdas empezadas
            echo"<div class='carousel-item ".$active."'><table class='tablaTaquillas'>"; //empezamos una nueva tabla
          }    
          if($contador==0){
            echo"<tr>"; //empezamos una nueva fila
          }
          switch($fila["estado_t"]){ //segun el estado, la imagen y la clase sera una u otra
            case '1':
              $imagenTaquilla='Libre';
              break;
            case '2':
              $imagenTaquilla='Reservada';
              break;
            case '3':
              $imagenTaquilla='Ocupada';
              break;
            case '4':
              $imagenTaquilla='Incidencia';
              break;
          }
          echo"<td><button class='btnTaquillas ".$imagenTaquilla."' style='background-image: url(images/taquilla_".$imagenTaquilla.".png');></button>".$fila["id_t"]."</td>"; //pintamos una taquilla
          $contador++; //incrementamos 1 el contador
          if($contador==4){ //cuando haya 4 taquillas pintadas
            echo"</tr>"; //terminamos la fila
            $contador=0; //reseteamos contador para que empiece una nueva
            $contadorFilas++; //incrementamos el contador de filas
          }
          if($contadorFilas==3){ //cuando ya tengamos 3 filas
            echo "</table></div>"; //terminamos la tabla
            $contadorFilas=0; //reseteamos contador para que empiece una nueva tabla
            $active=""; //quitamos el indicador de primera tabla
          }
        }
    }
  else { //si no hay taquillas
    echo "Sin resultados";
    }
  $conexion-> close();
  ?>