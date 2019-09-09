import React from 'react';

import SummaryListComponent from '../../components/SummaryList/summaryList.component';
import { useStateValue } from '../../stateManagment/state';
import SummaryDiscountItemComponent from '../../components/SummaryDiscountItems/summaryDiscountItems.component';

const SummaryDiscountsContainer = () => {
    const [{ scannedProducts }] = useStateValue();
    const scannedProductsKeys = Object.keys(scannedProducts);
    const [{ currency }] = useStateValue();

    const getDiscountString = (discount) => {
        return discount === 0 ?
            `0${currency}` :
            `-${discount}${currency}`;
    }

    return (
        <SummaryListComponent
            listClassName="summary-discounts"
            wrapperClassName="wrapper-half border"
            title="Discounts"
        >
            {
                scannedProductsKeys
                    .filter((key) => scannedProducts[key].discountLabel !== '')
                    .map((key) => (
                        <SummaryDiscountItemComponent
                            key={key}
                            currency={currency}
                            getDiscountString={getDiscountString}
                            {...scannedProducts[key]}
                        />
                    ))
            }
        </SummaryListComponent>
    )
};

export default SummaryDiscountsContainer;