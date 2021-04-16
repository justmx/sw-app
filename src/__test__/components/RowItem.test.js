import React from "react";
import { shallow } from "enzyme";
import RowItem from "../../components/SwTable/RowItem";

const clickFn = jest.fn();
const person = { name: "Jack", height: "177", mass: 168 };

describe("RowItem", () => {
  it("should render row item", () => {
    const wrapper = shallow(<RowItem person={person} onClick={clickFn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should return null if no props", () => {
    const wrapper = shallow(<RowItem />);
    expect(wrapper.type()).toEqual(null);
  });

  it("should render div with name Jack", () => {
    const wrapper = shallow(<RowItem person={person} onClick={clickFn} />);
    const nameDiv = <div className="cell">Jack</div>;
    expect(wrapper.contains(nameDiv)).toEqual(true);
  });

  it("should render 3 cell div", () => {
    const wrapper = shallow(<RowItem person={person} onClick={clickFn} />);
    expect(wrapper.find("div.cell")).toHaveLength(3);
  });

  it("should fire a function when click", () => {
    const wrapper = shallow(<RowItem person={person} onClick={clickFn} />);
    wrapper.find(".row").simulate("click");
    expect(clickFn).toHaveBeenCalled();
  });
});
