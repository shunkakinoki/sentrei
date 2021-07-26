import { render } from "@testing-library/react";

import { ButtonGroup } from "./ButtonGroup";

describe("ButtonGroup", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonGroup />);
    expect(baseElement).toBeTruthy();
  });
});
