import React, { useGlobal } from 'reactn';

import ProductComponent from '../../components/Products/products.component';
import { MUG, TSHIRT, CAP } from '../../constants/products.constants';

const ProductsContainer = () => {
    const productListElements = [
        {
            img: 'shirt.png',
            description: 'Shirt',
            code: 'X7R2OPX',
            price: 20,
            currency: '€',
            type: TSHIRT
        },
        {
            img: 'mug.png',
            description: 'Mug',
            code: 'X2G2OPZ',
            price: 5,
            currency: '€',
            type: MUG
        },
        {
            img: 'cap.png',
            description: 'Cap',
            code: 'X3W2OPY',
            price: 10,
            currency: '€',
            type: CAP
        },
        // {
        //     img: 'cap.png',
        //     description: 'This is not a CAP',
        //     code: 'TUPITUPI',
        //     price: 15,
        //     currency: '€',
        //     type: 'TUPI'
        // },
    ];

    const [, setProductsList] = useGlobal('productList');

    setProductsList(productListElements);

    return (
        <ProductComponent />
    );
};

export default ProductsContainer;