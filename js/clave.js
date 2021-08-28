//¯\_(ツ)_/¯
$(document).ready(function(){
    //calcula posiciones asteriscadas
    var arrayTeclado=new Array();
      var numActual;
      var i;
      for(i=0;i<3;i){
        numActual=Math.floor(Math.random() * 6);
        if(!arrayTeclado.includes(numActual)){
          arrayTeclado.push(numActual);
          i++;
        }
      }
      for(i=0;i<arrayTeclado.length;i++){
        $("#botonClave"+arrayTeclado[i]).val("*");
        $("#botonClave"+arrayTeclado[i]).removeClass("desbloqueada");
        $("#botonClave"+arrayTeclado[i]).addClass("bloqueada");
      }
        
        //muestra u oculta el teclado aleatorio cuando hacemos click en una posicion desbloqueada
        $(".desbloqueada").click(function(){
          var arrayTeclado=new Array();
          var numActual;
          var i;
          for(i=0;i<10;i){
            numActual=Math.floor(Math.random() * 10);
            if(!arrayTeclado.includes(numActual)){
              arrayTeclado.push(numActual);
              i++;
            }
          }
          for(i=0;i<arrayTeclado.length;i++){
            $("#botonTeclado"+i).val(arrayTeclado[i]);
          }
          $(".tecladoVirtual").toggle();
        });

        //inserta el numero presionado del teclado
        $(".botonTeclado").click(function(){
          var valoresFirma=new Array();
          $(".desbloqueada").each(function() {
            valoresFirma.push(this);
          });
          for(i=0;i<valoresFirma.length;i++){
            if(valoresFirma[i].value==""){
              if($("#ojo")[0].className=="ocultando"){
                valoresFirma[i].innerText=this.value;
                valoresFirma[i].value="*";
              }else{
                valoresFirma[i].innerText=this.value;
                valoresFirma[i].value=this.value;
              }
              break;
            }
          }
          
        });

        //cuando clickamos fuera del teclado oculta el teclado
        $(".botonTeclado, .botones, .inputLoginComponent, body").blur(function(){
          setTimeout(function() {
            if(document.activeElement.className!= "botonTeclado" && document.activeElement.className!= "botonBorrar" && document.activeElement.className!= "botonBorrarTodo"){
              $(".tecladoVirtual").css('display', 'none');
            }
          }, 100);
        });

        //el boton de borrar una posicion
        $("#botonBorrar").click(function(){
          var valoresFirma=new Array();
          $(".desbloqueada").each(function() {
            valoresFirma.push(this);
          });
          for(i=2;i>-1;i--){
            if(valoresFirma[i].value!=""){
              valoresFirma[i].value="";
              valoresFirma[i].innerText="";
              break;
            }
          }
        });

        //el boton de borrar todas las posiciones
        $("#botonBorrarTodo").click(function(){
          $(".desbloqueada").each(function() {
            this.value="";
            this.innerText="";
          });
        });

        //la X de cerrar el teclado
        $("#botonCerrar").click(function(){
          $(".tecladoVirtual").toggle();
        });
        
        //ojo que muestra u oculta la password
        $("#ojo").click(function(){
          if (this.className=="ocultando"){ //si esta ocultando, muestra
            $(".desbloqueada").each(function() {
              this.value=this.textContent;
            });
            this.className="mostrando";
            $("#ojito").removeClass("fa-eye-slash");
            $("#ojito").addClass("fa-eye");
          }else{ //si esta mostrando, oculta
            $(".desbloqueada").each(function() {
              if(this.value!=""){
                this.innerText=this.value;
                this.value="*";
              }
            });
            this.className="ocultando";
            $("#ojito").removeClass("fa-eye");
            $("#ojito").addClass("fa-eye-slash");
          }
        });

});
