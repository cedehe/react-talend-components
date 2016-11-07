import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { List } from '../src/index';

const props = {
	items: [
		{
			id: 1,
			name: 'Hello world',
			created: '2016-09-22',
			modified: '2016-09-22',
			author: 'Jean-Pierre DUPONT',
			actions: [{
				label: 'edit',
				icon: 'fa fa-edit',
				onClick: action('onEdit'),
			}, {
				label: 'delete',
				icon: 'fa fa-trash-o',
				onClick: action('onDelete'),
			}],
			icon: 'fa fa-file-excel-o',
		},
		{
			id: 2,
			name: 'Foo',
			created: '2016-09-22',
			modified: '2016-09-22',
			author: 'Jean-Pierre DUPONT',
			icon: 'fa fa-file-pdf-o',
		},
		{
			id: 2,
			name: 'Super long title to trigger overflow on tile rendering',
			created: '2016-09-22',
			modified: '2016-09-22',
			author: 'Jean-Pierre DUPONT with super long name',
		},
	],
	displayMode: 'table',
	onClickAdd: action('onClickAdd'),
	listActions: [
		{
			label: 'Delete selection',
			icon: 'fa fa-trash-o',
			onClick: action('delete'),
		},
	],
	onFilter: action('onFilter'),
	onSelectSortBy: action('onSelectSortBy'),
	onSelectDisplayMode: action('onSelectDisplayMode'),
	sortBy: [
		{ id: 'id', name: 'Id' },
		{ id: 'name', name: 'Name', selected: true },
	],
	columns: [
		{ key: 'id', label: 'Id' },
		{ key: 'name', label: 'Name' },
		{ key: 'author', label: 'Author' },
		{ key: 'created', label: 'Created' },
		{ key: 'modified', label: 'Modified' },
	],
	titleKey: 'name',
	iconKey: 'icon',
	onTitleClick: action('onClick'),
	onElementSelect: action('onSelect'),
};

storiesOf('List', module)
	.add('default', () => (
		<div>
			<h1>List</h1>
			<h2>Definition</h2>
			<p>Display a list by defining your.</p>
			<h2>Examples</h2>
			<List {...props} />
		</div>
	))
	.add('large', () => {
		const eprops = Object.assign({}, props);
		eprops.displayMode = 'large';
		return (
			<div>
				<h1>List</h1>
				<p>Display the list in large mode</p>
				<List {...eprops} />
			</div>
		);
	})
	.add('tile', () => {
		const tprops = Object.assign({}, props);
		tprops.displayMode = 'tile';
		return (
			<div>
				<h1>List</h1>
				<p>Display the list in tile mode</p>
				<List {...tprops} />
			</div>
		);
	});
