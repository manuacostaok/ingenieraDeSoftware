var plantas = [
    {
        familia:"Rutaceae",
        nombre:"Limonero",
        nombreC:"Limonero",
        clase: "Arbol",
        color: "Amarillo",
        fruto: "Si",
        Cuidados: {
            tipodeSuelo:"Neutro",
            cicloderiego:"Cada 2 dias",
            temperaturaDeAmbiente:" 20"
        },
        imagen:"limon.jpg",
        descripcion:"limonero muy fachero"
    },
    {
        familia:"Alcachofaus",
        nombre:"Alchachofa",
        nombreC:"Alchofita",
        clase: "Arbol",
        color: "Rojo",
        fruto: "Si",
        Cuidados: {
            tipodeSuelo:"Neutro",
            cicloderiego:"Cada 2 dias",
            temperaturaDeAmbiente:" 20"
        },
        imagen:"alcachofa.jpg",
        descripcion:"limonero muy fachero"
    },
    {
        familia:"Lechuga",
        nombre:"Lechuga criolla",
        nombreC:"Lechugon",
        clase: "Planta",
        color: "Amarillo",
        fruto: "Si",
        Cuidados: {
            tipodeSuelo:"Neutro",
            cicloderiego:"Cada 2 dias",
            temperaturaDeAmbiente:" 20"
        },
        imagen:"lechuga.jpg",
        descripcion:"limonero muy fachero"
    },
    {
        familia:"Cannabis",
        nombre:"Cannabis sativacea",
        nombreC:"Marihuana",
        clase: "PLanta",
        color: "Verde",
        fruto: "Si",
        Cuidados: {
            tipodeSuelo:"Neutro",
            cicloderiego:"Cada 2 dias",
            temperaturaDeAmbiente:" 20"
        },
        imagen:"zoom2.jpg",
        descripcion:"Planta medicinal"
    }
]

var productosData = plantas;


$(document).ready(function () {
    $('#buscador').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            buscadorProductos();
        }
    });
	
	$('#mostrar').on( "click", function() {
			
			$('.Clima').show(); //muestro mediante clase
		});
	$('#ocultar').on( "click", function() {
			
			$('.Clima').hide(); //muestro mediante clase
		});
	
    
});

function buscadorProductos() {
    $("#product_list").empty();
    let nombre = $("#buscador").val().toLowerCase();
    let familiaa = $('#select-cat').val();

    let resultadosBusqueda = productosData.filter(item => filtrarPorNombreYFamilia(item, nombre, familiaa));
    
    resultadosBusqueda.forEach(function (element) {
        dibujarElemento(element, false);
    }, this)

    mostrarEncabezadoResultados(resultadosBusqueda.length, nombre);
}

function filtrarPorNombreYFamilia(elemento, nombre, familia) {
    if ((elemento.familia == familia || familia == "all")
        && elemento.nombre.toLowerCase().includes(nombre)) {
        return true;
    }

    return false;
}

function mostrarEncabezadoResultados(cantidadResultados, nombreProducto) {
    let mensaje = cantidadResultados + ' Plantas encontradas para "' + nombreProducto + '"';
    $("#product-title").html(mensaje);
    $("#results").css("visibility", "visible");
}

function verImagen(plantaImagen, plantaNombre, plantaDesc) {

    var myModal = new bootstrap.Modal($('#staticBackdrop'), {
        backdrop: 'static'
    })
    myModal.show();

    $("#imagenModal").attr("src", plantaImagen);
    $("#staticBackdropLabel")[0].innerHTML = plantaNombre;
    $("#modalDesc")[0].innerHTML = plantaDesc;
}
function limpiarSucursales(){
    $("#listaSucursales").empty();
    borrarMapa();
}

function limpiarProductos(){
    $("#product_list").empty();
}