import { render } from "@testing-library/react";

import { ButtonScreen } from "@sentrei/app-mosh-lol/pages/index";

describe("ButtonScreen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonScreen />);
    expect(baseElement).toBeTruthy();
  });
});
