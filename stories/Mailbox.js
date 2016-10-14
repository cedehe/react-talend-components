import { storiesOf, action } from '@kadira/storybook';
import React, { Component, PropTypes } from 'react';

class Item extends Component {
	static propTypes = {
		item: PropTypes.any.isRequired,
		onClick: PropTypes.func
	};

	render() {
		const { item, ...restProps } = this.props;

		return (
			<li role="option" {...restProps}>
				{item}
			</li>
		);
	}
}

storiesOf('Test events in a loop', module)
	.add('list items', () => {
		const props = {
			onClick: action('clicked')
		};

		return (<ul>
			{[1,2,3].map((item, index) => (<Item item={item} key={index} {...props} />))}
		</ul>);
	});
