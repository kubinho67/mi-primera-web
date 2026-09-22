const formulario = document.getElementById("gameForm");

const listaProyectos = document.getElementById("listaProyectos");

const mensaje = document.getElementById("mensaje");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nombre = document.getElementById("nombre").value;

    const genero = document.getElementById("genero").value;

    const descripcion =
        document.getElementById("descripcionJuego").value;


    const nuevoProyecto = document.createElement("div");

    nuevoProyecto.classList.add("project");


    nuevoProyecto.innerHTML = `
        <span>🎮</span>

        <h3>${nombre}</h3>

        <p>${descripcion}</p>

        <small>Género: ${genero}</small>
    `;


    listaProyectos.appendChild(nuevoProyecto);


    mensaje.textContent =
        "✅ ¡Tu proyecto fue agregado correctamente!";


    formulario.reset();


    setTimeout(function() {

        mensaje.textContent = "";

    }, 3000);

});