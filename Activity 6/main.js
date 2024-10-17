/* $(document).ready(function(){ // Esta linea ejecuta una función cuando el DOM esté completamente cargado
 $.ajax({ // Permite cargar datos de forma asíncrona, es un método (haciendo petición JQuery)
    url: 'employees.json', // Donde están los datos
    method: 'GET', // Se usa para solicitar datos de un servidor
    dataType: 'json', // Especificamos el tipo de dato
    success: function (data) { // Se ejecuta si la solicitud ajax se realiza con éxito , permitiendo los datos que hemos pedido.
      // Inicializar una variable que contenga una cadena HTML que representa la estructura de la tabla
      let table = '<table class=table><thead><tr><th>ID</th><th>Name</th><th>Position</th></tr></thead></table>';
      // Utilizar la funcion $.each() de JQuery
      $.each(data, function (index, employee) {
        table += `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${employee.department}</td></tr>`;
      });
      table += '</tbody></table>';
      $('#table-container').html(table);
    },
    error: function () {
      $('#table-container').html(`<p>Error loading data.</p>`);
    }
  });
}); */

fetch('employees.json').then(
  function (request) { // Esto es la petición al "servidor"
    return request.json(); // Devuelve un promise con los datos en formato json
  }
).then(
  function (json) {
    console.log('Los datos:', json); // Aquí es donde recibimos los datos
    // Aquí se llama a la función crearTabla
    create(json);
  }
).catch(
  function (error) {
    console.error(error);
  }
)

// Ahora creamos la función que pinta la tabla

function create(datos){
  let table = document.createElement("table");
  
  for (let i = 0; i < datos.length; i++) {
      let row = document.createElement("tr");
      row.innerHTML = `<td>${datos[i].id}</td><td>${datos[i].name}</td><td>${datos[i].department}</td>`;
      table.appendChild(row);
  }
  document.body.appendChild(table);
  }

/* function createTable(datos) {
  e.preventDefault();

  const inputRow = document.getElementById("inputRow").value;
  const inputColumn = document.getElementById("inputColumn").value;

  let div = document.getElementById("table-container");
  let table = document.createElement("table");

  div.appendChild(table);

  for (let i = 0; i < inputRow; i++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    let innerHTML = '';
    for (let j = 0; j< inputColumn; j++) {
      innerHTML += "<td>" + json[i].id+ "</td><td>" + json[i].name + "</td><td>" + json[i].department + "</td>" 
    }
    row.innerHTML = innerHTML;

  }
} */


console.log('Se sigue ejecutando el documento');

