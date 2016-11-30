import React from 'react';
import renderer from 'react-test-renderer';

import Footerbar from './Footerbar.component';

jest.mock('react-dom');

const props = {
	main: {
		label: 'save',
		onClick: jest.fn(),
	},
	secondary: {
		label: 'save and add another',
		onClick: jest.fn(),
	},
	cancel: {
		label: 'close',
		onClick: jest.fn(),
	}
};

describe('Footerbar', () => {
	it('should render 3 actions', () => {

		const wrapper = renderer.create(<Footerbar {...props} />);

		expect(wrapper).toMatchSnapshot();
	})
});
