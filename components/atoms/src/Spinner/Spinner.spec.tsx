/* eslint-disable no-undef */
//TODO: remove after merging https://github.com/sentrei/sentrei/pull/273.
import { render } from "@testing-library/react";

import { Spinner } from "./Spinner";

describe("Spinner", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Spinner />);
    expect(baseElement).toBeTruthy();
  });
});
