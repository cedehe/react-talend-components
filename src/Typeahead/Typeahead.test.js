import React from 'react';

import { shallow } from 'enzyme';

import Typeahead from './Typeahead.component';

describe('Typeahead', () => {
	it('should render its name', () => {
		const wrapper = shallow(<Typeahead name="Hello world" />);
		expect(wrapper.containsMatchingElement(<div>Hello world</div>)).toBe(true);
	});
});
