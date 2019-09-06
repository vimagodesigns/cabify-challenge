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

    clearScannedProduct(productType) {
        this.setScannedProducts(productType, {
            quantity: 0,
            discount: 0,
            cost: 0,
        });

        return this;
    }

    initScannedProducts() {
        this.productList.map(product => this.clearScannedProduct(product.type));
        return this;
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

    scanTimes(times, productType) {
        if (times === 0) {
            this.clearScannedProduct();
            return this;
        }
        
        for (let index = 0; index < times; index++) {
            this.scan(productType);
        }

        return this;
    }

    scan(productType) {
        const currentProduct = this.getScannedProduct(productType);
        const quantity = currentProduct.quantity + 1;
        const singleDiscount = this.discount(productType, quantity) || 0;
        const productDiscount = currentProduct.discount;
        const discount =  productDiscount + singleDiscount;
        const updatedPrice = this.findProduct(productType).price - singleDiscount;
        const updatedProductCost = currentProduct.cost + updatedPrice;

        this.setScannedProducts(
            productType,
            { quantity, discount, cost: updatedProductCost }
        );
        
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
        
        const quantity = currentProduct.quantity - 1;
        const singleDiscount = this.discount(productType, currentQuantity) || 0;
        const productDiscount = currentProduct.discount;
        const discount = productDiscount - singleDiscount;
        const updatedPrice = this.findProduct(productType).price - singleDiscount;
        const updatedProductCost = currentProduct.cost - updatedPrice;

        this.setScannedProducts(
            productType,
            { quantity, discount, cost: updatedProductCost }
        );

        return this;
    }

    addToTotal(amount) {
        this.total = this.total + amount;
        return this;
    }

    removeFromTotal(amount) {
        this.total = this.total - amount;
        if (this.total < 0)
            this.total = 0;
        
        return this;
    }

    setScannedProducts(productType, newProduct) {
        this.scannedProducts = {
            ...this.scannedProducts,
            [productType]: newProduct
        }
        console.log('================================');
        console.log('productUpdated', productType);
        console.log('objectUpdated', newProduct);
        this.handleTotalAfterChange();

        return this;
    }

    handleTotalAfterChange() {
        this.total = 0;
        const scannedProductsKeys = Object.keys(this.scannedProducts);
        scannedProductsKeys.map(
            productKey =>
                this.total = this.total + this.getScannedProduct(productKey).cost
        );
        console.log('TOTAL :::::', this.total);

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
