document.querySelector('#btnIngresar').addEventListener('click',iniciarSesion);

function iniciarSesion(){
    var sCorreo;
    var sContrasena;
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sCorreo,sContrasena);
    
    if(bAcceso == true){
        ingresar();
    }else{
        limpiar();
        window.alert('Usuario o contrasena errado. Intente nuevamente');        
    }
    
}

function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo')
    switch(rol){
        case '1':
            window.location.href = "admin.html";
        break;
        case '2':
            window.location.href = "usuario.html";
        break;
    }
}

function limpiar(){
    let limpiarCorreo = document.getElementById('txtCorreo');
    let limpiarContrasena = document.getElementById('txtContrasena');

    limpiarContrasena.value = "";
    limpiarCorreo.value = "";
}