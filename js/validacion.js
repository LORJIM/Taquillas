$(document).ready(function() {
    function validarCampos(input) {
        var is_name=input.val();
        if(is_name && input.selector=='#DNI'){ //si estamos validando el dni
			var nifValido=validarNIF(is_name);
            if (nifValido==true){
                input.removeClass("invalid").addClass("valid");
            }else{
				input.removeClass("valid").addClass("invalid");
				var error_element=$("span", input.parent());
				error_element[0].innerHTML=nifValido;
			}
        }else if(is_name && input.selector=='#email'){
			if(input.val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				input.removeClass("valid").addClass("invalid");
				var error_element=$("span", input.parent());
				error_element[0].innerHTML='El correo no es válido';
			}else input.removeClass("invalid").addClass("valid");
		}else if(is_name){ //si estamos validando un campo estandar
			input.removeClass("invalid").addClass("valid");
		}else{input.removeClass("valid").addClass("invalid");}
    };
    function p() {
		var valido=true
        $(".desbloqueada").each(function() {
            if(this.textContent==''){ 
                $(".inputLoginComponent").each(function() {
                    $(".inputLoginComponent").removeClass("valid").addClass("invalid");
                });
				valido=false;
				return valido;
            }
        });
		if(valido)$(".inputLoginComponent").removeClass("invalid").addClass("valid");
    };
    $("#submit_post").click(function(event){
		validarCampos($('#DNI'));
		p();
		var form_data=$("#formLogin").serializeArray();
		var error_free=true;
		for (var input in form_data){
			var element=$("#"+form_data[input]['name']);
			var valid=element.hasClass("valid");
			var error_element=$("span", element.parent());
			if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
			else{error_element.removeClass("error_show").addClass("error");}
		}
		if (!error_free){
			event.preventDefault(); 
		}
	});

	$("#submit_admin").click(function(event){
		validarCampos($('#email'));
		validarCampos($('#password'));
		var form_data=$("#formAdmin").serializeArray();
		var error_free=true;
		for (var input in form_data){
			var element=$("#"+form_data[input]['name']);
			var valid=element.hasClass("valid");
			var error_element=$("span", element.parent());
			if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
			else{error_element.removeClass("error_show").addClass("error");}
		}
		if (!error_free){
			event.preventDefault(); 
		}
	});


    function validarNIF(dni) {
        var letras = 'KTRWAGMYFPDXBNJZSQVHLCKET';
      	var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
      	var letrasControlDniNie = {
      		0:'T',
      		1:'R',
      		2:'W',
      		3:'A',
      		4:'G',
      		5:'M',
      		6:'Y',
      		7:'F',
      		8:'P',
      		9:'D',
      		10:'X',
      		11:'B',
      		12:'N',
      		13:'J',
      		14:'Z',
      		15:'S',
      		16:'Q',
      		17:'V',
      		18:'H',
      		19:'L',
      		20:'C',
      		21:'K',
      		22:'E'
      	};
      	var letrasControlOtrosNif = {
      		1:'A',
      		2:'B',
      		3:'C',
      		4:'D',
      		5:'E',
      		6:'F',
      		7:'G',
      		8:'H',
      		9:'I',
      		0:'J'
      	};
      	var correcto = true;
      	
      	
      	dni = dni.toUpperCase();
      	
      	if(dni.startsWith('X')) {
      		dni = dni.replace('X',0);
      	} else if(dni.startsWith('Y')) {
      		dni = dni.replace('Y',1);
      	} else if(dni.startsWith('Z')) {
      		dni = dni.replace('Z',2);
      	} else if(dni.startsWith('K')) {
      		dni = dni.replace('K',0);
      	} else if(dni.startsWith('L')) {
      		dni = dni.replace('L',0);
      	} else if(dni.startsWith('M')) {
      		dni = dni.replace('M',0);
      	}
      	
      	if(dni.length == 9 && !isNaN(dni.substring(0,dni.length-1))) {
      		var ultimaLetra = dni.substring(dni.length-1,dni.length);
      		var numeroDni =  dni.substring(0,dni.length-1);
      		var resultadoControl = parseInt(numeroDni)%23;
      		
      		if(letrasControlDniNie[resultadoControl] != ultimaLetra) {
				return 'NIF err\u00f3neo, la letra del NIF no se corresponde';
      		} else {
      			return true;
      		}
      	}
      	
      	//Si llegamos aqui, es que no se trata de un DNI ni de un NIE.
      	if(dni.length == 9) {
      		var primeraLetra = dni.substring(0,1);
      		var digitoControl = dni.substring(dni.length-1,dni.length);
      		var numeroDni =  dni.substring(1,dni.length-1);
      		
      		if(isNaN(numeroDni)) {
      			return 'NIF err\u00f3neo, formato no v\u00e1lido';
      		}
      		
      		var resultadoNumerosPares = 0;
      		var resultadoNumerosImpares = 0;
      		var resultadoTotal = 0;
      		
      		//1. Se suman las posiciones pares de los 7 digitos centrales, es decir, 
      		//no se tiene en cuenta la letra inicial ni el digito de control.
      		for(var i=0;i<numeroDni.length;i++) {
      			if(i%2 == 0) {
            		resultadoNumerosPares += parseInt(numeroDni[i]);
      			} else {
      				//2. Por cada uno de los digitos de las posiciones impares, se multiplica el digito por 2 y se suman 
		        	//las cifras del resultado (p.e. si el digito es 6, el resultado seria 6 x 2 = 12 -> 1 + 2 = 3). 
		        	//Se repite la operacion con todos los digitos en posiciones impares y se suman los resultados. (Suma = B)
      				var producto = (parseInt(numeroDni[i]) * 2).toString();
      				var sumaCifrasProducto = 0;
      				
      				for(var j=0;j<producto.length;j++) {
      					sumaCifrasProducto += parseInt(producto[j])
      				}
      				
      				resultadoNumerosImpares += sumaCifrasProducto;
      			}
        	}
        	
        	//3. Sumar el resultado de los 2 pasos anteriores. (A + B = C)
      		resultadoTotal = (resultadoNumerosImpares + resultadoNumerosPares).toString();
        	
        	//4. El ultimo digito de la suma anterior (C) se lo restamos a 10, cuyo resultado seria 
        	//el digito de control (p.e. si C = 14, el ultimo digito es 4, por lo que 
        	//tendriamos 10 - 4 = 6). Si el ultimo digito de la suma del paso anterior es 0 (p.e. C = 30), 
        	//no se realiza resta y se toma el 0 como digito de control.
        	var digitoControlCalculado = resultadoTotal.substring(resultadoTotal.length - 1, resultadoTotal.length);
        	
        	if(digitoControlCalculado != '0') {
        		digitoControlCalculado = 10 - digitoControlCalculado;
        	}
        	
        	
        	//Si el digito de control es un numero, este seria el resultado de la ultima operacion. 
        	//Si se trata de una letra, se utilizaria la siguiente relacion:
      		if(!isNaN(digitoControl)) { 
      			if(digitoControl != digitoControlCalculado) {
      				return 'NIF err\u00f3neo, formato no v\u00e1lido';
      			}
      		} else {
				if(letrasControlOtrosNif[digitoControlCalculado] != digitoControl) {
					return 'NIF err\u00f3neo, la letra del NIF no se corresponde';
	      		} else {
	      			return true;
	      		}
      		}
      	} else {
      		return 'NIF err\u00f3neo, formato no v\u00e1lido';
      	}
    };
});