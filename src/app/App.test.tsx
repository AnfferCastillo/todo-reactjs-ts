import { configure, shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { Navbar } from "./components/navbar";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/rootReducer";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper: ReactWrapper;
  const mockStore = configureStore({
    reducer: rootReducer
  });

  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore}>
        <App />
      </Provider>
    );
    mockStore.dispatch = jest.fn();
  });

  it("should render a <Navbar />", () => {
      const appComponent = wrapper.find(App);
      const navbar = appComponent.find(Navbar);
      expect(navbar).toHaveLength(1);
  });
});

