import React from 'react';
import renderer from 'react-test-renderer';

import Dialog from './Dialog.component';

describe('Dialog', () => {
	it('should render its name', () => {
		const wrapper = renderer.create(<Dialog name="Hello world" />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
