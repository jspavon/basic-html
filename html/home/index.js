window.onload = function() {
    var infoUser = sessionStorage.getItem('user');

    if(infoUser == undefined ){
        window.location.href = "../login/login.html";  
        return;
    }

    document.getElementById("infoUser").innerHTML = infoUser;

}

    //1 = clientes
    //2 = parqueadero
function redireccionar(moduloId) {
    switch (moduloId) {
        case 1:
            //redireccion clientes
            window.location.href = "../clients/clients.html";        
            break;
        case 2:
            //redireccion parqueadero
            window.location.href = "../parkingLot/parkingLot.html";        
            break;            
    }
}


function logout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('pass');
    sessionStorage.removeItem('proceso');
    sessionStorage.removeItem('posicion');
    sessionStorage.removeItem('arrayUsuario');

    window.location.href = "../login/login.html";  
}