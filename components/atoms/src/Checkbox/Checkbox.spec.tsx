/* eslint-disable no-undef */
//TODO: remove after merging https://github.com/sentrei/sentrei/pull/273.
import { render } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Checkbox>Checkbox</Checkbox>);
    expect(baseElement).toBeTruthy();
  });
});
