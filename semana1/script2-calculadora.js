// ========================================
// SCRIPT 2: CALCULADORA SIMPLE
// Geraldin - QA Automation Journey
// ========================================

// Funciones de la calculadora
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir por cero";
  }
  return a / b;
}

// ========================================
// PROBANDO LA CALCULADORA
// ========================================

let num1 = 20;
let num2 = 5;

console.log("=== CALCULADORA DE GERALDIN ===");
console.log("");
console.log("Números: " + num1 + " y " + num2);
console.log("----------------------------");
console.log("Suma: " + num1 + " + " + num2 + " = " + sumar(num1, num2));
console.log("Resta: " + num1 + " - " + num2 + " = " + restar(num1, num2));
console.log("Multiplicación: " + num1 + " x " + num2 + " = " + multiplicar(num1, num2));
console.log("División: " + num1 + " / " + num2 + " = " + dividir(num1, num2));
console.log("");

// Probando con otros números
let num3 = 100;
let num4 = 0;

console.log("Números: " + num3 + " y " + num4);
console.log("----------------------------");
console.log("División por cero: " + num3 + " / " + num4 + " = " + dividir(num3, num4));
console.log("");

// Tu sueldo actual vs tu sueldo futuro
let sueldoActual = 18000;
let sueldoFuturo = 40000;
let diferencia = restar(sueldoFuturo, sueldoActual);
let vecesmas = dividir(sueldoFuturo, sueldoActual);

console.log("=== MOTIVACIÓN DEL DÍA ===");
console.log("Sueldo actual: " + sueldoActual + "€");
console.log("Sueldo futuro: " + sueldoFuturo + "€");
console.log("Diferencia: +" + diferencia + "€ al año");
console.log("Eso es " + vecesmas.toFixed(1) + "x más que ahora");
console.log("");
console.log("¡Sigue adelante Geraldin! 💪");