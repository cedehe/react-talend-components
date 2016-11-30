import React, { PropTypes } from 'react';
import { Nav } from 'react-bootstrap';

import Action from '../Actions/Action';
import theme from './Footerbar.scss';

function Footerbar({ main, secondary, cancel }) {
	return (
		<Nav className={theme['tc-footerbar-container']}>
			{cancel ? (
				<Nav className="pull-left">
					<Action {...cancel} />
				</Nav>
			) : null}
			<Nav className="pull-right">
				{secondary ? (
					<Action {...Object.assign({ bsStyle: 'secondary' }, secondary)} />
				) : null}
				<Action className={theme['tc-footerbar-btn']} {...Object.assign({ bsStyle: 'info' }, main)} />
			</Nav>
		</Nav>
	);
}

Footerbar.propTypes = {
	main: PropTypes.shape(Action.propTypes).isRequired,
	secondary: PropTypes.shape(Action.propTypes),
	cancel: PropTypes.shape(Action.propTypes),
};

export default Footerbar;
