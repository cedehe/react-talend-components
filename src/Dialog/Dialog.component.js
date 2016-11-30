import React, { PropTypes } from 'react';
import { Modal } from 'react-bootstrap';
import Action from '../Actions/Action';

/**
 * @param {object} props react props
 * @example
<Dialog name="Hello world"></Dialog>
 */
function Dialog(props) {
	return (
		<Modal
			bsSize={props.size || null}
			show={props.show}
		>
			{props.header ? (
				<Modal.Header closeButton>
					<Modal.Title>{props.header}</Modal.Title>
				</Modal.Header>
			) : null}
			<Modal.Body>
				{props.children}
			</Modal.Body>
			{props.action ? (
				<Modal.Footer>
					<Action {...props.action} />
				</Modal.Footer>
			) : null}
		</Modal>
	);
}

Dialog.propTypes = {
	header: PropTypes.string,
	size: PropTypes.oneOf(['small', 'large']),
	children: PropTypes.element,
	show: PropTypes.bool,
	action: PropTypes.shape(Action.propTypes),
};

export default Dialog;
