import React, { Fragment, useGlobal } from 'reactn';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';

const SummaryTotalContainer = () => {
    const [currency] = useGlobal('currency'); 
    const [costWithDiscount] = useGlobal('costWithDiscount'); 

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