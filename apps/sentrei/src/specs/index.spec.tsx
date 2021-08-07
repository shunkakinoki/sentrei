import { ButtonScreen } from "@sentrei/sentrei/pages/index";
import { render } from "@testing-library/react";

describe("ButtonScreen", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonScreen />);
    expect(baseElement).toBeTruthy();
  });
});
