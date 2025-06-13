// Importamos las implementaciones concretas
const SimpleSumService = require('./external_services/SimpleSumService');
const ComplexSumService = require('./external_services/ComplexSumService');

/**
 * @class ApplicationSumCalculator
 * @description Una clase que utiliza cualquier servicio que implemente ISummingService.
 */
class ApplicationSumCalculator {
  /**
   * @param {ISummingService} summingService - Una instancia de un servicio que implementa ISummingService.
   */
  constructor(summingService) {
    if (!(summingService instanceof require('./interfaces/ISummingService'))) {
      throw new Error('Provided service must implement ISummingService.');
    }
    this.summingService = summingService;
  }

  /**
   * Calcula la suma de un array de valores utilizando el servicio inyectado.
   * @param {number[]} values - Array de números a sumar.
   * @returns {number} La suma total.
   */
  calculateTotal(values) {
    console.log(`Calculando suma con: ${this.summingService.constructor.name}`);
    return this.summingService.sum(values);
  }
}

// --- Punto de entrada de la aplicación ---
const numbersToSum = [10, 20, 30, 40, 50];

// Caso 1: Usar SimpleSumService
console.log('\n--- Usando SimpleSumService ---');
const simpleSumServiceInstance = new SimpleSumService();
const appCalculatorSimple = new ApplicationSumCalculator(simpleSumServiceInstance);
const totalSimple = appCalculatorSimple.calculateTotal(numbersToSum);
console.log(`Suma con SimpleSumService: ${totalSimple}`); // Salida: 150

// Caso 2: Usar ComplexSumService (con Lodash)
console.log('\n--- Usando ComplexSumService (con Lodash) ---');
const complexSumServiceInstance = new ComplexSumService();
const appCalculatorComplex = new ApplicationSumCalculator(complexSumServiceInstance);
const totalComplex = appCalculatorComplex.calculateTotal(numbersToSum);
console.log(`Suma con ComplexSumService: ${totalComplex}`); // Salida: 150

// Ejemplo de lo que PASARÍA si no se implementa la interfaz (descomentar para probar)
/*
console.log('\n--- Probando servicio incorrecto ---');
class BadService {
  // No implementa el método 'sum'
  add(a, b) { return a + b; }
}
const badServiceInstance = new BadService();
try {
  // Esto lanzará un error porque BadService no es instancia de ISummingService
  // o si lo fuera y no implementara 'sum', el error se daría al llamar a sum().
  const appCalculatorBad = new ApplicationSumCalculator(badServiceInstance);
  appCalculatorBad.calculateTotal(numbersToSum);
} catch (error) {
  console.error(`Error al usar un servicio incorrecto: ${error.message}`);
}
*/