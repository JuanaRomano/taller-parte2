function validaPassword(){
    var newPassword=document.getElementById('password').value;
    var minNumero= 0;
    var maxNumero= 20;
    var regularExpresion= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,20}$/;
    
    alert("quieres enviar sin caracteres especiales?");

    if (newPassword.length< minNumero || newPassword.length> maxNumero){
        
        return false;
    }
    if (!regularExpresion.test(newPassword)){
        alert ('el password debe tener minimo 10 caracteres entre letras, numeros y simbolos y maximo 20');
        console.log("minimo 10 maximo 20")
        return false
    }
    
}


/* 


$(function () {
    var mayus = new RegExp('(?=.*[A-Z].*[A-Z].*[A-Z])');
    var special = new RegExp('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-ZO-9!@#$%^&*]{10,20}$/');
    var numbers = new RegExp('/^(?=.*[0-9])');
    var lower = new RegExp('/^(?=.*[a-z])');
    var len = new RegExp('/^(?=.{8,})');

    var regExp = [mayus, special, numbers, lower, len];
    var elementos = [$('#mayus'), $('#special'), $('#numbers'), $('#lower'), $('#len')]

    $('#password').on('keyup', function () {
        var pass = $('#password').val();
        var check = 0;

        for (var i = 0; i < 5; i++) {
            if (regExp[i].test(pass)) {
                elementos[i].hide();
                check++;
            }else{
                elementos[i].show();
            }
        }
        if(check>=0 && check<=2){
            $('#mensaje').text("muy insegura").css("color","red");
        }else if(check>=3 && check<=4){
            $('#mensaje').text("poco segura").css("color", "orange");
        }else if(check==5){
            $('#mensaje').text("muy segura").css("color", "green");
        }
    });

});
*******/
