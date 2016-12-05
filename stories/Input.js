import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import { Input } from '../src/index';

const getOnChangeHandler = event =>
	action('input changed')(event.target.checked);

const defaultProps = {
	onChange: getOnChangeHandler,
};

const checkboxProps = {
	label: 'this is checkbox',
	...defaultProps,
};

const radiobuttonProps = {
	type: 'radio',
	label: 'this is radio',
	...defaultProps,
};


storiesOf('Input', module)
	.addWithInfo('default', () => (
		<div>
			<h1>Input</h1>
			<h3>Definition</h3>
			<p>
				A view component to display radio-buttons or checkboxes.
			</p>
			<h3>No props provided except onchange handler: </h3>
			<Input {...defaultProps} />
		</div>
	))
	.addWithInfo('checkbox', () => (
		<div>
			<h1>Input</h1>
			<h3>Definition</h3>
			<p>
				A view component to display radio-buttons or checkboxes.
			</p>
			<h3>Checkbox: </h3>
			<Input {...checkboxProps} />
		</div>
	))
	.addWithInfo('radio', () => (
		<div>
			<h1>Input</h1>
			<h3>Definition</h3>
			<p>
				A view component to display radio-buttons or checkboxes.
			</p>
			<h3>Radio-button: </h3>
			<form>
				<Input {...radiobuttonProps} />
				<button type="reset">reset</button>
			</form>
		</div>
	));
