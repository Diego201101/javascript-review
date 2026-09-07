import {ValidationError} from "./errors.js";
import {generateUuid, validateUuid} from "./uuid.js";

export class SupplierId {
    #value;
    constructor(value) {
        if (!value) {
            throw new Error(`Invalid SupplierId: ${value}. must be a valid uuid`);
        }
        this.#value = value;
        Object.freeze(this);
    }
    static generate() {
        return new SupplierId(generateUuid());
    }
    get value() {
        return this.#value;
    }
    toString() {
        return this.#value;
    }
    equals(other) {
        return other instanceof SupplierId && this.#value === other.#value;
    }
}