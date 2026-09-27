function calcularCostoEquipajeExtra(kilosExtra) {
    if (kilosExtra <= 0) return "Sin costo adicional";
    if (kilosExtra <= 5) return "Costo extra: $30";
    if (kilosExtra <= 10) return "Costo extra: $60";
    return "Requiere autorizacion especial";
}

console.log (calcularCostoEquipajeExtra(11));