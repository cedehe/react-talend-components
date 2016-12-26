import { PropTypes } from 'react';
import ItemTitle from '../ItemTitle';

export default {
	id: PropTypes.string,
	columns: PropTypes.arrayOf(PropTypes.object),
	items: PropTypes.arrayOf(PropTypes.object),
	selected: PropTypes.arrayOf(PropTypes.string),
	itemProps: PropTypes.shape({
		classNameKey: PropTypes.string,
		isSelected: PropTypes.func,
		onClickTitle: PropTypes.func,
		onSelect: PropTypes.func,
		onToggle: PropTypes.func,
		onToggleAll: PropTypes.func,
		width: PropTypes.string,
	}),
	titleProps: ItemTitle.propTypes.titleProps,
};
