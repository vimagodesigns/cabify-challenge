# ProductItem
Renders a product item with all you need to purchase it. Details, quantity input, price and total

## Usage

```
import ProductsItem from 'src/components/organisms/ProductItem/productItem.component';
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| price | Product price | Number* |  |
| currency | Currency | string* |  |
| totalProduct | Product total price (without discount) | Number* |  |
| thumbnail | Product thumbnail | string* |  |
| description | Prodcut description | string* |  |
| code | Product code | string* |  |
| onClickDetails | Action when clicks on details | Function* |  |
| quantity | Product amount of items | Number* |  |
| onChageQuantity | Action when change the quantity | Functino* |  |
| increaseQuantity | Action when increase the amount of items | Function* |  |
| decreaseQuantity | Action when decrease the amount of items | Function* |  |

```
<ProductsItemComponent 
    thumbnail={'thumbnail.jpg'}
    description={'foo description'}
    code={'foo code'}
    price={100}
    currency={'€'}
    quantity={2}
    totalProduct={200}
    onChageQuantity={() => // do something}
    increaseQuantity={() => // do something}
    decreaseQuantity={() => // do something}
    onClickDetails={() => // do something}
/>
```