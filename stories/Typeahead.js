import Autowhatever from 'react-autowhatever';
import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { FormControl } from 'react-bootstrap';
import scssTheme from './typeahead.scss';
import { Typeahead } from '../src';


storiesOf('Typeahead', module)
	.addWithInfo('basic', () => {
		const exampleId = '5';
		const items = [{text: 'Apple'}, {text: 'Banana'}, {text: 'Cherry'}, {text: 'Grapefruit'}, {text: 'Lemon'}];
		function renderItem(item) {
			return (<span>{item.text}</span>)
		}
		const value = '';
		const focusedSectionIndex = null;
		const focusedItemIndex = 0;
		const onClick = (event, { itemIndex }) => {console.log('onClick ' + itemIndex + ' ', event);}
		const inputProps = { value };
		const itemProps = { onClick };

		return (
			<div>
				<Autowhatever
					id={exampleId}
					items={items}
					renderItem={renderItem}
					inputProps={inputProps}
					itemProps={itemProps}
					focusedSectionIndex={focusedSectionIndex}
					focusedItemIndex={focusedItemIndex}
					theme={scssTheme}
				/>
			</div>
		);
	})

	.addWithInfo('Search box', () => {
		const exampleId = 'component-id';
		const fruits = [{ text: 'Apple' }, { text: 'Banana' }, { text: 'Cherry' }, { text: 'Grapefruit' }, { text: 'Lemon' }, { text: 'Mango' }, { text: 'Pineapple' }, { text: 'Melon' }, { text: 'Orange' }];

		let { value, items, focusedSectionIndex, focusedItemIndex} = {
			value: '',
			items: fruits,
			focusedSectionIndex: null,
			focusedItemIndex: 1
		};

		const inputProps = {
			'value': '',
			'placeholder': 'Search anything',
		};

		// Input actions
		const inputActionsList = ['onChange', 'onFocus', 'onBlur'];
		inputActionsList.forEach((funcName) => inputProps[funcName] = action(funcName + ' event on input is triggered'));

		// Item actions
		const itemActionsList = ['onMouseEnter', 'onMouseLeave', 'onMouseDown', 'onClick'];
		const itemProps = {};
		itemActionsList.forEach((funcName) => itemProps[funcName] = action(funcName + ' event on item in the list is triggered'));

		const renderItemsContainer = ({ ...rest }) => {
			return (
				<div {...rest}></div>
			);
		};

		function renderItem(fruit, index) {
			return (
				<span className="className" key={index}>{fruit.text}</span>
			);
		}

		const renderInputComponent = inputProps => {
			return (
				<FormControl {...inputProps} />
			);
		};

		const theme = {
			itemFocused: scssTheme['custom-focused-item']
		};

		return (
			<div>
				<h2>Below is an example of a search box</h2>
				<Typeahead
					id={exampleId}
					items={items}
					renderItemsContainer={renderItemsContainer}
					renderInputComponent={renderInputComponent}
					renderItem={renderItem}
					inputProps={inputProps}
					focusedSectionIndex={focusedSectionIndex}
					focusedItemIndex={focusedItemIndex}
					itemProps={itemProps}
				    theme={theme}
				/>
			</div>
		);
	});
