import React, { setGlobal } from 'reactn';
import './App.css';

import ProductsComponent from './components/Products/products.component';
import OrderSummaryComponent from './components/OrderSummary/orderSummary.component';
import { Checkout } from './services/Checkout.class';
import { pricingRules } from './config/pricingRules.config';

const checkout = new Checkout(pricingRules);

setGlobal({
  checkout,
  productList: checkout.productList,
});

function App() {
  return (
    <main className="App">
      <ProductsComponent />
      <OrderSummaryComponent />
    </main>
  );
}

export default App;
