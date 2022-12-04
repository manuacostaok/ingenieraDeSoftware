
//-- Dibuja una planta
function dibujarElemento(element, imagefullPath) {
    let imagen = "";

    if (!imagefullPath) {
        imagen = "./recursos/imgs/plantas/" + element.imagen;
    } else {
        imagen = cargarImg($("#blah"));
    }


    $("#product_list").append(
        `<div class="card">
            <div class="card-header">
                <div>  
                    &nbsp &nbsp <div class="product-name">${element.nombre}</div>
                </div>    
            </div>
            <div class="card-body">
                <div class="product-card">
                    <div class="product-info">
                        <div>
                            <div class="product-description">${element.descripcion}</div>
                        </div>
                    </div>
                    <div class="product-price">
                        <div id="img-container" class="product-card-image" >
                            <img id="img-result" src="${imagen}" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
}
//Dibuja un Sucursal
function dibujarSucursal(element, index) {
    $("#listaSucursales").append(`
        <div class="card mb-3" onclick="centrar(this)" style="max-width: 540px;" id="index-${index}" lat="${element.Direccion.coordenada.lat}" lng="${element.Direccion.coordenada.lng}">
            <div class="row g-0">
            <div class="col-md-4">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text pie"><small class="text-muted">Horarios: ${element.Contacto.dias_horarios}</small></p>
                <p class="card-text pie"><small class="text-muted">Contacto: ${element.Direccion.calle_altura} | Tel.: ${element.Contacto.telefono}</small></p>
            </div>
            </div>
            </div>
        </div>
    `);
}



function esVacio(dato) {
    if (dato) {
        return true;
    }
    return false;
}

function ocultarElementoDOM(element) {
    element.css("display", "none");
}

function mostrarElementoDOM(element) {
    element.css("display", "block");
}

function mostrarElementoDOM(element, mensaje) {
    $(element).children().text(mensaje);
    element.css("display", "block");
}

function cargarImg(el) {
    let base64 = el.attr('src');
    if (base64 == "#")
        base64 = "./resources/images/thumbs/no-image.png";
    return base64;
}



