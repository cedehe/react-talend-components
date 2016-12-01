import React, { PropTypes } from 'react';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';

import theme from './Drawer.scss';

function Drawer({ open, size, position, children }) {
	let width;
	let height;

	if (position === 'top' || position === 'bottom') {
		height = size;
	} else {
		width = size;
	}

	const className = classNames(theme['tc-drawer'],
			theme[`tc-drawer-${position}`],
			theme[`tc-drawer-${position}-${open ? 'open' : 'close'}`]);
	const style = { height, width };

	return (
		<Nav className={className} style={style}>
			{children}
		</Nav>
	);
}

Drawer.defaultProps = {
	open: false,
	size: 320,
	position: 'left',
	onToggle: () => {},
	children: null,
};

Drawer.propTypes = {
	open: PropTypes.bool,
	size: PropTypes.number,
	position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	onToggle: PropTypes.func,
	children: React.PropTypes.element,
};

export default Drawer;
