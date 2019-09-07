import React, { Fragment } from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';

const SummaryTotalContainer = ({ priceWithDiscount = 107, currency = '€' }) => (
    <Fragment>
        <SummaryListComponent
            wrapperClassName="summary-total border"
        >
            <li>
                <span className="summary-total-cost">Total cost</span>
                <span className="summary-total-price">{priceWithDiscount}{currency}</span>
            </li>
        </SummaryListComponent>
        <button type="submit">Checkout</button>
    </Fragment>
);

export default SummaryTotalContainer;