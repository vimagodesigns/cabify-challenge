import React, { useState, useGlobal } from 'reactn';

import ProductItemComponent from '../../components/ProductItem/productItem.component';

export const ProductsItemContainer = props => {
    const {
        itemProps: { img, description, code, price, currency, type } = {},
    } = props;

    const [quantity, setQuantity] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [checkout] = useGlobal('checkout');
    const [, setCostWithoutDiscount] = useGlobal('costWithoutDiscount');
    const [, setCostWithDiscount] = useGlobal('costWithDiscount');
    const [, setTotalItems] = useGlobal('totalItems');


    const calculateTotalProduct = quantity => {
        const newTotalProduct = quantity * price;
        setTotalProduct(newTotalProduct);
    };

    const handleNewQuantity = value => {
        const newQuantity = value || checkout.getScannedProduct(type).quantity;
        setQuantity(newQuantity);
        calculateTotalProduct(newQuantity);
        setCostWithoutDiscount(checkout.totalWithoutDiscount);
        setTotalItems(checkout.totalItems);
    }

    const handleChangeQuantity = event => {
        event.preventDefault();
        console.log('*************************');
        const newQuantity = Number(event.target.value);
        checkout.clearScannedProduct(type);
        checkout.scanTimes(newQuantity, type);
        handleNewQuantity(newQuantity);

    }

    const handleIncreaseQuantity = event => {
        event.preventDefault();
        checkout.scan(type);
        handleNewQuantity();
    }
    
    const handleDecreaseQuantity = event => {
        event.preventDefault();
        checkout.unscan(type);
        handleNewQuantity();
    }


    return (
        <ProductItemComponent
            img={img}
            description={description}
            code={code}
            price={price}
            currency={currency}
            quantity={quantity}
            onChageQuantity={handleChangeQuantity}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
            totalProduct={totalProduct}
        />
    );
};

export default ProductsItemContainer;