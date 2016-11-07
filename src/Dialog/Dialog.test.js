import React, { PropTypes } from 'react';

jest.mock('react-dom');
jest.mock('react-bootstrap', () => {
	function getFakeComponent(name) {
		return ({ children, ...rest}) => (<div className={name} {...rest}>{children}</div>);
	}
	const Modal = getFakeComponent('Modal');
	Modal.Header = getFakeComponent('Header');
	Modal.Title = getFakeComponent('Title');
	Modal.Body = getFakeComponent('Body');
	Modal.Footer = getFakeComponent('Footer');
	const OverlayTrigger = getFakeComponent('OverlayTrigger');
	OverlayTrigger.propTypes = {};
	const Tooltip = getFakeComponent('Tooltip');
	function Button({ children, ...rest }) {
		return (<button {...rest}>{children}</button>);
	}
	return {
		Button,
		Modal,
		OverlayTrigger,
		Tooltip,
	};
});

import renderer from 'react-test-renderer';

import Dialog from './Dialog.component';

const defaultProps = {
	show: true,
};
const headerProps = {
	header: 'Hello world',
	show: true,
};
const actionProps = {
	show: true,
	header: 'Hello world',
	action: {
		label: 'OK',
		onClick: jest.fn(),
	},
};
const smallProps = {
	show: true,
	header: 'Hello world',
	size: 'small',
	action: {
		label: 'OK',
		onClick: jest.fn(),
	},
};
const largeProps = {
	show: true,
	header: 'Hello world',
	size: 'large',
	action: {
		label: 'OK',
		onClick: jest.fn(),
	},
};
const children = (<div>BODY</div>);

describe('Dialog', () => {
	it('should render', () => {
		const wrapper = renderer.create(
			<Dialog {...defaultProps}>{children}</Dialog>
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render header', () => {
		const wrapper = renderer.create(
			<Dialog {...headerProps}>{children}</Dialog>
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render action', () => {
		const wrapper = renderer.create(
			<Dialog {...actionProps}>{children}</Dialog>
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render small', () => {
		const wrapper = renderer.create(
			<Dialog {...smallProps}>{children}</Dialog>
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
	it('should render large', () => {
		const wrapper = renderer.create(
			<Dialog {...largeProps}>{children}</Dialog>
		).toJSON();
		expect(wrapper).toMatchSnapshot();
	});
});
