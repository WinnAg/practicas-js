//AND &&
let edad = 16;
let tieneEntrada = true;

// Requisito: Tener 18 años o más Y tener entrada
if (edad >= 18 && tieneEntrada) {
  console.log("Puedes entrar al concierto.");
} else {
  console.log("No puedes entrar."); // Esto se ejecuta porque edad es 16 (falla una condición)
}



//OR || 
let esSocio = false;
let tieneCupon = true;

// Requisito: Ser socio O tener un cupón de descuento
if (esSocio || tieneCupon) {
  console.log("Obtienes descuento."); // Se ejecuta porque tieneCupon es true
} else {
  console.log("Pagas precio normal.");
}



//Ambas AND && y OR ||
let edadd = 15;
let vieneConAdulto = true;
let tienePaseVip = false;

// Entra si (es mayor de edad O viene con adulto) Y ADEMÁS tiene pase VIP
if ((edadd >= 18 || vieneConAdulto) && tienePaseVip) {
  console.log("Acceso a la zona VIP.");
} else {
  console.log("Sin acceso a zona VIP."); // Falla porque tienePaseVip es false
}