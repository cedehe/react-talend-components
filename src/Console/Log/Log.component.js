import React from 'react';
import classnames from 'classnames';
import Actions from '../../Actions';
import theme from './Log.scss';

/**
 * @param {object} props react props
 * @example
<Log name="Hello world"></Log>
 */
function Log(props) {
	const wrapper = classnames(
		'tc-console-log',
		theme.wrapper
	);
	const msg = classnames(
		'tc-console-log-msg',
		`tc-console-log-msg-${props.level}`,
		theme[props.level],
		theme.msg
	);
	return (
		<div className={wrapper}>
			<p className={msg}>
				{props.msg}
				{props.actions ? (<Actions actions={props.actions} />) : null}
			</p>
		</div>
	);
}

Log.propTypes = {
	msg: React.PropTypes.string,
	level: React.PropTypes.oneOf(
		['info', 'error', 'warning']
	),
	actions: React.PropTypes.arrayOf(
		React.PropTypes.object
	),
};

export default Log;
