function evaluarEquipaje(peso) {
    if (peso <= 0) return "Peso invalido";
    if (peso <= 10) return "Equipaje de mano gratis";
    if (peso <= 23) return "Maleta estandar en bodega";
    return "Exceso de equipaje";
} 
 console.log (evaluarEquipaje(24));