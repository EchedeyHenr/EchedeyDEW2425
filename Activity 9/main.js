document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form"); // Obtiene el primer formulario
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
    const firstName = document.getElementById("validationDefault01").value;
    const lastName = document.getElementById("validationDefault02").value;
    const city = document.getElementById("validationDefault03").value;
    const state = document.getElementById("validationDefault04").value;
    const zip = document.getElementById("validationDefault05").value;

    let valid = true;
    let error = "";

    let pattern = !/^[A-Z]/;
    if(pattern.test(firstName)){
        valid = false;
        error = "Pon la maldita mayúscula";
    }
    
)}
