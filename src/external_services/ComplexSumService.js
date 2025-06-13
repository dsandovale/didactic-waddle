const ISummingService = require('../interfaces/ISummingService');
const _ = require('lodash'); // Simulando una librería externa para la suma (ej. _.sum)

/**
 * @class ComplexSumService
 * @augments ISummingService
 * @description Implementación de ISummingService utilizando una librería externa (lodash).
 */
class ComplexSumService extends ISummingService {
  /**
   * Suma un array de números utilizando la función `_.sum` de Lodash.
   * @param {number[]} numbers - El array de números.
   * @returns {number} La suma.
   */
  sum(numbers) {
    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
      throw new Error('Input must be an array of numbers.');
    }
    return _.sum(numbers); // Usando la función de suma de Lodash
  }
}

module.exports = ComplexSumService;