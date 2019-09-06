export class Checkout {
    constructor(pricingRules = {}) {
        this._pricingRules = pricingRules;
        this._total = 0;
    }

    add() {
        this.total = this.total + 5;
    }

    get total() {
        return this._total;
    }

    set total(amount) {
        this._total = amount;
    }
}