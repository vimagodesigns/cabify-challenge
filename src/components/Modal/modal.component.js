import React from 'react';

import './modal.css';
import { useStateValue } from '../../stateManagment/state';
import { CLOSE_MODAL_COMPONENT } from '../../reducers/checkout.reducer';

const Modal = () => {
    const [{ modalComponentList }, dispatch] = useStateValue();
    const ModalComponent = modalComponentList[0];
    
    const closeModal = () => {
        dispatch({ type: CLOSE_MODAL_COMPONENT, payload: modalComponentList[0] });
    }

    return (
        <div className="modal">
            <ModalComponent closeModal={closeModal} />
        </div>
    )
};

export default Modal;