let estatusPasajero = "Gold";
let mensaje = "";

if (estatusPasajero === "VIP") {
    mensaje = "Acceso a la sala VIP y abordaje prioritario.";
} else if (estatusPasajero === "Gold") {
    mensaje = "Acceso a abordaje prioritario.";
} else {
    mensaje = "Abordaje regular prioritario";
}

console.log(mensaje);