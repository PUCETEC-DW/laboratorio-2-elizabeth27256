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
    
function mostrarPaises(paises) {
    divResultado.innerHTML = '';
    paises.forEach(pais => {
        const div = document.createElement('div');
        div.classList.add('pais');
        div.innerHTML = `
      <h3>${pais.name.official}</h3>
      <img src="${pais.flags.svg}" alt="Bandera de ${pais.name.common}">
      <p><strong>Región:</strong> ${pais.region}</p>
      <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>`;
        divResultado.appendChild(div);
    });
}