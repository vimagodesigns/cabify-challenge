import { TSHIRT, MUG, CAP } from "../constants/products.constants";

export const productList = [
    {
        thumbnail: 'shirt.png',
        img: 'tshirt.jpg',
        description: 'Shirt',
        fullDescription: `Why are you going to write down here a Lorem Ipsun when you can actually write something amazing about this T-shirt? Maybe you don't know, but this product is the only one with image.`,
        code: 'X7R2OPX',
        price: 20,
        type: TSHIRT,
        discountOrder: 2,
        order: 1,
        // TODO ojo con esto discountRule: (price) => (quantity) => 
        //     getPriceAndDiscountByAmount(3, 1, quantity, price),
    },
    {
        thumbnail: 'mug.png',
        img: '',
        description: 'Mug',
        fullDescription: '"Come on, it is only a mug", I can read your mind but what if I tell you "BUY 2 AND GET 1 FOR FREE. Do not miss this uncredible opportunity!!! It has no image, if you wanna see an image go to the t-shirt details',
        code: 'X2G2OPZ',
        price: 5,
        type: MUG,
        discountOrder: 1,
        order: 2,
        // discountRule: (price) => (quantity) => 
        //     getDiscountByPercentage(3, 1, quantity, price),
    },
    {
        thumbnail: 'cap.png',
        img: '',
        description: 'Cap',
        fullDescription: 'It is not yellow, nor green nor red, it is our amazing purple cap, with no logo, no brand and no draw. It is looking for a head, what about yours? It has no image, if you wanna see an image go to the t-shirt details',
        code: 'X3W2OPY',
        price: 10,
        type: CAP,
        discountOrder: null,
        order: 3,
    },

    // NOTE If we want to add another product, everything works the same
    // {
    //     thumbnail: 'cap.png',
    //     img: '',
    //     description: 'This is not a CAP',
    //     fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.',
    //     code: 'CUSTOM',
    //     price: 15,
    //     type: 'CUSTOM',
    //     discountOrder: null,
    //     order: 4,
    // },
];