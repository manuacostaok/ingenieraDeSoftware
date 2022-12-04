
const formulario = document.querySelector('#formularioReserva');




function registrarSolicitud(){
    var letters2 = /^[A-Za-z]+$/;
    var formularioReserva = "formularioReserva";
    let nombrefamilia = document.getElementById("select-cat").value;
    let sucursales = document.getElementById("select-cat2").value;
    let cantidad=document.getElementById("cantidad");

    if(letters2.test(cantidad)||cantidad==""){
        alert("Indique la cantidad");
            return false;
    }
    if (sucursales.value ==0){
            alert("error al cargar la sucursal");
            return false;
            }
    if (nombrefamilia.value ==0){
            alert("error al cargar la familia");
            return false;
            }
    alert("Su pedido se ha registrado de manera exitosa");
    resetForm(formularioReserva);
    return true;
}

function resetForm(form){
    document.getElementById(form).reset();
    return;
    
    }

