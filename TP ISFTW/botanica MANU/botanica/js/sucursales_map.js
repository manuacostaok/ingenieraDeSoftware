
var sucursalesData = sucursales;


$(document).ready(function () {

    $('#buscador-sucursal').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            buscadorSucursales();
        }
    });

});

function buscadorSucursales() {
    limpiarBusquedaYMarcadores();
    let sucursal = $("#buscador-sucursal").val().toLowerCase();

    let resultadosBusqueda = sucursalesData.filter(item => filtrarPorNombre(item, sucursal));
    let coordenadas = [];
    resultadosBusqueda.forEach(function (element, index) {
        dibujarSucursal(element, index);
        let coord = [element.nombre, element.Direccion.coordenada.lat, element.Direccion.coordenada.lng];
        coordenadas.push(coord);
    }, this)

    mostrarEncabezadoSucursal(resultadosBusqueda.length, sucursal);
    cargarMultiplesCoordMapa(coordenadas, destacarSucursalSeleccionado);
    $("#mapid").show();
    $("#titleCardSucursal").show();
}

function filtrarPorNombre(elemento, nombre) {
    if (elemento.nombre.toLowerCase().includes(nombre)) {
        return true;
    }
    return false;
}

function mostrarEncabezadoSucursal(cantidadResultados, nombreProducto) {
    let mensaje = cantidadResultados + ' Sucursales encontrados para "' + nombreProducto + '"';
    $("#sucursal-titletle").html(mensaje);
    $("#results-taller").css("visibility", "visible");
}

function destacarSucursalSeleccionado(e) {
    let nombreMarker = e.target._popup._content;
    let i = nombreMarker.substring(0, 1);

    let list = $("#listaSucursales")[0].children;
    
    Array.from(list).forEach((element,index) => {
        if (element.id == "index-" + i) {
            
            $(element).addClass("destacarSucursal")
            centrarEnLista(element);
            centrarVista(e.target);
		    
        }else {
            $(element).removeClass("destacarSucursal")
        }
        
	})
    
}


function centrarEnLista(el){
    let list = $("#listaSucursales")[0].children;
    let offset = 0;
    Array.from(list).forEach(element => {
        if (element.id == el.id) {
            $("#ll").scrollTop(offset);
        } else {
            let h = $(element).height();
            offset+=h;
        }
    })
}

function limpiarBusquedaYMarcadores(){
    $("#listaSucursales").empty();
    removeMarkers();
}

function destacarSucursal(el){
    let list = $("#listaSucursales")[0].children;
    Array.from(list).forEach(element => {
        $(element).removeClass("destacarSucursal") //limpia bordes amarillos no seleccionados
        if (element.id == el.id) {
            $(element).addClass("destacarSucursal")
        } else {
            $(element).removeClass("destacarSucusrsal")
        }
        
    })
}

function centrar(element) {
    let id = element.id; //index-0
    let num = id.substring(id.length-1, id.length);
    let idLeaf = marcadoresID[num];
    let listadoMarkers = getMarkerById(idLeaf.idLeaf);
    centrarVista(listadoMarkers);
    destacarSucursal(element);
    centrarEnLista(element);
}

function filtrarPorNombreYFamilia(elemento, nombre, familia) {
    if ((elemento.familia == familia || familia == "all")
        && elemento.nombre.toLowerCase().includes(nombre)) {
        return true;
    }
    return false;
}



