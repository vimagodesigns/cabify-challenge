import React, { useGlobal } from 'reactn';

import ProductComponent from '../../components/Products/products.component';
import { MUG, TSHIRT, CAP } from '../../constants/products.constants';
import { pricingRules } from '../../services/PricingRules.class';
import { getPriceAndDiscountByAmount } from '../../utils/pricingRules.utils';
import { Checkout } from '../../services/Checkout.class';

const ProductsContainer = () => {
    const productListElements = [
        {
            img: 'shirt.png',
            description: 'Shirt',
            code: 'X7R2OPX',
            price: 20,
            currency: '€',
            type: TSHIRT,
            discountRule: (price) => (quantity) => 
                getPriceAndDiscountByAmount(3, 1, quantity, price),
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

    const [, setProductsList] = useGlobal('productList');
    const [, setCheckout] = useGlobal('checkout');

    // const pricingRulesClass = new PricingRulesClass({ products: productListElements });
    // const pricingRules = pricingRulesClass.rules;

    setProductsList(productListElements);
    setCheckout(new Checkout(pricingRules));

    return (
        <ProductComponent />
    );
};

export default ProductsContainer;