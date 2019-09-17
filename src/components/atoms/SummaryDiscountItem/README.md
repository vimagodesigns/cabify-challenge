# SummaryDiscountItem
Renders a list item with a specific discount

## Usage

```
import SummaryDiscountItem from 'src/components/atoms/SummaryDiscountItem/summaryDiscountItem.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| discountLabel | Discount label | string* |  |
| discount | Amount of the discount | Number* |   |
| getDiscountString | Action to get the string of the discount | function* |   |

```
<SummaryDiscountItemComponent
    discountLabel={'Foo label'}
    discount={0}
    getDiscountString={() => // Do someting}
/>
```