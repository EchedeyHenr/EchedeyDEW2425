// Coger el formulario
let form = document.getElementById("form-place");
// Prevenir el comportamiento por defecto
function sendForm(e) {
    e.preventDefault();
}
/** 
 * <form action="" method="get" onsubmit="sendForm(event)">
 *  <label for="place">Place</label>
 *  <input type="text" name="place" id="place">
 * 
 *  <input type="button" value="Enviar">
 * </form>
*/
// Obtener el valor del campo de entrada
let place = document.getElementById("place").value;

// Construir la URL de la API
const url = document.getElementById("link").href;

// Función fetch
/** Una api se utiliza para hacer solicitudes http y trabajar con promesas */
fetch(url) // Enviamos una solicitud para la url específica
.then(response => { // Fetch devuelve una promesa se resuelve con response
    if(!response.ok){
        throw new Error("Error en la red");
    }
    return response.json();
}).then(data => { // Si se consiguieron los datos, los muestra
    //console.log(data);
    
}).catch(error => { // Si no se consiguieron se captura el error y se muestra
    console.error("Hubo un problema con la solicitud", error);
})