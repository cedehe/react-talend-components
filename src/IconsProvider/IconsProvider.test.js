import React from 'react';
import renderer from 'react-test-renderer';

import IconsProvider from './IconsProvider.component';

describe('IconsProvider', () => {
	it('should render default talend-icons', () => {
		const wrapper = renderer.create(<IconsProvider />).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
