var employees = [
    { "id": 1, "name": "MIRIAM CASTIÑEIRA BREA", "department": "IT" },
    { "id": 2, "name": "GONZALO MULET FIGUERAS", "department": "IT" },
    { "id": 3, "name": "FRANCISCO JOSE GRAÑA BARBERA", "department": "IT" },
    { "id": 4, "name": "IRENE POMBO JORDA", "department": "HR" }
];

//let table = document.createElement("table");
function create(employees){
let table = document.createElement("table");

for (let i = 0; i < employees.length; i++) {
    let row = document.createElement("tr");
    row.innerHTML = `<td>${employees[i].id}</td><td>${employees[i].name}</td>`;
    table.appendChild(row);
}
document.body.appendChild(table);
}

/* employees.forEach((element) => 
    "id: " + element.id +
    " Name: " + element.name +
    " Departament: " + element.department); */