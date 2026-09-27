function calcularPrecioBoleto(edad, esEstudiante, diaSemana){
    if (edad <= 0) return "Edad no valida";
    if (edad < 5) return "Boleto gratis (infante)";
    if (edad >= 60) return "Precio con descuento adulto mayor: $5";
    if (diaSemana === "miercoles") return "Precio promocion miercoles: $5";
    if (esEstudiante === true) return "Precio estudiante: $7";
    return "Precio regular: $10";
}
console.log(calcularPrecioBoleto(25, false, "viernes"));