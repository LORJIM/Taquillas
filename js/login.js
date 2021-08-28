$(document).ready(function(){
	$(function(){
		$("#submit_post").click(function(){//login
			if ($(".form-controlo").hasClass("invalid")){
				return;
			}else{
				var usuario=$("#DNI").val();
				var posiciones=new Array();
				$(".desbloqueada").each(function() {
					posiciones.push({
						posicion : this.id.substring(10,11),
						valor : this.textContent
					});
				});
				$("#loading").show();
				
				setTimeout(function() {
					$.post("../taquillas/php/Login.php",{Usuario:usuario,Posiciones:JSON.stringify(posiciones)},function(data){
						$('#meow').html(data);
						localStorage.setItem("user", usuario); //guardamos el usuario en una variable global para utilizarlo en el resto de la app
					});
				}, 5000);
				
			};
		});
	});
});