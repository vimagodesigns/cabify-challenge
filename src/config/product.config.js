import { TSHIRT, MUG, CAP } from "../constants/products.constants";

export const productList = [
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
    //     code: 'CUSTOM',
    //     price: 15,
    //     currency: '€',
    //     type: 'CUSTOM',
        // discountRule: null,
    // },
];