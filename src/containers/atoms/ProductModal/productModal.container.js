import React from 'react';
import PropTypes from 'prop-types';

import { useStateValue } from '../../../stateManagment/state';

import ProductModalComponent from '../../../components/molecules/ProductModal/productModal.component';

import { RESET_SELECT_PRODUCT, UPDATE_PRODUCTS } from '../../../reducers/checkout.reducer';

const ProductModalContainer = ({ closeModal }) => {
    const [{ checkout, currency, productSelected }, dispatch] = useStateValue();

    const handleCloseModal = event => {
        event.preventDefault();
        closeModal();
        dispatch({ type: RESET_SELECT_PRODUCT });
    }
    
    const handleCheckout = event => {
        event.preventDefault();
        checkout.scan(productSelected.type)
        dispatch({ type: UPDATE_PRODUCTS });
        closeModal();
        dispatch({ type: RESET_SELECT_PRODUCT })
    }

    return (
        <ProductModalComponent
            closeModal={handleCloseModal}
            handleCheckout={handleCheckout}
            currency={currency}
            img={productSelected.img}
            description={productSelected.description}
            fullDescription={productSelected.fullDescription}
            code={productSelected.code}
            price={productSelected.price}
        />
    );
};

export default ProductModalContainer;

ProductModalContainer.propTypes = {
    closeModal: PropTypes.func.isRequired,
};