(window["webpackJsonpcabify-challenge"]=window["webpackJsonpcabify-challenge"]||[]).push([[0],[,,,,,,,,,function(t,e,a){t.exports=a(21)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=(a(14),a(15),a(3)),u=a(6),s=a(7),l=[{thumbnail:"shirt.png",img:"tshirt.jpg",description:"Shirt",fullDescription:"Why are you going to write down here a Lorem Ipsun when you can actually write something amazing about this T-shirt? Maybe you don't know, but this product is the only one with image.",code:"X7R2OPX",price:20,type:"TSHIRT",discountOrder:2,order:1},{thumbnail:"mug.png",img:"",description:"Mug",fullDescription:'"Come on, it is only a mug", I can read your mind but what if I tell you "BUY 2 AND GET 1 FOR FREE. Do not miss this uncredible opportunity!!! It has no image, if you wanna see an image go to the t-shirt details',code:"X2G2OPZ",price:5,type:"MUG",discountOrder:1,order:2},{thumbnail:"cap.png",img:"",description:"Cap",fullDescription:"It is not yellow, nor green nor red, it is our amazing purple cap, with no logo, no brand and no draw. It is looking for a head, what about yours? It has no image, if you wanna see an image go to the t-shirt details",code:"X3W2OPY",price:10,type:"CAP",discountOrder:null,order:3}],d=function(t,e){return t-e};function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(a,!0).forEach(function(e){Object(o.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var h,y=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(u.a)(this,t),this.pricingRules=e,this.productList=l,this.totalWithDiscount=0,this.scannedProducts={},this.initScannedProducts(),this.totalWithoutDiscount=0,this.totalItems=0}return Object(s.a)(t,[{key:"initScannedProducts",value:function(){var t=this;return this.productList.sort(function(t,e){return d(t.discountOrder,e.discountOrder)}).map(function(e){return t.clearScannedProduct(e.type)}),this}},{key:"getScannedProduct",value:function(t){return this.scannedProducts[t]}},{key:"setScannedProduct",value:function(t,e){return this.scannedProducts=p({},this.scannedProducts,Object(o.a)({},t,e)),this.handleTotalAfterChange(),this}},{key:"clearScannedProduct",value:function(t){return this.setScannedProduct(t,{productType:t,quantity:0,discount:0,cost:0,costWithoutDiscount:0,discountLabel:this.getDiscountLabel(t)}),this}},{key:"findProduct",value:function(t){return this.productList.find(function(e){return e.type===t})}},{key:"hasProductRule",value:function(t){return!!this.pricingRules[t]}},{key:"getDiscountLabel",value:function(t){return this.hasProductRule(t)?this.pricingRules[t].label:""}},{key:"discount",value:function(t,e){var a=this,n=p({},this.findProduct(t),{quantity:e});return this.hasProductRule(t)?a.pricingRules[t].rule(n):0}},{key:"scanTimes",value:function(t,e){if(0===t)return this.clearScannedProduct(),this;for(var a=0;a<t;a++)this.scan(e);return this}},{key:"scan",value:function(t){var e=this.getScannedProduct(t),a=e.quantity+1,n=this.discount(t,a)||0,r=e.discount+n,c=this.findProduct(t).price,i=c-n,o=e.cost+i;return this.setScannedProduct(t,p({},e,{quantity:a,discount:r,cost:o,costWithoutDiscount:c*a})),this}},{key:"unscan",value:function(t){var e=this.getScannedProduct(t),a=e.quantity;if(0!==a){var n=e.quantity-1,r=this.discount(t,a)||0,c=e.discount-r,i=this.findProduct(t).price,o=i-r,u=e.cost-o;return this.setScannedProduct(t,p({},e,{quantity:n,discount:c,cost:u,costWithoutDiscount:i*n})),this}}},{key:"handleTotalAfterChange",value:function(){var t=this;return this.totalWithDiscount=0,this.totalWithoutDiscount=0,this.totalItems=0,Object.keys(this.scannedProducts).map(function(e){return t.handleTotalAfterChangeByProductKey(e)}),this}},{key:"handleTotalAfterChangeByProductKey",value:function(t){var e=this.getScannedProduct(t),a=e.costWithoutDiscount,n=e.quantity;this.totalWithDiscount=this.totalWithDiscount+e.cost,this.totalWithoutDiscount=this.totalWithoutDiscount+a,this.totalItems=this.totalItems+n}},{key:"total",value:function(){return this.totalWithDiscount}}]),t}(),f=(h={},Object(o.a)(h,"TSHIRT",{rule:function(t){return function(t){var e=t.productquantity,a=t.minQuantity,n=t.productDiscount,r=e<a?0:n;return e===a?r*a:r}({productquantity:t.quantity,minQuantity:3,productDiscount:1})},label:"x3 Shirt offer"}),Object(o.a)(h,"MUG",{rule:function(t){return function(t){var e=t.productquantity,a=t.productPrice;return e%2===0&&e>1?a:0}({productquantity:t.quantity,productPrice:t.price})},label:"2x1 Mug offer"}),h),E=Object(n.createContext)(),v=function(t){var e=t.reducer,a=t.initialState,c=t.children;return r.a.createElement(E.Provider,{value:Object(n.useReducer)(e,a)},c)},g=function(){return Object(n.useContext)(E)},b=a(1),O=(a(16),a(8));function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(a,!0).forEach(function(e){Object(o.a)(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var N=function(t,e){switch(e.type){case"UPDATE_PRODUCTS":var a=t.checkout;return D({},t,{costWithoutDiscount:a.totalWithoutDiscount,costWithDiscount:a.total(),totalItems:a.totalItems,scannedProducts:a.scannedProducts});case"SELECT_PRODUCT":return D({},t,{productSelected:e.payload});case"RESET_SELECT_PRODUCT":return D({},t,{productSelected:{}});case"SET_MODAL_COMPONENT":return D({},t,{modalList:[e.payload].concat(Object(O.a)(t.modalList))});case"CLOSE_MODAL_COMPONENT":var n=t.modalList.filter(function(t){return t!==e.payload});return D({},t,{modalList:n});default:return t}},C=function(){var t=g(),e=Object(b.a)(t,2),a=e[0].modalList,n=e[1],c=a[0];return r.a.createElement("div",{className:"modal"},r.a.createElement(c,{closeModal:function(){n({type:"CLOSE_MODAL_COMPONENT",payload:a[0]})}}))},T=function(t){var e=t.children,a=t.wrapperClassName,n=t.listClassName,c=t.title;return r.a.createElement("div",{className:a},c&&r.a.createElement("h2",null,c),r.a.createElement("ul",{className:n},e))},w=T;T.defaultProps={wrapperClassName:void 0,listClassName:void 0,title:void 0};var S=function(t){var e=t.discountLabel,a=t.discount,n=t.getDiscountString;return r.a.createElement("li",null,r.a.createElement("span",null,e),r.a.createElement("span",null,n(a)))},k=function(){var t=g(),e=Object(b.a)(t,1)[0].scannedProducts,a=g(),n=Object(b.a)(a,1)[0].currency,c=Object.keys(e),i=function(t){return 0===t?"0".concat(n):"-".concat(t).concat(n)};return r.a.createElement(w,{listClassName:"summary-discounts",wrapperClassName:"wrapper-half border",title:"Discounts"},c.filter(function(t){return""!==e[t].discountLabel}).map(function(t){return r.a.createElement(S,Object.assign({key:t,getDiscountString:i},e[t]))}))},j=a(2),L=a.n(j),q=(a(19),function(t){var e=t.className,a=t.fill,n=t.size,c=t.width,i=t.height;return r.a.createElement("svg",{width:n||c,height:n||i,viewBox:"0 0 18 18",className:e},r.a.createElement("path",{fill:a,d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"}))}),R=q;q.defaultProps={className:void 0,fill:"black",size:void 0,width:18,height:18};var W=function(t){var e=t.img,a=t.description,n=t.fullDescription,c=t.code,i=t.price,o=t.currency,u=t.closeModal,s=t.handleCheckout;return r.a.createElement("div",{className:"product-modal"},r.a.createElement("section",{className:"image-section"},r.a.createElement("img",{src:"img/bonus/".concat(e),alt:a})),r.a.createElement("aside",{className:"description-section"},r.a.createElement("header",null,r.a.createElement("div",{className:"close-button",onClick:u},r.a.createElement(R,{size:24,fill:"#aaa"}))),r.a.createElement("main",null,r.a.createElement("ul",{className:"title wrapper-half border"},r.a.createElement("li",null,r.a.createElement("span",{className:"highlight-text"},a),r.a.createElement("span",{className:"highlight-text"},i,r.a.createElement("span",{className:"currency"},o)))),r.a.createElement("div",{className:"description wrapper-half border"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"code"},r.a.createElement("p",{className:"product-code"},"Product code ",c)),r.a.createElement("div",{className:"description-actions wrapper"},r.a.createElement("button",{type:"submit",onClick:s},"Add to cart")))))},x=W;W.defaultProps={img:void 0};var I=function(t){var e=t.closeModal,a=g(),n=Object(b.a)(a,2),c=n[0],i=c.checkout,o=c.currency,u=c.productSelected,s=n[1];return r.a.createElement(x,{closeModal:function(t){t.preventDefault(),e(),s({type:"RESET_SELECT_PRODUCT"})},handleCheckout:function(t){t.preventDefault(),i.scan(u.type),s({type:"UPDATE_PRODUCTS"}),e(),s({type:"RESET_SELECT_PRODUCT"})},currency:o,img:u.img,description:u.description,fullDescription:u.fullDescription,code:u.code,price:u.price})},_=(a(20),function(t){var e=t.thumbnail,a=t.description,n=t.code,c=t.onClickDetails;return r.a.createElement("div",{className:"col-product",onClick:c},r.a.createElement("figure",{className:"product-image"},r.a.createElement("img",{src:"img/".concat(e),alt:a}),r.a.createElement("div",{className:"product-description"},r.a.createElement("h1",null,a),r.a.createElement("p",{className:"product-code"},"Product code ",n),r.a.createElement("p",{className:"product-code click-info"},"Click for more details"))))}),M=function(t){var e=t.quantity,a=t.onChageQuantity,n=t.increaseQuantity,c=t.decreaseQuantity;return r.a.createElement("div",{className:"col-quantity"},r.a.createElement("button",{className:"count",onClick:c},"-"),r.a.createElement("input",{type:"text",className:"product-quantity",value:e,onChange:a}),r.a.createElement("button",{className:"count",onClick:n},"+"))},A=function(t){var e=t.customClassName,a=t.amount,n=t.currency;return r.a.createElement("div",{className:e},r.a.createElement("span",{className:"product-price"},a),r.a.createElement("span",{className:"product-currency currency"},n))},Q=A;A.defaultProps={customClassName:void 0};var U=function(t){var e=t.price,a=t.currency,n=t.totalProduct,c=t.thumbnail,i=t.description,o=t.code,u=t.onClickDetails,s=t.quantity,l=t.onChageQuantity,d=t.increaseQuantity,m=t.decreaseQuantity;return r.a.createElement("li",{className:"product row"},r.a.createElement(_,{thumbnail:c,description:i,code:o,onClickDetails:u}),r.a.createElement(M,{quantity:s,onChageQuantity:l,increaseQuantity:d,decreaseQuantity:m}),r.a.createElement(Q,{customClassName:"col-price",amount:e,currency:a}),r.a.createElement(Q,{customClassName:"col-total",amount:n,currency:a}))},z=function(t){var e=t.productList,a=g(),n=Object(b.a)(a,2),c=n[0],i=c.currency,o=c.checkout,u=c.scannedProducts,s=n[1],l=function(){s({type:"UPDATE_PRODUCTS"})},m=function(t){return function(e){e.preventDefault();var a=Number(e.target.value);o.clearScannedProduct(t),o.scanTimes(a,t),l()}},p=function(t){return function(e){e.preventDefault(),o.scan(t),l()}},h=function(t){return function(e){e.preventDefault(),0!==e.target.value&&(o.unscan(t),l())}},y=function(t){return function(e){e.preventDefault(),s({type:"SELECT_PRODUCT",payload:t}),s({type:"SET_MODAL_COMPONENT",payload:I})}},f=function(t){return u[t].costWithoutDiscount};return r.a.createElement("ul",{className:"products-list"},e.sort(function(t,e){return d(t.order,e.order)}).map(function(t){return r.a.createElement(U,{key:t.code,thumbnail:t.thumbnail,description:t.description,code:t.code,price:t.price,currency:i,quantity:(e=t.type,u[e].quantity),totalProduct:f(t.type),onChageQuantity:m(t.type),increaseQuantity:p(t.type),decreaseQuantity:h(t.type),onClickDetails:y(t)});var e}))},B=z;z.prototype={productList:L.a.array.isRequired};var H=function(t){var e=t.children;return r.a.createElement("h1",{className:"main"},e)},F=function(t){var e=t.costWithoutDiscount,a=t.totalItems,n=t.currency;return r.a.createElement(w,{listClassName:"summary-items",wrapperClassName:"wrapper border"},r.a.createElement("li",null,r.a.createElement("span",{className:"summary-items-number"},a," Items"),r.a.createElement("span",{className:"summary-items-price"},e," ",r.a.createElement("span",{className:"currency"},n))))},G=function(t){var e=t.mainTitle,a=t.tableHeadTitles,c=a.detailsText,i=a.quantityText,o=a.priceText,u=a.totalText;return r.a.createElement(n.Fragment,null,r.a.createElement(H,null,e),r.a.createElement("ul",{className:"products-list tableHead"},r.a.createElement("li",{className:"products-list-title row"},r.a.createElement("div",{className:"col-product"},c),r.a.createElement("div",{className:"col-quantity"},i),r.a.createElement("div",{className:"col-price"},o),r.a.createElement("div",{className:"col-total"},u))))},X=G,J=L.a.shape({detailsText:L.a.string.isRequired,quantityText:L.a.string.isRequired,priceText:L.a.string.isRequired,totalText:L.a.string.isRequired});G.prototype={mainTitle:L.a.string.isRequired,tableHeadTitles:J.isRequired};var K=function(t){var e=t.costWithDiscount,a=t.currency;return r.a.createElement(n.Fragment,null,r.a.createElement(w,{wrapperClassName:"summary-total border"},r.a.createElement("li",null,r.a.createElement("span",{className:"summary-total-cost"},"Total cost"),r.a.createElement("span",{className:"summary-total-price"},e,a))),r.a.createElement("button",{type:"submit"},"Checkout"))},Y=function(){var t=g(),e=Object(b.a)(t,1)[0],a=e.modalList,n=e.productList,c=e.costWithoutDiscount,i=e.costWithDiscount,o=e.totalItems,u=e.currency,s=!!a.length;return r.a.createElement("main",{className:"App"},r.a.createElement("section",{className:"products"},r.a.createElement(X,{mainTitle:"Shopping cart",tableHeadTitles:{detailsText:"Product details",quantityText:"Quantity",priceText:"price",totalText:"total"}}),r.a.createElement(B,{productList:n})),r.a.createElement("aside",{className:"summary"},r.a.createElement(H,null,"Order Summary"),r.a.createElement(F,{costWithoutDiscount:c,totalItems:o,currency:u}),r.a.createElement(k,null),r.a.createElement(K,{costWithDiscount:i,currency:u})),s&&r.a.createElement(C,null))},Z=new y(f);var $=function(){var t={checkout:Z,productList:Z.productList,costWithoutDiscount:0,costWithDiscount:0,totalItems:0,currency:"\u20ac",scannedProducts:Z.scannedProducts,modalList:[],productSelected:{}};return r.a.createElement(v,{initialState:t,reducer:N},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.380383b5.chunk.js.map