/**
 * Value Object representing a currency code.
 */
export class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'JPY'];
    #code;
    /**
     * Creates a new Currency instance.
     * @param {string} code - The currency code (e.g., 'USD', 'EUR').
     * @throws {ValidationError} If the currency code is invalid.
     */
    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ValidationError(`Invalid currency code: ${code}, must be one of ${Currency.#VALID_CODES.join(', ')}`);
        }
        this.#code = code;
    }

    /**
     * Gets the currency code.
     * @returns {string} the currency code.
     */
    get code() {
        return this.#code;
    }
    /**
     * Checks if this Currency instance is equal to another Currency instance.
     * @param other
     * @returns {boolean}
     */
    equals(other) {
        return other instanceof Currency && this.#code === other.#code;
    }

    toString() {
        return this.#code;
    }
}