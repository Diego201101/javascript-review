export class PurchaseOrderState {
    static #VALID_STATES = {
        DRAFT: 'draft',
        SUBMITTED: 'submitted',
        APPROVED: 'approved',
        SHIPPED: 'shipped',
        COMPLETED: 'completed',
        CANCELED: 'cancelled',
    }
    #value;
    constructor(value=PurchaseOrderState.#VALID_STATES.DRAFT) {
        this.#value = value;
        this.#validateState(value);
    }
    #validateState(state) {
        if (!Object.values(PurchaseOrderState.#VALID_STATES).includes(state)) {
            throw new Error(`Invalid purchase order state: ${state}`);
        }
    }
    get value() {
        return this.#value;
    }
    equals(other) {
        return other instanceof PurchaseOrderState && this.#value === other.value;
    }
    toSubmitterFrom(currentState) {
        if (currentState.value !== PurchaseOrderState.#VALID_STATES.DRAFT) {
            throw new Error(`Cannot transition from: ${currentState.value} to Submitted`);
        }
    }
    toApprovedFrom(currentState) {
        if (currentState.value !== PurchaseOrderState.#VALID_STATES.SUBMITTED) {
            throw new Error(`Cannot transition from: ${currentState.value} to Approved`);
        }
    }
    toShippedFrom(currentState) {
        if (currentState.value !== PurchaseOrderState.#VALID_STATES.APPROVED) {
            throw new Error(`Cannot transition from: ${currentState.value} to Shipped`);
        }
    }
    toCancelledFrom(currentState) {
        if (currentState.value === PurchaseOrderState.#VALID_STATES.COMPLETED) {
            throw new Error(`Cannot transition from: ${currentState.value} to Cancelled`);
        }
    }
    isDraft() {
        return this.#value === PurchaseOrderState.#VALID_STATES.DRAFT;
    }
}