import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './Layout.component';

jest.mock('react-dom');

describe('Layout', () => {
	it('should render Layout OneColumn', () => {
		// given
		const header = { app: 'My app' };
		const one = (<h1>Column one</h1>);

		// when
		const wrapper = renderer.create(
			<Layout mode="OneColumn" one={one} header={header} />
		).toJSON();

		// then
		expect(wrapper).toMatchSnapshot();
	});

	it('should render Layout TwoColumns', () => {
		// given
		const header = { app: 'My app' };
		const one = (<h1>Column one</h1>);
		const two = (<h1>Column two</h1>);

		// when
		const wrapper = renderer.create(
			<Layout mode="TwoColumns" one={one} two={two} header={header} />
		).toJSON();

		// then
		expect(wrapper).toMatchSnapshot();
	});
});
