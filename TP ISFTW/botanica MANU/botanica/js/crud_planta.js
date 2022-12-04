
const formulario = document.querySelector('#formulario');




$(document).ready(function () {
    habilitarBotonCarga();
});


function registroPlanta(){
    var form = "formulario";
    var letters = /^[A-Za-z]+$/;
    let nombre = document.getElementById("nombre").value;
    let nombre_cientifico = document.getElementById("nombre_cientifico").value;
    let temperatura = document.getElementById("temperatura").value;
    let suelo = document.getElementById("suelo").value;
    let riego = document.getElementById("riego").value;
    let color = document.getElementById("color").value;
    let ClasePlanta=document.getElementById("selectorTipo");
    let FamiliaPlanta=document.getElementById("familia");
  
    // Check si el nombre es válido
    if(!letters.test(nombre)){
        alert("El nombre solo puede tener letras");
            return false;
        }   

    // Check si el nombre_cientifico
    if(!letters.test(nombre_cientifico) || (nombre_cientifico.length<3 || nombre_cientifico.length>15)){
        alert("El apellido solo puede tener letras, tiene que ser mayor que 3 y menor que 15 caracteres.");
            return false;
        }

    // Check si temperatura es válido
    if(!letters.test(temperatura)){
        //if(temperatura.length<1){
        alert("temperatura solo puede tener numeros.");
            return false;
        }

    // Check si el suelo es válido

    if(!letters.test(suelo) || (suelo.length<3 || suelo.length>15)){
        alert("El apellido solo puede tener letras, tiene que ser mayor que 3 y menor que 15 caracteres.");
            return false;
            }


    //check color valido
    if(letters.test(color)){
        alert("El color solo puede tener letras, tiene que ser mayor que 3 y menor que 15 caracteres.");
            return false;
    }

    //check riego valido
    if(!letters.test(riego) || (riego.length<3 || riego.length>15)){
        alert("El riego solo puede tener letras, tiene que ser mayor que 3 y menor que 15 caracteres.");
            return false;
        }

    //check fruto valido
    if (!document.getElementById("FRUTOSI").checked || !document.getElementById("FRUTONO").checked){
        alert("Debe registrar el fruto de la planta.");
            return false;
        }

    //CHECK FAMILIA
    if (FamiliaPlanta.value ==0){
        alert("error al cargar la familia");
        return false;
        }
    
           
    //CHECK CLASE
    if (ClasePlanta.value ==0 || ClasePlanta.value==""){
        alert("error al cargar la clase");
        return false;
        }

    

    alert("Se ha registrado planta de manera exitosa");
    resetForm(form);
    return true;
}

function RegistrarFamilia(){
    var letters2 = /^[A-Za-z]+$/;
    var formularioNuevaFamilia = "formularioNuevaFamilia";
    let nombrefamilia = document.getElementById("nombreFamilia").value;
    let colorfamilia = document.getElementById("color2").value;
    let ClasePlantaFamilia=document.getElementById("ClaseFamilia");

    if(!letters2.test(nombrefamilia)||nombrefamilia==""){
        alert("El nombre de la familia solo puede tener letras y no estar vacio");
            return false;
        }
    
    
    if(!letters2.test(colorfamilia)||colorfamilia==""){
            alert("El color solo puede tener letras y no estar vacio");
                return false;
        }
    
    if (ClasePlantaFamilia.value ==0){
            alert("error al cargar la clase");
            return false;
            }
    alert("Se ha registrado familia de manera exitosa");
    resetForm(formularioNuevaFamilia);
    return true;
}

function resetForm(form){
    document.getElementById(form).reset();
    return;
    
    }




function deshabilitarBotonCarga() {
    $("#boton").prop("disabled", true);
}

function habilitarBotonCarga() {
    $("#boton").prop("disabled", false);
}
