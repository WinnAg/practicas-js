function evaluarNota(nota){
if (nota < 0 || nota > 100) return "Nota fuera de rango";
if (nota >= 90) return "Excelente";
if (nota >= 70) return "Aprobado";
return "Reprobado";
}
console.log (evaluarNota(100));