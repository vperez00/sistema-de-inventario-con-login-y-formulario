let IniSesion = document.querySelector('inicioSesion');
let contFormulario = document.querySelectorAll('contieneFormulario');
document.getElementById('');
let usuario,contraseña,nombreCompleto,apellido,Email;

function inicialSesion(){
    if(usuario == usuario && contraseña == contraseña){
       window.location.href =  "index.html";
    }
    else{
      alert('No coinside usuario o contraseña')
    }
}
     
    
function olvideContraseña(){
localStorage.getItem(usuario, contraseña);

}
    
function registrarse(){
    if( nombreCompleto == nombreCompleto && apellido == apellido && Email == Email 
        && contraseña == contraseña){
        window.location.href ="index.html";
    }
    else{
        alert('No as Completado el Formulario')
    }
}