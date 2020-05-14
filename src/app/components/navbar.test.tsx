import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Navbar } from "./navbar";
import { NavLink } from "react-router-dom";

configure({adapter: new Adapter()});

describe("<Navbar />", () => {
  it("should render two <NavLink />", () => {
    // Shallow rendering
    const wrapper = shallow(<Navbar />);
    expect(wrapper.find(NavLink)).toHaveLength(2);
  });
});
