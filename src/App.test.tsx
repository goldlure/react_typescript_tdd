import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow } from "enzyme";
import {label} from "./App";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the heading', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).toBe('Hello React');
});

it('render the paragraph', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('p').text()).toBe('Nice TDD');
})

it('generates a label', () => {
    const a = label('React');
    expect(a).toBe('Hello React');
})