// ========================================
// VARIABLES
// ========================================

let planSeleccionado = "";
let precioSeleccionado = "";


// ========================================
// ELEMENTOS
// ========================================

const botonPago =
    document.getElementById("continuarPago");


// ========================================
// ASEGURAR QUE EL BOTÓN ESTÉ ACTIVADO
// ========================================

// Esto elimina cualquier disabled que
// haya quedado de una versión anterior.

if (botonPago) {

    botonPago.disabled = false;

    botonPago.removeAttribute("disabled");

}


// ========================================
// RECUPERAR DATOS GUARDADOS
// ========================================

const planGuardado =
    localStorage.getItem("plan");

const precioGuardado =
    localStorage.getItem("precio");


if (planGuardado && precioGuardado) {

    planSeleccionado = planGuardado;

    precioSeleccionado = precioGuardado;

}


// ========================================
// SELECCIONAR PLAN
// ========================================

function seleccionarPlan(nombre, precio) {

    planSeleccionado = nombre;

    precioSeleccionado = precio;


    // Guardar la selección

    localStorage.setItem(
        "plan",
        nombre
    );

    localStorage.setItem(
        "precio",
        precio
    );


    // Mostrar resultado

    const resultado =
        document.getElementById("resultado");


    resultado.innerHTML = `
        <h3>🎮 ${nombre}</h3>

        <p>
            Plan seleccionado correctamente.
        </p>

        <p>
            Precio total:
            <strong>S/ ${precio}</strong>
        </p>
    `;


    // Activar botón

    const boton =
        document.getElementById("continuarPago");


    if (boton) {

        boton.disabled = false;

        boton.removeAttribute("disabled");

    }


    // Llevar al resumen

    document.querySelector(".seleccion").scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


// ========================================
// IR A PAGO
// ========================================

function irAlPago() {

    const plan =
        localStorage.getItem("plan");

    const precio =
        localStorage.getItem("precio");


    // Verificar si hay selección

    if (!plan || !precio) {

        alert(
            "⚠️ Primero selecciona uno de los planes."
        );

        return;
    }


    // Ir a la página de pago

    window.location.href = "pago.html";

}