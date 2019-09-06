import React, { useState, useGlobal } from 'reactn';

import ProductItemComponent from '../../components/ProductItem/productItem.component';

export const ProductsItemContainer = props => {
    const {
        itemProps: {
            img,
            description,
            code,
            price,
            currency,
            type,
        } = {},
    } = props;

    const [quantity, setQuantity] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [checkout] = useGlobal('checkout');

    const calculateTotalProduct = quantity => {
        const newTotalProduct = quantity * price;
        setTotalProduct(newTotalProduct);
    };

    const handleQuantityChange = (event) => {
        event.preventDefault();
        
        const newQuantity = Number(event.target.value);
        setQuantity(newQuantity);
        calculateTotalProduct(newQuantity);
    }

    const handleIncreaseQuantity = (event) => {
        event.preventDefault();

        const newQuantity = quantity + 1;

        console.log('begin', checkout.scannedProducts);
        checkout.scan(type).scan(type);
        console.log('end', checkout.scannedProducts);
        console.log('end', checkout.total);

        setQuantity(newQuantity);
        calculateTotalProduct(newQuantity);
    }

    const handleDecreaseQuantity = (event) => {
        event.preventDefault();

        console.log('begin', checkout.scannedProducts);
        checkout.unscan(type);
        console.log('end', checkout.scannedProducts);

        if (quantity === 0)
            return;
        
        const newQuantity = quantity - 1;
        
        setQuantity(newQuantity);
        calculateTotalProduct(newQuantity);
    }

    return (
        <ProductItemComponent
            img={img}
            description={description}
            code={code}
            price={price}
            currency={currency}
            quantity={quantity}
            onChageQuantity={handleQuantityChange}
            increaseQuantity={handleIncreaseQuantity}
            decreaseQuantity={handleDecreaseQuantity}
            totalProduct={totalProduct}
        />
    );
};

export default ProductsItemContainer;