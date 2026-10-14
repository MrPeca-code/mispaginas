const formulario = document.getElementById("miformulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    console.log("nombre:", nombre);

    const ed = document.getElementById("edad").value;
    console.log("edad:", ed);

    const email = document.getElementById("correo").value;
    console.log("email:",email);

    const carrera = document.getElementById("carrera").value;
    console.log("carrera:", carrera);

});

    
    