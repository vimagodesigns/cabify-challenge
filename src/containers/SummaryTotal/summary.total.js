import React, { Fragment } from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';
import { useStateValue } from '../../stateManagment/state';

const SummaryTotalContainer = () => {
    const [{ costWithDiscount, currency }] = useStateValue(); 

    return (
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
    )
};

export default SummaryTotalContainer;