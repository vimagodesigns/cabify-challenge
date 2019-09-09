import React, { Fragment } from 'react';

import SummaryListComponent from '../../atoms/SummaryList/summaryList.component';

const SummaryTotalComponent = ({ costWithDiscount, currency }) => (
    <Fragment>
        <SummaryListComponent // NOTE As I mentioned in summaryItems.component, no need for list here. I only use them taking advantage of provided css
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