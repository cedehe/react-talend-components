import React from 'react';
import Action from '../Actions/Action';
import classNames from 'classnames';
import theme from './Badge.scss';

const badgeClasses = (tcStyle, showDeleteIcon) => classNames({
	[theme['tc-badge']]: true,
	'tc-badge': 'true',
	[theme['tc-badge-outline']]: tcStyle === 'outline',
	'tc-badge-outline': tcStyle === 'outline',
	[theme['tc-badge-solid']]: tcStyle === 'solid',
	'tc-badge-solid': tcStyle === 'solid',
	[theme['tc-badge-with-icon']]: showDeleteIcon,
	'tc-badge-with-icon': showDeleteIcon
});

const badgeLabelClasses = showDeleteIcon => classNames({
	[theme['tc-badge-label']]: showDeleteIcon,
	'tc-badge-label': showDeleteIcon
});


function Badge({label, tcStyle, showDeleteIcon, onDelete}) {
	return (
		<div className={badgeClasses(tcStyle, showDeleteIcon)}>
			<span className={badgeLabelClasses(showDeleteIcon)}>
				{label}
			</span>
			{showDeleteIcon &&
				<Action
					label=""
					onClick={onDelete}
					icon="talend-crossbig"
					className={classNames(theme['tc-badge-delete-icon'], 'tc-badge-delete-icon')}
				/>
			}
		</div>
	);
}

Badge.propTypes = {
	label: React.PropTypes.string,
	tcStyle: React.PropTypes.string,
	showDeleteIcon: React.PropTypes.bool,
	onDelete: React.PropTypes.func
};

Badge.defaultProps = {
	tcStyle: 'solid'
};

export default Badge;
