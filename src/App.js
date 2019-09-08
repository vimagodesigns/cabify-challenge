import React, { setGlobal, useGlobal } from 'reactn';
import './App.css';

import ProductsComponent from './components/Products/products.component';
import OrderSummaryComponent from './components/OrderSummary/orderSummary.component';
import { Checkout } from './services/Checkout.class';
import { pricingRules } from './config/pricingRules.config';
import ModalComponent from './components/Modal/modal.component';

const checkout = new Checkout(pricingRules);

setGlobal({
  checkout,
  productList: checkout.productList,
  costWithoutDiscount: 0,
  costWithDiscount: 0,
  totalItems: 0,
  currency: '€',
  scannedProducts: checkout.scannedProducts,
  modalComponentList: [],
  productSelected: {},
});

function App() {
  const [modalComponentList] = useGlobal('modalComponentList');
  const isModalVisible = !!modalComponentList.length;

  return (
    <main className="App">
      <ProductsComponent />
      <OrderSummaryComponent />
      {isModalVisible && <ModalComponent />}
    </main>
  );
}

export default App;
