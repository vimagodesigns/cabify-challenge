import React from 'react';

import { useStateValue } from '../../stateManagment/state';
import ProductsItemComponent from '../../components/ProductItem/productItem.component';
import ProductModalContainer from '../ProductModal/productModal.container';
import { SET_MODAL_COMPONENT, SELECT_PRODUCT, UPDATE_PRODUCTS } from '../../reducers/checkout.reducer';
import { less } from '../../utils/common.utils';

const ProductsListContainer = ({ productList }) => {
    const [{ currency, checkout, scannedProducts }, dispatch] = useStateValue();

    const handleNewQuantity = () => {
        dispatch({ type: UPDATE_PRODUCTS });
    }

    const handleChangeQuantity = type => event => {
        event.preventDefault();
        const newQuantity = Number(event.target.value);
        checkout.clearScannedProduct(type);
        checkout.scanTimes(newQuantity, type);
        handleNewQuantity();
    }

    const handleIncreaseQuantity = type => event => {
        event.preventDefault();
        checkout.scan(type);
        handleNewQuantity();
    }
    
    const handleDecreaseQuantity = type => event => {
        event.preventDefault();
        if (event.target.value === 0)
            return;
        checkout.unscan(type);
        handleNewQuantity();
    }

    const handleClickDetails = product => event => {
        event.preventDefault()
        dispatch({ type: SELECT_PRODUCT, payload: product });
        dispatch({ type: SET_MODAL_COMPONENT, payload: ProductModalContainer });
    }

    const getTotalProduct = (type) => scannedProducts[type].costWithoutDiscount;
    const getQuantity = (type) => scannedProducts[type].quantity;

    return (
        <ul className="products-list">
            {
                productList
                    .sort((firstProduct, seconProduct) =>
                        less(firstProduct.order, seconProduct.order))
                    .map((product) => (
                        <ProductsItemComponent 
                            key={product.code}
                            thumbnail={product.thumbnail}
                            description={product.description}
                            code={product.code}
                            price={product.price}
                            currency={currency}
                            quantity={getQuantity(product.type)}
                            totalProduct={getTotalProduct(product.type)}
                            onChageQuantity={handleChangeQuantity(product.type)}
                            increaseQuantity={handleIncreaseQuantity(product.type)}
                            decreaseQuantity={handleDecreaseQuantity(product.type)}
                            onClickDetails={handleClickDetails(product)}
                        />
                    ))
            }
        </ul>
    );
};

export default ProductsListContainer;