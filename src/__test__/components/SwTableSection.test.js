import React from "react";
import { shallow, mount } from "enzyme";
import { ReduxProvider } from "../TestUnity";
import SwTable from "../../components/SwTable/SwTable";
import RowItem from "../../components/SwTable/RowItem";
import Pagination from "../../components/SwTable/Pagination";

const people = [
  {
    name: "Beru Whitesun lars",
    height: "165",
    mass: "136",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "123",
  },
];

const selectedPerson = {
  name: "Beru Whitesun lars",
  height: "165",
  mass: "136",
  allfilms: [
    { title: "The Empire Strikes Back" },
    { title: "Return of the Jedi" },
  ],
};

const initialState = {
  swReducer: {
    people,
    selectedPerson,
  },
};

describe("Render SwTable", () => {
  const wrapper = shallow(
    <ReduxProvider>
      <SwTable />
    </ReduxProvider>
  );

  it("should render SwTable", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Check SwTable Childcomponent", () => {
  const wrapper = mount(
    <ReduxProvider initialState={initialState}>
      <SwTable />
    </ReduxProvider>
  );
  it("should render child components", () => {
    expect(wrapper.find(RowItem)).toHaveLength(2);
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });
});
