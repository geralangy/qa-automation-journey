// ========================================
// SCRIPT 4: VALIDADOR DE EDAD
// Geraldin - QA Automation Journey
// ========================================

// Función principal: Validar edad
function validarEdad(edad) {
  if (edad < 0) {
    return "Error: La edad no puede ser negativa";
  } else if (edad < 12) {
    return "Niño/a";
  } else if (edad < 18) {
    return "Adolescente";
  } else if (edad < 65) {
    return "Adulto";
  } else {
    return "Adulto mayor";
  }
}

// Función: ¿Puede votar?
function puedeVotar(edad) {
  return edad >= 18;
}

// Función: ¿Puede conducir?
function puedeConducir(edad) {
  return edad >= 18;
}

// Función: ¿Puede comprar alcohol?
function puedeComprarAlcohol(edad) {
  return edad >= 18;
}

// ========================================
// PROBANDO EL VALIDADOR
// ========================================

console.log("=== VALIDADOR DE EDAD ===");
console.log("");

// Lista de edades para probar
let edades = [5, 12, 17, 18, 25, 65, 80, -3];

console.log("CLASIFICACIÓN POR EDAD:");
console.log("------------------------");

for (let i = 0; i < edades.length; i++) {
  let edad = edades[i];
  let categoria = validarEdad(edad);
  console.log("Edad " + edad + " → " + categoria);
}

console.log("");
console.log("PERMISOS POR EDAD:");
console.log("------------------------");

let edadesPermiso = [15, 17, 18, 21];

for (let i = 0; i < edadesPermiso.length; i++) {
  let edad = edadesPermiso[i];
  console.log("");
  console.log("Persona de " + edad + " años:");
  console.log("  ¿Puede votar? " + (puedeVotar(edad) ? "✅ Sí" : "❌ No"));//uso de ternarios (if acortados)
  console.log(
    "  ¿Puede conducir? " + (puedeConducir(edad) ? "✅ Sí" : "❌ No")
  );
  console.log(
    "  ¿Puede comprar alcohol? " +
      (puedeComprarAlcohol(edad) ? "✅ Sí" : "❌ No")
  );
}

console.log("");
console.log("=== DATO PERSONAL ===");
let tuEdad = 35; // Cambia esto por tu edad real si quieres
console.log("Tu edad: " + tuEdad);
console.log("Categoría: " + validarEdad(tuEdad));
console.log("En 10 años serás: " + validarEdad(tuEdad + 10));
console.log("");
console.log("✅ Script 4 completado - ¡Vas 4 de 5!");   
puedeVotar(edad)
// //? VaAVotarNulo()
// ? "SI"
//     : VaAVotarAbelardo()
//     ? "SI"
//     : PorVicky()
//     ? "SI"
//     : "NO"
//   : "NO";//
