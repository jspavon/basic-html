window.onload = function() {
    initForm();
}

function initForm(){
    let arrayUsuarios = [];
    arrayUsuarios  = JSON.parse( sessionStorage.getItem('arrayUsuario'));  
    
    var inicioFila = "<tr>";
    var finFila = "</tr>";

    for (let index = 0; index < arrayUsuarios.length; index++) {

        let id =  `<td>${index + 1}</td>`;
        let nombre = `<td>${arrayUsuarios[index].nombre}</td>`;
        let apellido = `<td>${arrayUsuarios[index].apellido}</td>`
        let direccion = `<td>${arrayUsuarios[index].direccion}</td>`
        let telefono = `<td>${arrayUsuarios[index].telefono}</td>`
        let placa = `<td>${arrayUsuarios[index].placa}</td>`
        let tipoVehiculo = `<td>${arrayUsuarios[index].tipoVehiculo}</td>`

        let botones = `<td><div><input type="button" class="btn btn-primary" value="Editar" onclick='edit(${index})'/>
                                    <input type="button" class="btn btn-danger" onclick='deleteItem(${index})' value="Eliminar"/></div></td>`

        let fila = `${inicioFila}${id}${nombre}${apellido}${direccion}${telefono}${placa}${tipoVehiculo}${finFila}${botones}`;

        var btn = document.createElement("TR");
        btn.innerHTML=fila;
        document.getElementById("bodyTable").appendChild(btn);
       
    }
}

function create() {
    sessionStorage.setItem('proceso', 'crear');
    window.location.href = "../clients/create-update/create-update.html"
}

function edit(posicion) {
    console.log(posicion);
    sessionStorage.setItem('proceso', 'editar');
    sessionStorage.setItem('posicion', posicion);
    window.location.href = "../clients/create-update/create-update.html"
}

function deleteItem(posicion){
    let existData = JSON.parse(sessionStorage.getItem('arrayUsuario'));
    existData.splice(posicion, 1);
    sessionStorage.setItem('arrayUsuario', JSON.stringify(existData));
    location.reload();
}