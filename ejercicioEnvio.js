function calcularCostoEnvio(montoCompra, esMiembroVIP, zonaEnvio){
    if (montoCompra <= 0) return "Monto de compra no valida";
    if (zonaEnvio === "internacional") return "Costo de envio internacional es: $25";
    if (esMiembroVIP === true) return "Envio gratis por ser miembro VIP";
    if (montoCompra >= 100) return "Envio gratis por compra mayor a $100"
    return "Costo de envío estándar: $10";
}
console.log(calcularCostoEnvio(2, false, "local"));