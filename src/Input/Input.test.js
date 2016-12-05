import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input.component';

jest.mock('react-dom');

const getOnChangeHandler = event => event.target.checked;

const defaultProps = {
	onChange: getOnChangeHandler,
};

const checkboxProps = {
	label: 'this is checkbox',
	...defaultProps,
};

const radiobuttonProps = {
	type: 'radio',
	label: 'this is radio',
	...defaultProps,
};

describe('Input', () => {
	it('should render checkbox', () => {
		const wrapper = renderer.create(<Input {...checkboxProps} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});

	it('should render radio-button', () => {
		const wrapper = renderer.create(<Input {...radiobuttonProps} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
