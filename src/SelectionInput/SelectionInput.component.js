import React, { PropTypes } from 'react';
import getClassNames from '../utils/getClassNames';
import { Checkbox, Radio } from '../index';
import theme from './SelectionInput.scss';

const getClassName = getClassNames(theme);
/**
 * A view component to display inputs, like radio-buttons or checkboxes.
 *
 * @param type string, type of control to show, supported: radio and checkbox
 * @param disabled boolean, flag to make input readonly
 * @param label string, label to show
 * @param onChangeHandler function, event callback on input value change
 * @param checked bool, flag either control should be checked or no;
 * 		  Danger! Should be controlled in onChangeHandler callback
 *
 */
export const supportedElements = {
	checkbox: params => <Checkbox {...params}>{params.label}</Checkbox>,
	radio: params => <Radio {...params}>{params.label}</Radio>,
};

const SelectionInput = ({ type, disabled, label, onChange, checked }) => (
	<div className={getClassName('tc-input')}>
		{supportedElements[type]({
			disabled,
			label,
			onChange,
			checked,
		})}
	</div>
);

SelectionInput.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	label: PropTypes.string,
	onChange: PropTypes.func,
	checked: PropTypes.bool,
};

SelectionInput.defaultProps = {
	type: 'checkbox',
	disabled: false,
};

export default SelectionInput;
