import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe("Header", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MemoryRouter><Header /></MemoryRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('toggles the mode when handleModeToggle is called', () => {
        let wrapper = shallow(<Header />);
        expect(wrapper.instance().state.mode).toBe('teacher');
        wrapper.instance().handleModeToggle();
        expect(wrapper.instance().state.mode).toBe('student');
        wrapper.instance().handleModeToggle();
        expect(wrapper.instance().state.mode).toBe('teacher');
    });

});

