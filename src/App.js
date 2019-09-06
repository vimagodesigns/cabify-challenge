import React, { setGlobal } from 'reactn';
import './App.css';

import Products from './containers/Products/products.container';
import OrderSummaryComponent from './components/OrderSummary/orderSummary.component';
import { Checkout } from './services/Checkout.class';

setGlobal({
  checkout: new Checkout(),
  productList: [],
});

function App() {
  return (
    <main className="App">
      <Products />
      <OrderSummaryComponent />
    </main>
  );
}

export default App;
