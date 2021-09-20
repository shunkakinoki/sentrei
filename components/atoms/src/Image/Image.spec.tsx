/* eslint-disable no-undef */
//TODO: remove after merging https://github.com/sentrei/sentrei/pull/273.
import { render } from "@testing-library/react";

import { Image } from "./Image";

describe("Image", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Image />);
    expect(baseElement).toBeTruthy();
  });
});
