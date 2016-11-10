import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { SidePanel, IconsProvider } from '../src/index';

const actions = [
	{
		label: 'Preparations',
		icon: 'fa fa-asterisk',
		onClick: action('Preparations clicked'),
		active: true,
	},
	{
		label: 'Datasets',
		icon: 'fa fa-file-excel-o',
		onClick: action('Datasets clicked'),
	},
	{
		label: 'Favorites',
		icon: 'fa fa-star',
		onClick: action('Favorites clicked'),
	},
];

storiesOf('Side Panel', module)
	.addWithInfo('default', () => {
		return (
			<div>
				<h1>SidePanel</h1>
				<h2>Definition</h2>
				<a href="http://guidelines.talend.com/document/92132#/ui-controls/side-panel">Spec</a>
				<h2>Examples</h2>
				<IconsProvider />
				<SidePanel
					actions={actions}
					onToggleDock={action('Toggle dock clicked')}
					docked={false}
				/>
			</div>
		);
	})
	.addWithInfo('docked', () =>
		(
			<div>
				<h1>SidePanel</h1>
				<h2>Definition</h2>
				<a href="http://guidelines.talend.com/document/92132#/ui-controls/side-panel">Spec</a>
				<h2>Examples</h2>
				<IconsProvider />
				<SidePanel
					actions={actions}
					onToggleDock={action('Toggle dock clicked')}
					docked
				/>
			</div>
		)
	)
	.addWithInfo('custom toggle icon', () =>
		(
			<div>
				<h1>SidePanel</h1>
				<h2>Definition</h2>
				<a href="http://guidelines.talend.com/document/92132#/ui-controls/side-panel">Spec</a>
				<h2>Examples</h2>
				<IconsProvider />
				<SidePanel
					actions={actions}
					onToggleDock={action('Toggle dock clicked')}
					toggleIcon="fa-arrow-left"
					docked
				/>
			</div>
		)
	);
