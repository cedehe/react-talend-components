import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Status, IconsProvider } from '../src/index';

const cancelAction = {
	label: 'cancel',
	icon: 'talend-cross',
	onClick: action('onCancel'),
	bsSize: 'small',
};

const deleteAction = {
	label: 'delete',
	icon: 'talend-cross',
	onClick: action('onDelete'),
	bsSize: 'small',
};

const myStatus = {
	status: 'successful',
	label: 'Successful',
	icon: 'talend-check',
	actions: [deleteAction],
};

storiesOf('Status', module)
	.addWithInfo('default', () => (
		<div>
			<IconsProvider />
			<h1>Status</h1>
			<h2>Definition</h2>
			<p>
				The status component displays a label with icon and when the mouse is over the
				label, the component displays a button to let the user dispatch
			</p>
			<h2>Examples</h2>
			<h3>Status is <code>successful</code></h3>
			<Status {...myStatus} />
			<h3>Status is <code>inProgress</code></h3>
			<Status
				{...{ ...myStatus, actions: [cancelAction, deleteAction] }}
				status={'inProgress'}
				label={'In Progress'}
				icon={''}
			/>
			<h3>Status is <code>failed</code></h3>
			<Status
				{...myStatus}
				status={'failed'}
				label={'Failed'}
				icon={'talend-cross'}
			/>
			<h3>Status is <code>canceled</code></h3>
			<Status
				{...myStatus}
				status={'canceled'}
				label={'Canceled'}
				icon={'talend-cross'}
			/>
			<h3>Status without actions</h3>
			<Status {...{ ...myStatus, actions: [] }} />
			<br />
		</div>
	));
