import React, { Fragment } from 'react';

import ProductListComponent from '../../components/ProductList/productList.component';
import { useStateValue } from '../../stateManagment/state';

const ProductsListContainer = () => {
    const [{ productList }] = useStateValue();

    return (
        <Fragment>
            <ProductListComponent productList={productList} />
        </Fragment>
    );
};

export default ProductsListContainer;