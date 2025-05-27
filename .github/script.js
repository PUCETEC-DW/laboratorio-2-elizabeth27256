const inputBuscar = document.getElementById('buscar');
const divResultado = document.getElementById('resultado');

let datosPaises = [];

fetch('https://restcountries.com/v3.1/all')
    .then(respuesta => respuesta.json())
    .then(data => {
        datosPaises = data;
        mostrarPaises(data);
    })
    .catch(error => {
        divResultado.innerHTML = '<p>Error al cargar los países</p>';
        console.error(error);
    });
