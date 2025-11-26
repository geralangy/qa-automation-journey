// ========================================
// SCRIPT 5: ARRAYS - OPERACIONES BÁSICAS
// Geraldin - QA Automation Journey
// ========================================

// ========================================
// PARTE 1: CREAR Y ACCEDER ARRAYS
// ========================================

let frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Mango"];
let numeros = [10, 25, 8, 42, 15, 33];

console.log("=== ARRAYS BÁSICOS ===");
console.log("");
console.log("Array de frutas:", frutas);
console.log("Array de números:", numeros);
console.log("");
console.log("Primera fruta:", frutas[0]);
console.log("Última fruta:", frutas[frutas.length - 1]);
console.log("Total frutas:", frutas.length);

// ========================================
// PARTE 2: SUMAR ELEMENTOS
// ========================================

function sumarArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }
  return suma;
}

function promedioArray(arr) {
  let suma = sumarArray(arr);
  return suma / arr.length;
}

console.log("");
console.log("=== OPERACIONES NUMÉRICAS ===");
console.log("Números:", numeros);
console.log("Suma total:", sumarArray(numeros));
console.log("Promedio:", promedioArray(numeros).toFixed(2));

// ========================================
// PARTE 3: ENCONTRAR MÁXIMO Y MÍNIMO
// ========================================

function encontrarMaximo(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function encontrarMinimo(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log("Número máximo:", encontrarMaximo(numeros));
console.log("Número mínimo:", encontrarMinimo(numeros));

// ========================================
// PARTE 4: AGREGAR Y QUITAR ELEMENTOS
// ========================================

console.log("");
console.log("=== MODIFICAR ARRAYS ===");
console.log("Frutas original:", frutas);

frutas.push("Uva");
console.log("Después de push('Uva'):", frutas);

frutas.pop();
console.log("Después de pop():", frutas);

frutas.unshift("Piña");
console.log("Después de unshift('Piña'):", frutas);

frutas.shift();
console.log("Después de shift():", frutas);

// ========================================
// PARTE 5: CASO PRÁCTICO - TU PROGRESO
// ========================================

console.log("");
console.log("=== TU PROGRESO QA AUTOMATION ===");

let scriptsCompletados = [
  "Hola Mundo",
  "Calculadora",
  "Temperaturas",
  "Validador Edad",
  "Arrays"
];

let horasEstudio = [1, 2, 1.5, 1, 1];

console.log("");
console.log("Scripts completados:");
for (let i = 0; i < scriptsCompletados.length; i++) {
  console.log("  " + (i + 1) + ". " + scriptsCompletados[i] + " ✅");
}

console.log("");
console.log("Total scripts:", scriptsCompletados.length);
console.log("Total horas:", sumarArray(horasEstudio) + " horas");
console.log("Promedio por script:", promedioArray(horasEstudio).toFixed(1) + " horas");

console.log("");
console.log("========================================");
console.log("🎉 ¡¡SEMANA 1 COMPLETADA!! 🎉");
console.log("========================================");
console.log("");
console.log("Geraldin, en 2 días aprendiste:");
console.log("  ✅ Variables");
console.log("  ✅ Funciones");
console.log("  ✅ Condicionales (if/else)");
console.log("  ✅ Loops (for)");
console.log("  ✅ Arrays");
console.log("  ✅ Git & GitHub");
console.log("");
console.log("¡Siguiente: Semana 2 - Conceptos QA + Node.js!");
console.log("");
console.log("De 18k€ a 40k€. Vas en camino. 💪");