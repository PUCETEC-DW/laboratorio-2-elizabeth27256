# Buscador de Paise 

El proyecto muestra información de países usando una API pública.  
Que permite buscar países por su nombre y ver su bandera, región y población.

Tecnologías usadas
- HTML
- CSS
- JavaScript
- Fetch API

# Funcionamiento
- Al cargar la página, se realiza una petición `fetch()` a la API de países.
- Se almacenan los datos en una variable global.
- Se renderizan los países mostrando:
  - Nombre oficial
  - Bandera
  - Región
  - Población
- Un campo de búsqueda permite filtrar países por nombre.
- Los resultados se actualizan automáticamente mientras el usuario escribe.


# Recomendaciones
- Puedes ampliar el filtro por continente o población.
- Explora otras APIs para nuevos proyectos.
- Podemos implementar un fetch de manejo de errores como:
try {
  const respuesta = await fetch(url);
  if (!respuesta.ok) throw new Error("Error en la respuesta");
} catch (error) {
  mostrarError("No se pudo cargar la información");
}
Es para que se mande mensajes amigables al usuario
Agregar mas filtros interactivos, como por región, continente o rango de población.