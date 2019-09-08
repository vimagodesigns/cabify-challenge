import React, { useGlobal } from 'reactn';

import './modal.css';

const Modal = () => {
    const [modalComponentList, setModalComponentList] = useGlobal('modalComponentList');
    const ModalComponent = modalComponentList[0];
    
    const closeModal = () => {
        const newModalComponentList = modalComponentList
            .filter((component) => component !== ModalComponent);
        
            
        setModalComponentList(newModalComponentList);
    }

    return (
        <div className="modal">
            <ModalComponent closeModal={closeModal} />
        </div>
    )
};

export default Modal;