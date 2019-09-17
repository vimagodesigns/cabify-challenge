import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SummaryListComponent from '../../atoms/SummaryList/summaryList.component';

const SummaryTotalComponent = ({ costWithDiscount, currency }) => (
    <Fragment>
        <SummaryListComponent
            wrapperClassName="summary-total border"
        >
            <li>
                <span className="summary-total-cost">Total cost</span>
                <span className="summary-total-price">{costWithDiscount}{currency}</span>
            </li>
        </SummaryListComponent>
        <button type="submit">Checkout</button>
    </Fragment>
);

export default SummaryTotalComponent;

SummaryTotalComponent.propTypes = {
    costWithDiscount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
};