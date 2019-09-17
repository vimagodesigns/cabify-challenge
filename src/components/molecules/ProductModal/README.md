# ProductModal
Renders the content for the specific Product modal

## Usage

```
import ProductModal from 'src/components/molecules/ProductModal/productModal.component';
```

## Props


| Name | Description | Type | Default |
|------|-------------|------|---------|
| img | Image of the product | string | undefined |
| description | Product description | string* |  |
| fullDescription | Full product description | string* |  |
| code | Product code | string* |  |
| price | Product price | Number* |  |
| currency | Currency | string* |  |
| closeModal | Action when click on close | function* |  |
| handleCheckout | Action when click on checkout | function* |  |

```
<ProductModal
    img={'foo.img'}
    description={'Foo description'}
    fullDescription={'Foo full description'}
    code={'Foo code'}
    price={100}
    currency={'€'}
    closeModal={() => // do something}
    handleCheckout={() => // do something}
/>
```