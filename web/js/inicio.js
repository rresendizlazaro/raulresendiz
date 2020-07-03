$(document).ready(function(){
    var ingresar = $('#ingresar');
    var nombre = $('#inicionombre');
    var contraseña = $('#iniciocontraseña');
    ingresar.click(function(){
        if((nombre.val() == "Eli" && contraseña.val() == "2517") || (nombre.val() == "eli" && contraseña.val() == "2517")){
            window.open('web/index.html');
        }else{
            alert('Datos incorrectos');
        }
    });

});