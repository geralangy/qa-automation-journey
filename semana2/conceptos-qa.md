# 🧪 CONCEPTOS QA - SEMANA 2

## Qué es QM? Quality Management DEPENDENDEN QA y QC 
## Qué es QA? Quality Assurance- Se encarga de asegurar que el proceso se haga correcto, como dijimos q ibamos hacer, foco en proceso y la prevención
## Qué es Qc? Se encarga de controlar la calidad del producto que estamos produciendo
## Qué es Testing? es una forma de controlar la calidad del producto

## Bases del testing: 
- **ISTQB:** Sistema internacional para pruebas
- **ISO/IEC 250100:** Define 8 caracteristicas de calidad https://www.youtube.com/watch?v=hSxXuRxA9mo&list=PLWkxwEHYPPt3ztrDt7VD0EK7Ki85h6Wql
 la Norma ISO 29119.
 UAT son pruebas de aceptación: User acceptance test

## Plan de prueba: 
- **Plan:** descripción detallada de los objetivos de pruebas a alcanzar, los medios, y el cronograma para lograrlo. organizado para coordinar las actividades de pruebas.


## Tipos de Testing-categorias de pruebas

### 1. Unit Testing
- **Qué es:** Testear funciones individuales
- **Ejemplo:** Testear función sumar(2,3) = 5
- **Herramientas:** Jest, Mocha, Jasmine

### 2. Integration Testing
- **Qué es:** Testear que múltiples componentes o modulos  trabajen juntos
- **Ejemplo:** BD + API + Frontend funcionando juntos
- **Herramientas:** Postman, Rest Assured

### 3. End-to-End (E2E) Testing 
- **Qué es:** Testear todo el flujo desde usuario final
- **Ejemplo:** User logs in → compra producto → recibe confirmación
- **Herramientas:** Selenium, Cypress, **Playwright** ← NOSOTROS

### 4. Regression Testing
- **Qué es:** Verificar que cambios nuevos no rompan funcionalidad antigua
- **Ejemplo:** Cambio login, verifico que checkout siga funcionando
- **Herramientas:** Todas las anteriores

### Cómo Escribir Casos de Pruebas | Paso a paso
- **Caso de Prueba** conjunto de precondiciones, entradas y resultados esperados, desarrollados para impulsar la ejecución de un elemento de prueba y cumplir con los objetivos de la prueba, incluyendo implementacion correcta, identificación de errores y chequeo de calidad.


---

## Ciclo de Test (Test Lifecycle)
```
1. SETUP
   └─ Preparar ambiente (abrir navegador, datos de prueba)

2. EXECUTE
   └─ Ejecutar acciones (click, fill, navigate)

3. TEARDOWN
   └─ Limpiar (cerrar navegador, borrar datos)

4. ASSERT
   └─ Validar resultado (verificar que salió correcto)
```

### Ejemplo Real:
```
Test: "User can login successfully"

SETUP:
  - Abrir navegador
  - Ir a login page
  - Preparar credenciales

EXECUTE:
  - Llenar email
  - Llenar password
  - Click login button

ASSERT:
  - Verificar que aparece dashboard
  - Verificar que URL cambió

TEARDOWN:
  - Cerrar navegador
```

---

## Page Object Model (POM)

### ¿Qué es?
Patrón de diseño donde cada página web tiene su propia clase.

### Ventaja:
- Si cambia un selector, cambias en 1 lugar
- Código limpio y reutilizable
- Fácil de mantener

### Ejemplo:
```javascript
// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.submitBtn = page.locator('button[type="submit"]');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }
}

// test.js
const loginPage = new LoginPage(page);
await loginPage.login('user@example.com', 'password123');
```

---

## Selectores

### CSS Selector
```
ID:        #loginButton
Class:     .submit-btn
Tag:       button
Attribute: input[type="email"]
```

### XPath
```
//button[@id="login"]
//input[@placeholder="Email"]
//div[contains(text(), "Login")]
```

### En Playwright (Recomendado)
```javascript
page.locator('#loginButton')
page.locator('button:has-text("Login")')
page.locator('input[type="email"]')
```

---

## Assertions (Validaciones)

¿Cómo verificas que pasó lo correcto?
```javascript
expect(title).toBe('Dashboard');
expect(element).toBeVisible();
expect(count).toEqual(5);
expect(url).toContain('dashboard');
```

---

## Mis Anotaciones Personales

(Completa esto después de ver videos)

Lo que me pareció más importante:
- 
- 
- 

Lo que no entendí:
- 
- 

Preguntas para investigar:
- 
-