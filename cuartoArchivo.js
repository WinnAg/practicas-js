let edad = 1;
let mensaje = "";

if (edad < 2){
    mensaje = "Boleto de infante gratis.";
} else if (edad <= 12) {
    mensaje = "Descuento de niño aplicado (50% de descuento)";
} else if (edad <= 60) {
    mensaje = "Boleto tarifa regular";
} else {
    mensaje = "Descuento de adulto mayor aplicado (30% de descuento)";
}

console.log (mensaje);