export class DateTime {
    #date;
    constructor(date=newDate()) {
        const parsedDate = date instanceof Date ? new Date(date) : new Date(date);
        if (isNaN(parsedDate.getTime())) {
            throw new Error(`Invalid date: ${date}`);
        }
        this.#date = new Date(parsedDate);
    }
    get date() {
        return new Date(this.#date.getTime());
    }
    toISOString() {
        return this.#date.toISOString();
    }
    toString() {
        let options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12:true };
        return this.#date.toLocaleString('en-US', options);
    }

    /**
     * Checks if this DateTime instance is equal to another DateTime instance.
     * @param other
     * @returns {boolean}
     */
    equals(other) {
        return other instanceof DateTime && this.#date.getTime() === other.#date.getTime();
    }
}