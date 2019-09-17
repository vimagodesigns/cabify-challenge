# ProductDetails
Renders the high level detils of a product

## Usage

```
import ProductDetais from 'src/components/atoms/ProductDetails/productDetails.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| thumbnail | Product thumbnail image | string* |  |
| description | Product description | string* |   |
| code | Product code | string* |   |
| onClickDetails | CTA to display more details | function* |   |

```
<ProductDetais 
    thumbnail={'thumbnail.png'}
    description={'Foo description'}
    code={'foo code'}
    onClickDetails={() => //something}
/>
```