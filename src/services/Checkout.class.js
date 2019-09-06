import { productList } from "../config/product.config";

export class Checkout {
    constructor(pricingRules = {}) {
        this.pricingRules = pricingRules;
        this.productList = productList;
        this.total = 0;
        this.scannedProducts = {};
        this.initScannedProducts();
    }

    getScannedProduct(productType) {
        return this.scannedProducts[productType];
    }

    initScannedProducts() {
        this.productList.map(product => 
            this.setScannedProducts(product.type, { quantity: 0, discount: 0 }));
    }

    findProduct(productType) {
        return this.productList.find((product) => product.type === productType);
    }
 
    discount(productType, quantity) {
        const formattedProduct = {
            ...this.findProduct(productType),
            quantity,
        };

        const hasRule = !!this.pricingRules[productType];
        const productDiscount =  hasRule ?
            this.pricingRules[productType](formattedProduct) : 
            0;
        return productDiscount;
    }

    scan(productType) {
        const price = this.findProduct(productType).price;
        const currentProduct = this.getScannedProduct(productType);
        const quantity = currentProduct.quantity + 1;
        const productDiscount = this.discount(productType, quantity) || 0;
        const discount =  currentProduct.discount + productDiscount;

        this.setScannedProducts(productType, { quantity, discount });

        this.addToTotal(price - productDiscount);

        console.log(':::::: quantity ::::', quantity);
        console.log(':::::: discount ::::', discount);
        console.log(':::::: total ::::', this.total);

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
        const currentProduct = this.getScannedProduct(productType);
        const currentQuantity = currentProduct.quantity;
        
        if (currentQuantity === 0)
            return;
        
        const price = this.findProduct(productType).price;
        const singleDiscount = this.discount(productType, currentProduct.quantity);
        const quantity = currentProduct.quantity - 1;
        const discount = currentProduct.discount - singleDiscount;

        this.setScannedProducts(productType, { quantity, discount });

        this.removeFromTotal(price + singleDiscount);

        console.log(':::::: quantity ::::', quantity);
        console.log(':::::: discount ::::', discount);
        console.log(':::::: total ::::', this.total);

        return this;
    }

    addToTotal(amount) {
        this.total = this.total + amount;
    }

    removeFromTotal(amount) {
        this.total = this.total - amount;
        if (this.total < 0)
            this.total = 0;
    }

    setScannedProducts(productType, newProduct) {
        this.scannedProducts = {
            ...this.scannedProducts,
            [productType]: newProduct
        }
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
