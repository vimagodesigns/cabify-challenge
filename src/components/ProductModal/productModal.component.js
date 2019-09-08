import React from 'react';

import './productModal.css';
import CloseSvgComponent from '../svg/close/closeSvg.component';

const ProductModalComponent = props => {

    return (
        <div className="product-modal">
            <section className="image-section">
                {/* NOTE </section>https://ivomynttinen.com/blog/a-guide-for-creating-a-better-retina-web aqui explican lo de la imagen retina con html y por que no es recomendable hacerlo asi (bueno comentarlo) */}
                <img src={`img/bonus/tshirt.jpg`} alt="shirt-remember-to-change" align="middle" />
            </section>
            <aside className="description-section">
                <header>
                    <div className="close-button" onClick={() => console.log('HE CLICKADO EN CERRAR')}>
                        <CloseSvgComponent size="24" fill="#aaa" />
                    </div>
                </header>
                <main>
                    <ul className="title wrapper-half border">
                        <li>
                            <span className="highlight-text">Shirt</span>
                            <span className="highlight-text">
                                20<span className="currency">€</span>
                            </span>
                        </li>
                    </ul>
                    <div className="description wrapper-half border">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat.</p>
                    </div>
                    {/* <p className="product-code">Product code {code}</p> */}
                    <div className="code">
                        <p className="product-code">Product code X7R2OPX</p>
                    </div>
                    <div className="description-actions wrapper">
                        <button type="submit">Add to cart</button>
                    </div>
                </main>
            </aside>
        </div>
    );
};

export default ProductModalComponent;