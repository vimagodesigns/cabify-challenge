import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MainTitleComponent from '../../atoms/MainTitle/mainTitle.component';

const ProductsHeaderComponent = ({
    mainTitle,
    tableHeadTitles: { detailsText, quantityText, priceText, totalText },
}) => (
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

export default ProductsHeaderComponent;

const tableHeadProptypes = PropTypes.shape({
    detailsText: PropTypes.string.isRequired,
    quantityText: PropTypes.string.isRequired,
    priceText: PropTypes.string.isRequired,
});

ProductsHeaderComponent.prototype = {
    mainTitle: PropTypes.string.isRequired,
    tableHeadTitles: tableHeadProptypes.isRequired,
}