# QuantityInput
Renders the quantity input with some functionalities to increase or decrease value

## Usage

```
import QuantityInput from 'src/components/atoms/QuantityInput/quantityInput.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| quantity | Value of the input | Number* |  |
| onChageQuantity | Action when change quantity | function* |   |
| increaseQuantity | Action when click on increase | function* |   |
| decreaseQuantity | Action when click on decrease | function* |   |

```
<QuantityInputComponent
    quantity={0}
    onChageQuantity={() => // Do something}
    increaseQuantity={() => // Do something}
    decreaseQuantity={() => // Do something}
/>
```