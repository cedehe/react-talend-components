import React, { PropTypes } from 'react';
import getClassNames from '../utils/getClassNames';
import { Checkbox, Radio } from '../index';
import theme from './Input.scss';

const getClassName = getClassNames(theme);
/**
 * A view component to display inputs, like radio-buttons or checkboxes.
 *
 * @param type string, type of control to show, supported: radio and checkbox
 * @param inline boolean,
 * @param disabled boolean, flag to make input readonly
 * @param label string, label to show
 * @param onChangeHandler function, event callback on input value change
 *
 */

export const supportedElements = {
	checkbox: params => <Checkbox {...params}>{params.label}</Checkbox>,
	radio: params => <Radio {...params}>{params.label}</Radio>,
};

const Input = ({ type, inline, disabled, label, onChange }) => (
	<div className={getClassName('tc-input')}>
		{supportedElements[type]({
			inline,
			disabled,
			label,
			onChange,
		})}
	</div>
);

Input.propTypes = {
	type: PropTypes.string,
	inline: PropTypes.bool,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
};

Input.defaultProps = {
	type: 'checkbox',
	inline: false,
	disabled: false,
};

export default Input;
