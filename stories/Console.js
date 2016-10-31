import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Console } from '../src/index';

const logs = [
	{ msg: 'Hello world, how are you ?' },
	{ msg: 'Something goes wrong here', level: 'error' },
	{
		msg: 'Something goes wrong but can be fixed',
		level: 'warning',
		actions: [
			{
				label: 'fixme',
				onClick: action('fixme'),
				icon: 'fa fa-bug',
			},
		],
	},
];

storiesOf('Console', module)
	.add('default', () => (
		<div>
			<h1>Console</h1>
			<Console logs={logs} />
		</div>
	));
