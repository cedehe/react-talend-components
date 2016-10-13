import React from 'react';
import { mount } from 'enzyme';
import SidePanel from './SidePanel.component';

describe('SidePanel', () => {
	it('should trigger toggleDock callback on toggle click', () => {
		// given
		const onToggleDock = jest.fn();
		const actions = [
			{ label: 'Preparations', icon: 'fa fa-asterisk' },
			{ label: 'Datasets', icon: 'fa fa-file-excel-o' },
			{ label: 'Favorites', icon: 'fa fa-star' },
		];
		const docked = false;

		// when
		const sidePanel = (
			<SidePanel
				actions={actions}
				onToggleDock={onToggleDock}
				docked={docked}
			/>
		);
		const wrapper = mount(sidePanel);
		wrapper.find('button').simulate('click');

		// then
		expect(onToggleDock).toBeCalled();
	});

	it('should trigger action callback on action click', () => {
		// given
		const onPreparationsClick = jest.fn();
		const onDatasetsClick = jest.fn();
		const onFavoritesClick = jest.fn();
		const actions = [
			{ label: 'Preparations', icon: 'fa fa-asterisk', onClick: onPreparationsClick },
			{ label: 'Datasets', icon: 'fa fa-file-excel-o', onClick: onDatasetsClick },
			{ label: 'Favorites', icon: 'fa fa-star', onClick: onFavoritesClick },
		];
		const docked = false;

		// when
		const sidePanel = (
			<SidePanel
				actions={actions}
				docked={docked}
			/>
		);
		const wrapper = mount(sidePanel);
		wrapper.find('nav').find('a').at(1).simulate('click');

		// then
		expect(onPreparationsClick).not.toBeCalled();
		expect(onDatasetsClick).toBeCalled();
		expect(onFavoritesClick).not.toBeCalled();
	});
});