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

Note: Probably we don't need a list in here because there is no list actually, but we are taking advantage of the sharing component so we can use that CSS to for consistency. 