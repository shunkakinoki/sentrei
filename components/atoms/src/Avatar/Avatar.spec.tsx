/* eslint-disable no-undef */
//TODO: remove after merging https://github.com/sentrei/sentrei/pull/273.
import { render } from "@testing-library/react";

import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Avatar />);
    expect(baseElement).toBeTruthy();
  });
});
