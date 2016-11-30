import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Footerbar } from '../src/index';

const footerbar = {
	main: {
		label: 'save',
		onClick: action('click main button'),
	},
	secondary: {
		label: 'save and add another',
		onClick: action('click secondary button'),
	},
	cancel: {
		label: 'cancel',
		onClick: action('click third button'),
	},
};

storiesOf('Footerbar', module)
	.addWithInfo('default', () => (
		<div>
			<h1>Footerbar</h1>
			<h2>Definition</h2>
			<p>Footer bar is similar to the action toolbar,
				but is placed below forms, panels or dialogs.
				<a href="http://guidelines.talend.com/document/92132#/navigation-layout/toolbars/action-bar">Spec</a>
			</p>
			<h2>Examples</h2>
			<div style={{ width: '600px' }}>
				<Footerbar {...footerbar} />
			</div>
		</div>
	));
