# SummaryTotal
Renders the total amount and the button for the checkout

## Usage

```
import SummaryTotal from 'src/components/molecules/SummaryTotal/summaryTotal.component';
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| costWithDiscount | Price with the discounts | Number* |  |
| currency | Currency | string* |  |

```
<SummaryTotal
    costWithDiscount={80}
    currency={'€'}
/>
```