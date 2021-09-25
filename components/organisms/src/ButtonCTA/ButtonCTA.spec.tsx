import { render } from "@testing-library/react";

import { ButtonCTA } from "./ButtonCTA";

describe("ButtonCTA", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonCTA />);
    expect(baseElement).toBeTruthy();
  });
});
