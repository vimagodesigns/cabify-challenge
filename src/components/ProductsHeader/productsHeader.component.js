import React, { Fragment } from 'react';

import MainTitleComponent from '../MainTitle/mainTitle.component';

const ProductsHeaderComponent = props => {
    const {
        mainTitle,
        tableHeadTitles: { detailsText, quantityText, priceText, totalText },
    } = props;

    return (
        <Fragment>
            <MainTitleComponent>{mainTitle}</MainTitleComponent>
            <ul className="products-list tableHead">
                <li className="products-list-title row">
                    <div className="col-product">{detailsText}</div>
                    <div className="col-quantity">{quantityText}</div>
                    <div className="col-price">{priceText}</div>
                    <div className="col-total">{totalText}</div>
                </li>
            </ul>
        </Fragment>
    );
};

export default ProductsHeaderComponent;