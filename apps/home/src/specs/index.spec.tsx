import { render } from "@testing-library/react";

import { ButtonScreen } from "@sentrei/home/pages/index";

describe("ButtonScreen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonScreen />);
    expect(baseElement).toBeTruthy();
  });
});
