// ========================================
// OBTENER DATOS DEL PLAN
// ========================================

const plan =
    localStorage.getItem("plan");

const precio =
    localStorage.getItem("precio");


// ========================================
// MOSTRAR PLAN
// ========================================

const elementoPlan =
    document.getElementById("plan");

const elementoPrecio =
    document.getElementById("precio");


if (plan) {

    elementoPlan.textContent = plan;

} else {

    elementoPlan.textContent =
        "Ningún plan seleccionado";

}


if (precio) {

    elementoPrecio.textContent = precio;

} else {

    elementoPrecio.textContent =
        "0.00";

}


// ========================================
// CONFIRMAR PAGO
// ========================================

function confirmarPago() {

    const metodoSeleccionado =
        document.querySelector(
            'input[name="metodo"]:checked'
        );


    const nombre =
        document.getElementById("nombre")
            .value
            .trim();


    const correo =
        document.getElementById("correo")
            .value
            .trim();


    const mensaje =
        document.getElementById("mensaje");


    // MÉTODO DE PAGO

    if (!metodoSeleccionado) {

        mensaje.innerHTML =
            "⚠️ Selecciona un método de pago.";

        mensaje.classList.add("mostrar");

        return;
    }


    // NOMBRE

    if (nombre === "") {

        mensaje.innerHTML =
            "⚠️ Escribe tu nombre completo.";

        mensaje.classList.add("mostrar");

        return;
    }


    // CORREO

    if (correo === "") {

        mensaje.innerHTML =
            "⚠️ Escribe tu correo electrónico.";

        mensaje.classList.add("mostrar");

        return;
    }


    // MÉTODO SELECCIONADO

    const metodo =
        metodoSeleccionado.value;


    // CONFIRMACIÓN

    mensaje.innerHTML = `
        ✅ <strong>Pago confirmado</strong>
        <br><br>
        Cliente: ${nombre}
        <br>
        Plan: ${plan}
        <br>
        Total: S/ ${precio}
        <br>
        Método de pago: ${metodo}
        <br><br>
        Gracias por elegir GameForge.
    `;


    mensaje.classList.add("mostrar");


    // CONSOLA

    console.log("Cliente:", nombre);
    console.log("Correo:", correo);
    console.log("Plan:", plan);
    console.log("Precio:", precio);
    console.log("Método:", metodo);

}