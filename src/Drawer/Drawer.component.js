import React, { PropTypes } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '../Icon';

import theme from './Drawer.scss';

function Drawer({ open, size, position, children, title, onDismiss }) {
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
		<nav className={className} style={style}>
			<nav className="navbar">
				<Nav pullLeft>{title}</Nav>
				<Nav pullRight>
					<NavItem onClick={onDismiss}>
						<Icon name="talend-arrow-left" />
					</NavItem>
				</Nav>
			</nav>
			{children}
		</nav>
	);
}

Drawer.defaultProps = {
	open: false,
	size: 320,
	position: 'left',
	children: null,
};

Drawer.propTypes = {
	open: PropTypes.bool,
	size: PropTypes.number,
	position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
	onDismiss: PropTypes.func,
	children: PropTypes.element,
	title: PropTypes.string,
};

export default Drawer;
