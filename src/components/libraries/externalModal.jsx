/* eslint-disable react/prop-types */
import"../../styles/react-libraries/react-modal.css"

import React, { useEffect } from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function ExternalModal ({modalIsOpen, onClose, contentLabel, modalContentHTML}) {

    return (
        <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={onClose} 
            style={customModalStyles} 
            contentLabel={contentLabel}
        >
                {modalContentHTML}
        </Modal>
    )
}
