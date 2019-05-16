import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import RightNav from './RightNav';

configure({ adapter: new Adapter() });

const defaultProps = {
    toggle: {current: 'test1', alt: 'test2'},
    onToggle: jest.fn(),
    items: [],
};

describe("RightNav", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><RightNav {...defaultProps}  /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('opens the dropdown on dropdown click', () => {
        let wrapper = shallow(<RightNav {...defaultProps} />);
        expect(wrapper.instance().state.isDropdownOpen).toBeFalsy();
        expect(wrapper.find('.right-nav__dropdown').exists()).toBeFalsy();

        wrapper.find('.right-nav__toggle').simulate('click');
        expect(wrapper.instance().state.isDropdownOpen).toBeTruthy();
        expect(wrapper.find('.right-nav__dropdown').exists()).toBeTruthy();
    });

    it('calls toggle handler on toggle click and closes dropdown', () => {
        let wrapper = shallow(<RightNav {...defaultProps} />);
        expect(wrapper.instance().state.isDropdownOpen).toBeFalsy();

        wrapper.find('.right-nav__toggle').simulate('click');
        expect(wrapper.instance().state.isDropdownOpen).toBeTruthy();

        wrapper.find('.right-nav__dropdown__toggle').simulate('click');
        expect(defaultProps.onToggle).toHaveBeenCalled();
        expect(wrapper.instance().state.isDropdownOpen).toBeFalsy();
    });

});
