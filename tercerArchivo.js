let pesoMaleta = 24;

if (pesoMaleta <= 10) {
    console.log("Equipaje de mano gratis");
} else if (pesoMaleta <= 23){
    console.log("Equipaje mediano permitido en bodega");
} else {
    console.log("exceso de peso, requiere pago adicional");
}