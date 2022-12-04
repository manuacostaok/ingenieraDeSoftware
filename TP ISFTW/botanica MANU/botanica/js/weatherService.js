const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4){
                (xhttp.status === 200)
                ? resolve(JSON.parse(xhttp.responseText))
                : reject(new Error('Error ', url_api))
            }
        });
        xhttp.send();
    });
}

const API = 'https://weatherservices.herokuapp.com/api/';
const API_Clima = 'weather/';
const API_Locacion = 'locations/4852';

let contenedor = document.getElementById('container__clima');
let temperatura = document.getElementById('container__clima-temperatura');
let ubicacion = document.getElementById('container__clima-ubicacion')
let otrosParametros = document.getElementById('container__clima-parametros');
let descripcionDia1 = document.getElementById('parrafo-dia1');
let descripcionDia2 = document.getElementById('parrafo-dia2');
let descripcionDia3 = document.getElementById('parrafo-dia3');


fetchData(API + API_Clima)
    .then (data =>{
        temperatura.append(data.items[0].weather.tempDesc);
        otrosParametros.append('Humedad: ' + data.items[0].weather.humidity + '% ' + 'Viento: ' + data.items[0].weather.wind_speed + ' km/h, ' + data.items[0].weather.wing_deg);
        descripcionDia1.append('Mañana: '+ data.items[0].forecast.forecast[0].morning.description + 'Tarde: ' +  data.items[0].forecast.forecast[0].afternoon.description);
        descripcionDia2.append('Mañana: '+ data.items[0].forecast.forecast[1].morning.description + 'Tarde: ' +  data.items[0].forecast.forecast[1].afternoon.description);
        descripcionDia3.append('Mañana: '+ data.items[0].forecast.forecast[2].morning.description + 'Tarde: ' +  data.items[0].forecast.forecast[2].afternoon.description);
        return fetchData(API + API_Locacion);
    })
    .then (data => {
        ubicacion.append(data.location.name + ', ' + data.location.province);
    })