import React from "react";
import Counter from "./counter";
import { shallow } from "enzyme";

describe("Counter component", () => {
  it("starts with a count of 0", () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 0");
  });
  it("increments the count when the button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const incrementBtn = wrapper.find("button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: 1");
  })
  it("decrements the count when the button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const decrementBtn = wrapper.find("button.decrement");
    decrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Current count: -1");
  })
});
