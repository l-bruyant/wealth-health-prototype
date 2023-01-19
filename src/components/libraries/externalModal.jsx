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

/**
 *
 * The goal of this wrapper is to setup the external library component
 * in a single place for easier maintenance
 *
 * @function ExternalModal
 *
 * @returns a wrapper that contains the react-modal library component
 *
 */

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
