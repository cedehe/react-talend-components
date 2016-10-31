import React from 'react';
import renderer from 'react-test-renderer';

import Log from './Log.component';

jest.mock('react-dom');

const info = { msg: 'Hello world, how are you ?' };
const error = { msg: 'Something goes wrong here', level: 'error' };
const warning = {
	msg: 'Something goes wrong but can be fixed',
	level: 'warning',
	actions: [
		{
			label: 'fixme',
			onClick: jest.fn(),
			icon: 'fa fa-bug',
		},
	],
};

describe('Log', () => {
	it('should render a log info by default', () => {
		const wrapper = renderer.create(
			<Log {...info} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render a log warning', () => {
		const wrapper = renderer.create(
			<Log {...warning} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render an error', () => {
		const wrapper = renderer.create(
			<Log {...error} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
