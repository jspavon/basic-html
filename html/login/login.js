function Login() {
    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

    sessionStorage.removeItem('user')
    sessionStorage.removeItem('pass');

    var msnArray = [];

    if(user.value == undefined || user.value == null || user.value == ""){
        var msn = "Debe ingresar un usuario";
        msnArray.push(msn);
    }
    
    if(pass.value == undefined || pass.value == null || pass.value == ""){
        var msn = "Debe ingresar un password";
        msnArray.push(msn);
    }

    if (msnArray.length > 0) {

        var htmlError = [];
        for (let index = 0; index < msnArray.length; index++) {
            const divElement = `<div  class='alert alert-danger'>${msnArray[index]}</div>`;      
            htmlError.push(divElement);    
        }
        var divError = document.getElementById("alertError");
        divError.innerHTML = htmlError;
        return;
    } else {
        sessionStorage.setItem('user', user.value);
        sessionStorage.setItem('pass', pass.value);
        window.location.href = "../home/index.html"        
    }

    
}


