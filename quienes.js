const formulario = document.getElementById("contactoForm");

const respuesta = document.getElementById("respuesta");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const asunto =
        document.getElementById("asunto").value.trim();

    const mensaje =
        document.getElementById("mensaje").value.trim();


    if (
        nombre === "" ||
        correo === "" ||
        asunto === "" ||
        mensaje === ""
    ) {

        respuesta.textContent =
            "⚠️ Por favor, completa todos los campos.";

        return;
    }


    respuesta.textContent =
        "✅ Gracias " + nombre +
        ", tu mensaje fue enviado correctamente.";


    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);


    formulario.reset();


    setTimeout(function() {

        respuesta.textContent = "";

    }, 4000);

});