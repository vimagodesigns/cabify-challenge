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
  costWithoutDiscount: 0,
  costWithDiscount: 0,
  totalItems: 0,
  currency: '€',
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
