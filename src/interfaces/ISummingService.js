/**
 * @interface ISummingService
 * @description Define el contrato para cualquier servicio capaz de sumar un array de números.
 */
class ISummingService {
    /**
     * Suma una cantidad N de números.
     * @param {number[]} numbers - Un array de números a sumar.
     * @returns {number} La suma total.
     * @throws {Error} Si el método no es implementado por una subclase.
     */
    sum(numbers) {
      throw new Error('Method "sum" must be implemented by a concrete service.');
    }
  }
  
  module.exports = ISummingService;