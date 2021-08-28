$(document).ready(function() {
    //ojo que muestra u oculta la password
    $("#ojo").click(function(){
        if($("#password")[0].type=="password"){
            $("#password")[0].type="text";
            $("#ojito").removeClass("fa-eye-slash");
            $("#ojito").addClass("fa-eye");
        }else{
            $("#password")[0].type="password";
            $("#ojito").removeClass("fa-eye");
            $("#ojito").addClass("fa-eye-slash");
        }
    });

    //si el formulario no es valido, no continua a taquillas
            $("#submit_admin").click(function(){//login administradores
                if ($(".form-control").hasClass("invalid")){
                    return;
                }else{
                    var email=$("#email").val();
                    var password=$("#password").val();
                $("#loading").show();
                setTimeout(function() {
                    $.post("../taquillas/php/Admin.php",{Email:email,Password:password},function(data){
                        $('#meow').html(data);
                    });
                }, 5000);
            };
        });
    });