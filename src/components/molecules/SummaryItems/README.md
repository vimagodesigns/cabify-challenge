# SummaryItems
Renders a list with the items selected and their prices

## Usage

```
import SummaryItems from 'src/components/molecules/SummaryItems/summaryItems.component';
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| costWithoutDiscount | Price without any discount | Number* |  |
| totalItems | Amount of items | Number* |  |
| currency | Currency | string* |  |

```
<SummaryItems
    costWithoutDiscount={100}
    totalItems={2}
    currency={'€'}
/>
```