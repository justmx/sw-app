import React from "react";
import { shallow, mount } from "enzyme";
import { ReduxProvider } from "../TestUnity";
import DetailSection from "../../components/DetailSection/DetailSection";

const person = {
  name: "Jack",
  height: "177",
  mass: 168,
  allfilms: [
    { title: "The Empire Strikes Back" },
    { title: "Return of the Jedi" },
  ],
};

describe("Render DetailSection", () => {
  it("should render DetailSection", () => {
    const wrapper = shallow(<DetailSection person={person} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should return null if no props", () => {
    const wrapper = shallow(<DetailSection />);
    expect(wrapper.type()).toEqual(null);
  });
});

describe("Render person details", () => {
  const wrapper = mount(<DetailSection person={person} />);

  it("check prop name", () => {
    expect(wrapper.props().person).toHaveProperty("name");
  });

  it("should render person name", () => {
    expect(wrapper.find(".swap-detail-info").at(0).text()).toEqual(
      "Name: Jack"
    );
  });

  it("check person films", () => {
    expect(wrapper.find("li")).toHaveLength(2);
    expect(wrapper.find("li").at(0).text()).toEqual("The Empire Strikes Back");
  });
});
