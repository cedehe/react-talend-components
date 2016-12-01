import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Drawer, IconsProvider } from '../src/index';

const props = {
	open: true,
	position: 'right',
	size: 320,
	title: 'Drawer Title',
};

storiesOf('Drawer', module)
	.addWithInfo('default', () =>
		(<div>
			<h1>Drawer</h1>
			<h2>Description</h2>
			<p>description</p>
			<h2>Examples</h2>
			<IconsProvider />
			<Drawer {...props} >
				<section style={{ padding: 20 }}>
					<div>Drawer Contents</div>
				</section>
			</Drawer>
		</div>)
	);
