import React from 'react';
import PropTypes from 'prop-types';

import './productModal.css';
import CloseSvgComponent from '../../atoms/svg/close/closeSvg.component';

const ProductModalComponent = ({
    img,
    description,
    fullDescription,
    code,
    price,
    currency,
    closeModal,
    handleCheckout,
}) => (
    <div className="product-modal">
        <section className="image-section">
            <img src={`img/bonus/${img}`} alt={description} />
        </section>
        <aside className="description-section">
            <header>
                <div className="close-button" onClick={closeModal}>
                    <CloseSvgComponent size={24} fill="#aaa" />
                </div>
            </header>
            <main>
                <ul className="title wrapper-half border">
                    <li>
                        <span className="highlight-text">{description}</span>
                        <span className="highlight-text">
                            {price}<span className="currency">{currency}</span>
                        </span>
                    </li>
                </ul>
                <div className="description wrapper-half border">
                    <p>{fullDescription}</p>
                </div>
                <div className="code">
                    <p className="product-code">Product code {code}</p>
                </div>
                <div className="description-actions wrapper">
                    <button type="submit" onClick={handleCheckout}>Add to cart</button>
                </div>
            </main>
        </aside>
    </div>
);

export default ProductModalComponent;

ProductModalComponent.propTypes = {
    img: PropTypes.string,
    description: PropTypes.string.isRequired,
    fullDescription: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    handleCheckout: PropTypes.func.isRequired,
};

ProductModalComponent.defaultProps = {
    img: undefined,
};