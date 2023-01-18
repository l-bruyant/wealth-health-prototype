import '../../styles/react-libraries/react-modal.css'

import PropTypes from 'prop-types'
import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
const customModalStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	}
}

export default function ExternalModal({ modalIsOpen, onClose, contentLabel, modalContentHTML }) {
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

ExternalModal.propTypes = {
	modalIsOpen: PropTypes.bool,
	onClose: PropTypes.func,
	contentLabel: PropTypes.string,
	modalContentHTML: PropTypes.object
}
