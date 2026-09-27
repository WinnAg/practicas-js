function evaluarAccessJuego(edad, tienePermisoPaterno){
if (edad <= 0) return "Edad no valida";
if (edad >= 18) return "Acceso total concedido";
if (edad >= 13 && edad <= 17 && tienePermisoPaterno) return "Acceso concedido con supervision";
return "Acceso denegado";
}
console.log(evaluarAccessJuego(15, true));