import { TSHIRT, MUG, CAP } from "../constants/products.constants";

export const productList = [
    {
        thumbnail: 'shirt.png',
        img: 'tshirt.jpg',
        description: 'Shirt',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.',
        code: 'X7R2OPX',
        price: 20,
        type: TSHIRT,
        // discountRule: (price) => (quantity) => 
        //     getPriceAndDiscountByAmount(3, 1, quantity, price),
    },
    {
        thumbnail: 'mug.png',
        img: '',
        description: 'Mug',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.',
        code: 'X2G2OPZ',
        price: 5,
        type: MUG,
        // discountRule: (price) => (quantity) => 
        //     getDiscountByPercentage(3, 1, quantity, price),
    },
    {
        thumbnail: 'cap.png',
        img: '',
        description: 'Cap',
        fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.',
        code: 'X3W2OPY',
        price: 10,
        type: CAP,
    },
    // {
    //     thumbnail: 'cap.png',
    //     img: '',
    //     description: 'This is not a CAP',
    //     fullDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.',
    //     code: 'CUSTOM',
    //     price: 15,
    //     type: 'CUSTOM',
    // },
];