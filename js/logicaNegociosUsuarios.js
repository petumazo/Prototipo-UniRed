/* Roles:
    1: admin,
    2: propietario

*/

//Esta funcion almacena los datos del usuario en el local storage, por ahora se hace asi, en un futuro será necesario el uso de base de datos
function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios = 
        [
            //id, nombre, apellido, correo                   contraseña, rol
            ['1','David','Alvarez','davidalvarezmazzo@gmail.com','petujesusmazo','2'],
            ['2','Yara','Gonzalez','yaragonzalezcastilla@gmail.com','1397','2']
        ]
    }
    return listaUsuarios;
}

function validarCredenciales(pCorreo,pContrasena){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;
    
    for(let i=0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasena == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][5]);
            
        }
    }
    return bAcceso;
}