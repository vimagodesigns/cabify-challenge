import React from 'react';
import ProductsComponent from '../../components/Products/products.component';
import OrderSummaryComponent from '../../components/OrderSummary/orderSummary.component';
import ModalComponent from '../../components/Modal/modal.component';
import { useStateValue } from '../../stateManagment/state';

const Main = () => {
  const [{ modalComponentList }] = useStateValue();
  const isModalVisible = !!modalComponentList.length;

  return (
    <main className="App">
    <ProductsComponent />
    <OrderSummaryComponent />
    {isModalVisible && <ModalComponent />}
    </main>
  );
}

export default Main;
