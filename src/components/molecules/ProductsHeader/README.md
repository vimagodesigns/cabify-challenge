# ProductModal
Renders the content for the specific Product modal

## Usage

```
import ProductsHeader from 'src/components/molecules/ProductsHeader/productsHeader.component';
```

## Props

| Name | Description | Type | Default |
|------|-------------|------|---------|
| mainTitle | Header main title | string* |  |
| tableHeadTitles | Object with columns texts | string* |  |

### tableHeadTitles shape

| Name | Description | Type | Default |
|------|-------------|------|---------|
| detailsText | Details label | string* |  |
| quantityText | Quantity label | string* |  |
| priceText | Price label | string* |  |
| totalText | Total label | string* |  |

```
<ProductsHeader
    mainTitle={'Foo main title'}
    tableHeadTitles={{
        detailsText: 'details label',
        quantityText: 'Quantity label',
        priceText: 'price label',
        totalText: 'total label',
    }}
/>
```