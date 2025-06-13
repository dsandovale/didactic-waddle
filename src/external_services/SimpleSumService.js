const ISummingService = require('../interfaces/ISummingService');

/**
 * @class SimpleSumService
 * @augments ISummingService
 * @description Implementación simple de ISummingService usando un bucle.
 */
class SimpleSumService extends ISummingService {
  /**
   * Suma un array de números utilizando un bucle básico.
   * @param {number[]} numbers - El array de números.
   * @returns {number} La suma.
   */
  sum(numbers) {
    if (!Array.isArray(numbers) || numbers.some(isNaN)) {
      throw new Error('Input must be an array of numbers.');
    }
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
}

module.exports = SimpleSumService;