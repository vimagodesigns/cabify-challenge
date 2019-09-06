import React, { useGlobal } from 'reactn';

import ProductComponent from '../../components/Products/products.component';

const ProductsContainer = () => {
    const productListElements = [
        {
            img: 'shirt.png',
            description: 'Shirt',
            code: 'X7R2OPX',
            price: 20,
            currency: '€',
        },
        {
            img: 'mug.png',
            description: 'Mug',
            code: 'X2G2OPZ',
            price: 5,
            currency: '€',
        },
        {
            img: 'cap.png',
            description: 'Cap',
            code: 'X3W2OPY',
            price: 10,
            currency: '€',
        },
    ];

    const [, setProductsList] = useGlobal('productList');

    setProductsList(productListElements);

    return (
        <ProductComponent />
    );
};

export default ProductsContainer;