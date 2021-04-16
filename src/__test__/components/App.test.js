import React from "react";
import { shallow, mount } from "enzyme";
import { ReduxProvider } from "../TestUnity";
import App from "../../components/App/App";
import DetailSection from "../../components/DetailSection/DetailSection";
import SwTable from "../../components/SwTable/SwTable";

const initialState = {
  swReducer: {
    people: [],
    selectedPerson: null,
  },
};

describe("App", () => {
  it("should render App", () => {
    const wrapper = shallow(
      <ReduxProvider>
        <App />
      </ReduxProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should render child components", () => {
    const wrapper = mount(
      <ReduxProvider initialState={initialState}>
        <App />
      </ReduxProvider>
    );
    expect(wrapper.find(DetailSection)).toHaveLength(1);
    expect(wrapper.find(SwTable)).toHaveLength(1);
  });
});
