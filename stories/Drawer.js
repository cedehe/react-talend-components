import React from 'react';
import { Nav } from 'react-bootstrap';
import { storiesOf, action } from '@kadira/storybook';

import { Drawer, Action } from '../src/index';

const props = {
	open: true,
	position: 'bottom',
	size: 320,
};
const headerStyle = {
	backgroundColor: '#3DB0D6',
	borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
};
storiesOf('Drawer', module)
	.addWithInfo('default', () =>
		(<div>
			<h1>Drawer</h1>
			<h2>Description</h2>
			<p>description</p>
			<h2>Examples</h2>
			<Drawer {...props} >
				<Nav style={headerStyle}>

				</Nav>
			</Drawer>
		</div>)
	);
