import { TSHIRT } from "../constants/products.constants";

export class Checkout {
    constructor(pricingRules = {}) {
        this.pricingRules = pricingRules;
        this.total = 0;
        this.scannedProducts = {}
    }

    scan(productType) {
        const hasThatProduct = this.scannedProducts[productType];
        const quantityProduct = hasThatProduct ? hasThatProduct + 1 : 1;
            
        this.scannedProducts = {
            ...this.scannedProducts,
            [productType]: quantityProduct,
        }

        return this;
        // NOTE
        // "this" is the object from I have called this function
        // checkout.scan(type) -> checkout is "this"
        // if we want to concatenate we have to return "this"
        // checkout.scan(type).scan(type)
        // checkout.scan(type) will do whatever and return checkout
        // so we can do another checkout.scan(type)
    }

    unscan(productType) {
        // TODO - We can throw an error if the type is not in the scanned products
        const quantityProduct = this.scannedProducts[productType] - 1;
        const getQuantify = () =>  quantityProduct >= 0 ? quantityProduct : 0;
            
        this.scannedProducts = {
            ...this.scannedProducts,
            [productType]: getQuantify(),
        }
        return this;
    }

    // NOTE
    // this is not javascript way of 
    // js has not yet (they are working on it) private propperties so it makes no sense
    // get scannedProducts() {
    //     return this._scannedProducts;
    // }

    // set scannedProducts(products) {
    //     this._scannedProducts = products;
    // }
}

const tshirtPricingRule = (quantity) => {

}

const pricingRules = {
    [TSHIRT]: () => {},
}