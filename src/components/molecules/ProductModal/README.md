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

Note: Here it is explained the ways to handle the solution for better images handle in retina screens

https://ivomynttinen.com/blog/a-guide-for-creating-a-better-retina-web

However, we have done it in a "wrong way" (bandwidth-hungry way) here, and it is explained in that article.

The best way is that the user with no retina, don't download the retina image, we are not handling that here and we are setting the img way, downloading both images always. This could be a good fix in a future. 

## The hard, server-side way

```
“Retina Images” is a pretty nice solution to serve high-resolution images automatically without double loading resources. It relies on javascript, enabled cookies, PHP, and a modified .htaccess file – if this isn’t a big problem for you it’s probably the best solution to offer your visitors the full retina experience. In case an @2x image isn’t available it will just revert back to the normal sized image. If you are using Wordpress, there is also a plugin available which makes the installation even easier.
```