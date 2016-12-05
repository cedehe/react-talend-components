import React from 'react';
import renderer from 'react-test-renderer';

import SelectionInput from './SelectionInput.component';

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
		const wrapper = renderer.create(<SelectionInput {...checkboxProps} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});

	it('should render radio-button', () => {
		const wrapper = renderer.create(<SelectionInput {...radiobuttonProps} />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
