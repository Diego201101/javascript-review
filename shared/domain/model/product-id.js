import {ValidationError} from "./errors.js";
import {generateUuid, validateUuid} from "./uuid.js";

export class ProductId {
    #value;
    constructor(value) {
        if (!validateUuid(value)) {
            throw new ValidationError(`Invalid ProductId: ${value}. must be a valid uuid`);
        }
        this.#value = value;
        Object.freeze(this);
    }

    static generate() {
        return new ProductId(generateUuid());
    }

    get value() {
        return this.#value;
    }

    equals(other) {
        return other instanceof ProductId && this.#value === other.#value;
    }

    toString() {
        return this.#value;
    }
}