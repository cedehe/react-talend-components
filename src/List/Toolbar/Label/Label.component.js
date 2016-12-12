import React from 'react';
import { Navbar } from 'react-bootstrap';

function Label({ htmlFor, text }) {
	return (
		<Navbar.Text>
			<label className="navbar-text" htmlFor={htmlFor} style={{ margin: 0 }}>{text}</label>
		</Navbar.Text>
	);
}

Label.propTypes = {
	htmlFor: React.PropTypes.string,
	text: React.PropTypes.string.isRequired,
};

export default Label;
