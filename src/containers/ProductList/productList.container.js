import React, { useGlobal, Fragment } from 'reactn';

import ProductListComponent from '../../components/ProductList/productList.component';
import ModalComponent from '../../components/Modal/modal.component';
import ProductModal from '../ProductModal/productModal.container';

const ProductsListContainer = () => {
    const [productList] = useGlobal('productList');

    const modalVisible = true;
    
    return (
        <Fragment>
            <ProductListComponent productList={productList} />
            {modalVisible && (
                <ModalComponent 
                    title="Add event"
                    canCancel
                    canConfirm
                    // onCancel={this.modalCancelHandler}
                    // onConfirm={this.modalConfirmHandler}
                >
                    <ProductModal />
                </ModalComponent>
            )}
        </Fragment>
    );
};

export default ProductsListContainer;