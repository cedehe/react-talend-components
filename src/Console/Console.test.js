import React from 'react';
import renderer from 'react-test-renderer';

import Console from './Console.component';

jest.mock('react-dom');

const logs = [
	{ msg: 'Hello world, how are you ?' },
	{ msg: 'Something goes wrong here', level: 'error' },
	{
		msg: 'Something goes wrong but can be fixed',
		level: 'warning',
		actions: [
			{
				label: 'fixme',
				onClick: jest.fn(),
				icon: 'fa fa-bug',
			},
		],
	},
];

describe('Console', () => {
	it('should render', () => {
		const wrapper = renderer.create(
			<Console logs={logs} />
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
