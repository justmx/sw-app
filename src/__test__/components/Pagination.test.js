import React from "react";
import { shallow } from "enzyme";
import Pagination from "../../components/SwTable/Pagination";

const nextPage = jest.fn();
const previouPage = jest.fn();

describe("RowPaginationItem", () => {
  it("should render row itme", () => {
    const wrapper = shallow(
      <Pagination nextPage={jest.fn()} previouPage={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("should fire a function when click buttons", () => {
    const wrapper = shallow(
      <Pagination nextPage={nextPage} previouPage={previouPage} />
    );
    wrapper.find(".pagination-button").at(0).simulate("click");
    expect(previouPage).toHaveBeenCalled();
    wrapper.find(".pagination-button").at(1).simulate("click");
    expect(nextPage).toHaveBeenCalled();
  });
});
