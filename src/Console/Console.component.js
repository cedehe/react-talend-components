import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Log from './Log';
import theme from './Console.scss';

/**
 * @param {object} props react props
 * @example
<Console logs={logs}></Console>
 */
function Console(props) {
	const wrapper = classnames(
		'tc-console',
		theme.wrapper
	);
	return (
		<div className={wrapper}>
			{props.logs.map((log, i) => (
				<Log
					key={i}
					level={log.level || 'info'}
					actions={log.actions || []}
					msg={log.msg}
				/>
			))}
		</div>
	);
}

Console.propTypes = {
	logs: PropTypes.arrayOf(Log.propTypes),
};

export default Console;
