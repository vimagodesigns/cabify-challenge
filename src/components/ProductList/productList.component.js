import React from 'react';

import ProductItem from '../../containers/ProductItem/productItem.container';

const ProductsListComponent = props => {
    const { productListElements } = props;

    const createProductItems = () => productListElements.map(
        (listItem) => <ProductItem itemProps={listItem} key={listItem.code} />
    );
    
    return (
        <ul className="products-list">
            {createProductItems()}
        </ul>
    );
};

export default ProductsListComponent;