import {Currency} from "./currency.js";
import {ValidationError} from "./errors.js";

export class Money {
    #amount;
    #currency;

    constructor({amount, currency}) {
        if (!Number.isFinite(amount) || amount < 0) {
            throw new Error(`Invalid amount: ${amount}. Must be a non-negative number.`);
        }
        if (!currency instanceof Currency) {
            throw new Error(`Invalid currency: ${currency}. Must be an instance of Currency.`);
        }
        this.#amount = Number(amount.toFixed(2));
        this.#currency = currency;
        Object.freeze(this);
    }
    get amount() {
        return this.#amount;
    }
    get currency() {
        return this.#currency;
    }
    add(other) {
        if (!(other instanceof Money)|| this.#currency !== other.#currency) {
            throw new ValidationError(`Cannot add Money with different currencies: ${this.#currency} and ${other.currency.code}`);
        }
        return new Money({amount: this.#amount + other.#amount, currency: this.#currency});
    }
    toString() {
        return `${this.#amount.toFixed(2)} ${this.#currency.code}`;
    }
    equals(other) {
        return other instanceof Money && this.#amount === other.#amount && this.#currency.equals(other.#currency);
    }
}