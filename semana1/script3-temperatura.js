1// ========================================
// SCRIPT 3: CONVERTIDOR DE TEMPERATURAS
// Geraldin - QA Automation Journey
// ========================================

// Función: Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Función: Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// ========================================
// PROBANDO EL CONVERTIDOR
// ========================================

console.log("=== CONVERTIDOR DE TEMPERATURAS ===");
console.log("");

// Temperaturas en Celsius para convertir
let temperaturas = [0, 20, 37, 100];

console.log("CELSIUS → FAHRENHEIT:");
console.log("----------------------");
for (let i = 0; i < temperaturas.length; i++) {
  let c = temperaturas[i];
  let f = celsiusAFahrenheit(c);
  console.log(c + "°C = " + f.toFixed(1) + "°F");
}

console.log("");
console.log("FAHRENHEIT → CELSIUS:");
console.log("----------------------");

// Temperaturas en Fahrenheit para convertir
let fahrenheits = [32, 68, 98.6, 212];

for (let i = 0; i < fahrenheits.length; i++) {
  let f = fahrenheits[i];
  let c = fahrenheitACelsius(f);
  console.log(f + "°F = " + c.toFixed(1) + "°C");
}

console.log("");
console.log("=== DATO CURIOSO ===");
console.log("37°C = " + celsiusAFahrenheit(37).toFixed(1) + "°F (temperatura corporal)");
console.log("100°C = " + celsiusAFahrenheit(100).toFixed(1) + "°F (agua hirviendo)");
console.log("");
console.log("✅ Script 3 completado - ¡Vas 3 de 5!");