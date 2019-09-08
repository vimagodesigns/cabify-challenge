import { productList } from "../config/product.config";

export class Checkout {
    constructor(pricingRules = {}) {
        this.pricingRules = pricingRules;
        this.productList = productList;
        this.totalWithDiscount = 0;
        this.scannedProducts = {};
        this.initScannedProducts();
        this.totalWithoutDiscount = 0;
        this.totalItems = 0;
    }

    initScannedProducts() {
        this.productList.map(product => this.clearScannedProduct(product.type));
        return this;
    }

    getScannedProduct(productType) {
        return this.scannedProducts[productType];
    }

    setScannedProduct(productType, newProduct) {
        this.scannedProducts = {
            ...this.scannedProducts,
            [productType]: newProduct
        }
        this.handleTotalAfterChange();

        return this;
    }

    clearScannedProduct(productType) {
        this.setScannedProduct(productType, {
            productType,
            quantity: 0,
            discount: 0,
            cost: 0,
            costWithoutDiscount: 0,
            discountLabel: this.getDiscountLabel(productType),
        });

        return this;
    }

    findProduct(productType) {
        return this.productList.find((product) => product.type === productType);
    }

    hasProductRule(productType) {
        return !!this.pricingRules[productType];
    }

    getDiscountLabel(productType) {
        return this.hasProductRule(productType) ?
            this.pricingRules[productType].label :
            '';
    }
 
    discount(productType, quantity) {
        const product = this.findProduct(productType);
        const formattedProduct = { ...product, quantity };
        const hasRule = this.hasProductRule(productType);
        const executeRule = () =>  this.pricingRules[productType].rule(formattedProduct);
        const productDiscount =  hasRule ? executeRule() : 0;
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
        const price = this.findProduct(productType).price;
        const updatedPrice = price - singleDiscount;
        const updatedProductCost = currentProduct.cost + updatedPrice;

        this.setScannedProduct(
            productType,
            {
                ...currentProduct,
                quantity,
                discount,
                cost: updatedProductCost,
                costWithoutDiscount: price * quantity,
            }
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
        const price = this.findProduct(productType).price;
        const updatedPrice = price - singleDiscount;
        const updatedProductCost = currentProduct.cost - updatedPrice;

        this.setScannedProduct(
            productType,
            {
                ...currentProduct,
                quantity,
                discount,
                cost: updatedProductCost,
                costWithoutDiscount: price * quantity,
            }
        );

        return this;
    }

    handleTotalAfterChange() {
        this.totalWithDiscount = 0;
        this.totalWithoutDiscount = 0;
        this.totalItems = 0;

        const scannedProductsKeys = Object.keys(this.scannedProducts);

        scannedProductsKeys.map(
            productKey => this.handleTotalAfterChangeByProductKey(productKey)
        );

        return this;
    }

    handleTotalAfterChangeByProductKey(productKey) {
        const product = this.getScannedProduct(productKey);
        const costWithoutDiscount = product.costWithoutDiscount;
        const items = product.quantity;
        this.totalWithDiscount = this.totalWithDiscount + product.cost
        this.totalWithoutDiscount = this.totalWithoutDiscount + costWithoutDiscount;
        this.totalItems = this.totalItems + items;
    }

    total() {
        return this.totalWithDiscount;
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
