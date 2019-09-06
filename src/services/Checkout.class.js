import { TSHIRT, MUG, CAP } from "../constants/products.constants";

const productList = [
    {
        img: 'shirt.png',
        description: 'Shirt',
        code: 'X7R2OPX',
        price: 20,
        currency: '€',
        type: TSHIRT,
        // discountRule: (price) => (quantity) => 
        //     getPriceAndDiscountByAmount(3, 1, quantity, price),
    },
    {
        img: 'mug.png',
        description: 'Mug',
        code: 'X2G2OPZ',
        price: 5,
        currency: '€',
        type: MUG,
        // discountRule: (price) => (quantity) => 
        //     getDiscountByPercentage(3, 1, quantity, price),
    },
    {
        img: 'cap.png',
        description: 'Cap',
        code: 'X3W2OPY',
        price: 10,
        currency: '€',
        type: CAP,
    },
    // {
    //     img: 'cap.png',
    //     description: 'This is not a CAP',
    //     code: 'TUPITUPI',
    //     price: 15,
    //     currency: '€',
    //     type: 'TUPI',
        // discountRule: null,
    // },
];
export class Checkout {
    constructor(pricingRules = {}) {
        this.pricingRules = pricingRules;
        this.productList = productList;
        this.total = 0;
        this.scannedProducts = {};
        // this.productDiscounts = {};
    }

    findProduct(producType) {
        return this.productList.find((product) => product.type === producType);
    }
 
    discount(producType, quantity) {
        const formattedProduct = {
            ...this.findProduct(producType),
            quantity,
        };

        const hasRule = !!this.pricingRules[producType];
        const productDiscount =  hasRule ?
            this.pricingRules[producType](formattedProduct) : 
            0;
        return productDiscount;
    }

    scan(producType) {
        // RECOJO EL PRODUCTO CORRECTO
        console.log(this.productList);
        const price = this.findProduct(producType).price;
        // SCANEO EL PRODUCTO
        const currentProduct = this.scannedProducts[producType];
        const hasThatProduct = !!currentProduct;

        const quantity = hasThatProduct ?
            currentProduct.quantity + 1 : 
            1;

        const productDiscount = this.discount(producType, quantity);
        const discount = hasThatProduct ? 
            currentProduct.discount + productDiscount : 
            productDiscount;

        this.scannedProducts = {
            ...this.scannedProducts,
            [producType]: {
                quantity,
                discount,
            }
        }

        this.total = this.total + price - productDiscount;

        console.log(':::::: quantity ::::', quantity);
        console.log(':::::: discount ::::', discount);
        console.log(':::::: total ::::', this.total);
    }
}

    // scan(productType) {
    //     const hasThatProduct = !!this.scannedProducts[productType];
    //     // const hasDiscountRule = !!this.pricingRules[productType];
    //     const currentProduct = this.scannedProducts[productType];

    //     const quantityProduct = hasThatProduct ? currentProduct + 1 : 1;
            
    //     this.scannedProducts = {
    //         ...this.scannedProducts,
    //         [productType]: quantityProduct,
    //     }

    //     const priceObject = this.pricingRules.rules[productType](quantityProduct);

    //     this.productDiscounts = {
    //         ...this.productDiscounts,
    //         [productType]: priceObject.discount,
    //     }

    //     // if (hasDiscountRule) {
    //     //     const discount = this.checkDiscount(productType, quantityProduct);
    //     //     console.log('::::: DISCOUNT :::::', discount);
    //     // }

    //     return this;
    //     // NOTE
    //     // "this" is the object from I have called this function
    //     // checkout.scan(type) -> checkout is "this"
    //     // if we want to concatenate we have to return "this"
    //     // checkout.scan(type).scan(type)
    //     // checkout.scan(type) will do whatever and return checkout
    //     // so we can do another checkout.scan(type)
    // }

    // unscan(productType) {
    //     // TODO - We can throw an error if the type is not in the scanned products
    //     const hasDiscountRule = !!this.pricingRules[productType];

    //     const quantityProduct = this.scannedProducts[productType] - 1;
    //     const getQuantify = () =>  quantityProduct >= 0 ? quantityProduct : 0;
            
    //     this.scannedProducts = {
    //         ...this.scannedProducts,
    //         [productType]: getQuantify(),
    //     }

    //     if (hasDiscountRule) {
    //         const discount = this.checkDiscount(productType, getQuantify());
    //         console.log('::::: DISCOUNT???? :::::', discount);
    //     }
    //     return this;
    // }

    // checkDiscount(productType, quantityProduct) {
    //     return this.pricingRules[productType](quantityProduct);
    // }










    // NOTE
    // this is not javascript way of 
    // js has not yet (they are working on it) private propperties so it makes no sense
    // get scannedProducts() {
    //     return this._scannedProducts;
    // }

    // set scannedProducts(products) {
    //     this._scannedProducts = products;
    // }
// }
