import React from 'react';
import renderer from 'react-test-renderer';

import Status from './Status.component';

jest.mock('react-dom');

const currentStatus = {
	status: 'successful',
	label: 'Successful',
	icon: 'fa fa-check',
	actions: [
		{
			label: 'cancel',
			icon: 'fa fa-cancel',
			onClick: jest.fn(),
			bsSize: 'small',
		},
		{
			label: 'delete',
			icon: 'fa fa-delete',
			onClick: jest.fn(),
			bsSize: 'small',
		}],
};

describe('Status', () => {
	it('should render a label with Icon', () => {
		// when
		const wrapper = renderer.create(<Status {...currentStatus} />).toJSON();

		// then
		expect(wrapper).toMatchSnapshot();
	});
	it('should render a label', () => {
		// given
		const props = {
			...currentStatus,
			icon: '',
		};

		// when
		const wrapper = renderer.create(<Status {...props} />).toJSON();

		// then
		expect(wrapper).toMatchSnapshot();
	});
	it('should render a label with Icon without actions', () => {
		// when
		const wrapper = renderer.create(<Status {...currentStatus} actions={[]} />).toJSON();

		// then
		expect(wrapper).toMatchSnapshot();
	});
});
