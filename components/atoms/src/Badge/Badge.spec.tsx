/* eslint-disable no-undef */
//TODO: remove after merging https://github.com/sentrei/sentrei/pull/273.
import { render } from "@testing-library/react";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Badge>Badge</Badge>);
    expect(baseElement).toBeTruthy();
  });
});
