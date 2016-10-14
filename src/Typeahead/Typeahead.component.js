import React from 'react';
import {PropTypes} from 'react';
import Autowhatever from 'react-autowhatever';
import scssTheme from './Typeahead.scss';

/**
 * @param {object} props react props
 * @example
	 <Typeahead
		 id={comonentId}
		 items={items}
		 renderItem={renderItem}
		 inputProps={inputProps}
		 itemProps={itemProps}
	 />
 */
function Typeahead(props) {
	const eprops = Object.assign({}, props);
	eprops.theme = {
		container: props.theme && props.theme.container || scssTheme['awe-container'],
		containerOpen: props.theme && props.theme.containerOpen || scssTheme['awe-containerOpen'],
		highlight: props.theme && props.theme.highlight || scssTheme['awe-highlight'],
		input: props.theme && props.theme.input || scssTheme['awe-input'],
		item: props.theme && props.theme.item || scssTheme['awe-item'],
		itemFocused: props.theme && props.theme.itemFocused || scssTheme['awe-itemFocused'],
		itemsContainer: props.theme && props.theme.itemsContainer || scssTheme['awe-itemsContainer'],
		itemsList: props.theme && props.theme.itemsList || scssTheme['awe-itemsList'],
		sectionContainer: props.theme && props.theme.sectionContainer || scssTheme['awe-sectionContainer'],
		sectionTitle: props.theme && props.theme.sectionTitle || scssTheme['awe-sectionTitle'],
	};

	console.log('//////////////////////', eprops);
	return (<Autowhatever {...eprops}/>);
}

Typeahead.propTypes = {
	id: PropTypes.string,                  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
	multiSection: PropTypes.bool,          // Indicates whether a multi section layout should be rendered.
	renderInputComponent: PropTypes.func,  // Renders the input component.
	items: PropTypes.array.isRequired,     // Array of items or sections to render.
	renderItemsContainer: PropTypes.func,  // Renders the items container.
	renderItem: PropTypes.func,            // This function renders a single item.
	renderItemData: PropTypes.object,      // Arbitrary data that will be passed to renderItem()
	shouldRenderSection: PropTypes.func,   // This function gets a section and returns whether it should be rendered, or not.
	renderSectionTitle: PropTypes.func,    // This function gets a section and renders its title.
	getSectionItems: PropTypes.func,       // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
	inputComponent: PropTypes.func,        // When specified, it is used to render the input element
	inputProps: PropTypes.object,          // Arbitrary input props
	itemProps: PropTypes.oneOfType([       // Arbitrary item props
		PropTypes.object,
		PropTypes.func,
	]),
	focusedSectionIndex: PropTypes.number, // Section index of the focused item
	focusedItemIndex: PropTypes.number,    // Focused item index (within a section)
	theme: PropTypes.oneOfType([           // Styles. See: https://github.com/markdalgleish/react-themeable
		PropTypes.object,
		PropTypes.array,
	]),
};

export default Typeahead;
