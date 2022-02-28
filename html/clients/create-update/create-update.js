window.onload = function() {
    initForm();
    clearForm();
    cargarInfoEditar();
}

function crearUsuario() {  
    debugger;
    document.getElementById("msnError").innerHTML = "";
    let validate = validateInfo();
    if(!validate) return;

    //Id	Nombre	Apellido	Direccion	Telefono	Placa Vehiculo	Tipo Vehiculo	Acciones
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var direccion = document.getElementById("direccion");
    var telefono = document.getElementById("telefono");
    var placa = document.getElementById("placa");
    var tipoVehiculo = document.getElementById("tipoVehiculo");


    var infoUser = new Object();

    infoUser.nombre  = nombre.value;
    infoUser.apellido  = apellido.value;
    infoUser.direccion  = direccion.value;
    infoUser.telefono  = telefono.value;
    infoUser.placa  = placa.value;
    infoUser.tipoVehiculo  = tipoVehiculo.value;    
          
    let arrayUser = new Array();    
   

    let existData = JSON.parse(sessionStorage.getItem('arrayUsuario'));

    if(existData != undefined && existData.length > 0) {
        existData.push(infoUser);
        sessionStorage.removeItem('arrayUsuario');
        sessionStorage.setItem('arrayUsuario', JSON.stringify(existData));
    }else{
  
        arrayUser.push(infoUser);

        sessionStorage.setItem('arrayUsuario', JSON.stringify(arrayUser));
    }

    clearForm();
    window.location.href = "../clients.html";  
}

function editarUsuario() {
    let validate = validateInfo();
    if(!validate) return;

    let existData = JSON.parse(sessionStorage.getItem('arrayUsuario'));
    var posicion = sessionStorage.getItem('posicion');

    let infoUser = existData[posicion];

    infoUser.nombre  = nombre.value;
    infoUser.apellido  = apellido.value;
    infoUser.direccion  = direccion.value;
    infoUser.telefono  = telefono.value;
    infoUser.placa  = placa.value;
    infoUser.tipoVehiculo  = tipoVehiculo.value; 

    existData.splice(posicion, 1, infoUser);
    sessionStorage.setItem('arrayUsuario', JSON.stringify(existData));

    clearForm();
    window.location.href = "../clients.html";  
}

function cargarInfoEditar(){
    var proceso = sessionStorage.getItem('proceso');    
    if(proceso == 'editar'){
        document.getElementById('btnCrear').style.visibility = "hidden"; 
        document.getElementById('btnActualizar').style.visibility = "visible";     
        var posicion = sessionStorage.getItem('posicion');    
        
        let existData = JSON.parse(sessionStorage.getItem('arrayUsuario'));

        let infoUser = existData[posicion];

        document.getElementById("nombre").value = infoUser.nombre;
        document.getElementById("apellido").value = infoUser.apellido;
        document.getElementById("direccion").value = infoUser.direccion;
        document.getElementById("telefono").value = infoUser.telefono;
        document.getElementById("placa").value = infoUser.placa;
        document.getElementById("tipoVehiculo").value = infoUser.tipoVehiculo;
    }
}

function clearForm(){
    document.getElementById("nombre").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("direccion").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("placa").value = '';
    document.getElementById("tipoVehiculo").value = '';
}

function initForm(){
    document.getElementById("msnError").style.visibility = "hidden";
    document.getElementById('btnActualizar').style.visibility = "hidden"; 
    document.getElementById('btnCrear').style.visibility = "visible";
}

function validateInfo(){
    let result = true;

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let placa = document.getElementById("placa").value;
    let tipoVehiculo = document.getElementById("tipoVehiculo").value;

    if(nombre == undefined || nombre == "") {
        result =  false;
        viewErrorMessage('nombre');
    }
    if(apellido == undefined || apellido == "") {
        result =  false;
        viewErrorMessage('apellido');
    }
    if(direccion == undefined || direccion == "") {
        result =  false;
        viewErrorMessage('direccion');
    }
    if(telefono == undefined || telefono == "") {
        result =  false;
        viewErrorMessage('telefono');
    }
    if(placa == undefined || placa == "") {
        result =  false;
        viewErrorMessage('placa');
    }
    if(tipoVehiculo == undefined || tipoVehiculo == "") {
        result =  false;
        viewErrorMessage('tipoVehiculo');        
    }

    return result;
}

function viewErrorMessage(value){
    
    var tag = document.createElement("p");
    var text = `el campo ${value} no puede estar vacio.`
    tag.innerHTML = text;
    let element = document.getElementById("msnError");

    element.appendChild(tag);
    element.style.visibility = "visible";
}