import { render } from "@testing-library/react";

import { Index } from "@sentrei/og/pages/index";

describe("ButtonScreen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
});
