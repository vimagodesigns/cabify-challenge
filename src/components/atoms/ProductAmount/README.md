# ProductAmount
Renders the way of display the amount of money of the application

## Usage

```
import ProductAmount from 'src/components/atoms/ProductAmount/productAmount.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| customClassName | className of the wrapper | string | undefined |
| amount | Amount to display | Number* |   |
| currency | Currency to display | string* |   |

```
<ProductAmountComponent
    customClassName="foo-class"
    amount={100}
    currency={'€'}
/>

```