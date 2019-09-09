import React from 'react';

import './modal.css';
import { useStateValue } from '../../stateManagment/state';
import { CLOSE_MODAL_COMPONENT } from '../../reducers/checkout.reducer';

const Modal = () => {
    const [{ modalList }, dispatch] = useStateValue();
    const ModalContent = modalList[0];
    
    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL_COMPONENT, payload: modalList[0] });
    }

    return (
        <div className="modal">
            <ModalContent closeModal={closeModal} />
        </div>
    )
};

export default Modal;