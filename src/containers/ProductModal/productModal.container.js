import React from 'reactn';
import ProductModalComponent from '../../components/ProductModal/productModal.component';

const ProductModalContainer = ({ closeModal }) => {

    return (
        <ProductModalComponent closeModal={closeModal} />
    );
};

export default ProductModalContainer;