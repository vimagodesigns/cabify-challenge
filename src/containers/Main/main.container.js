import React from 'react';
import Modal from '../Modal/modal.container';
import { useStateValue } from '../../stateManagment/state';
import ProductsHeaderComponent from '../../components/molecules/ProductsHeader/productsHeader.component';
import ProductsList from '../ProductList/productList.container';
import MainTitleComponent from '../../components/atoms/MainTitle/mainTitle.component';
import SummaryItemsComponent from '../../components/molecules/SummaryItems/summaryItems.component';
import SummaryDiscounts from '../SummaryDiscounts/summaryDiscounts.container';
import SummaryTotalComponent from '../../components/molecules/SummaryTotal/summaryTotal.component';

const Main = () => {
    const [{
        modalList,
        productList,
        costWithoutDiscount,
        costWithDiscount,
        totalItems,
        currency
    }] = useStateValue();
    const isModalVisible = !!modalList.length;

    const productsMainTitle = 'Shopping cart';
    const productsHeadTitles = {
        detailsText: 'Product details',
        quantityText: 'Quantity',
        priceText: 'price',
        totalText: 'total',
    };

    return (
        <main className="App">
            <section className="products">
                <ProductsHeaderComponent
                    mainTitle={productsMainTitle}
                    tableHeadTitles={productsHeadTitles}
                />
                <ProductsList productList={productList} />
            </section>
            <aside className="summary">
                <MainTitleComponent>Order Summary</MainTitleComponent>
                <SummaryItemsComponent
                    costWithoutDiscount={costWithoutDiscount}
                    totalItems={totalItems}
                    currency={currency}
                    />
                <SummaryDiscounts />
                <SummaryTotalComponent
                    costWithDiscount={costWithDiscount}
                    currency={currency}
                />
            </aside>
            {isModalVisible && <Modal />}
        </main>
    );
}

export default Main;
