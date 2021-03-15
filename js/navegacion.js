document.querySelector('#facturacion').addEventListener('click',facturacion);
document.querySelector('#asamble').addEventListener('click',asamble);
document.querySelector('#zonas-comunes').addEventListener('click',zonasComunes);
document.querySelector('#perfil-usuario').addEventListener('click',perfilUsuario);


function facturacion(){
    window.location.href = "facturacion.html";
}

function asamble(){
    window.location.href = "asamble.html";
}

function zonasComunes(){
    window.location.href = "zonaComunes.html";
}

function perfilUsuario(){
    window.location.href = "usuario.html";
}