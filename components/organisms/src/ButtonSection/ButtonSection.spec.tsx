import { render } from "@testing-library/react";

import { ButtonSection } from "./ButtonSection";

describe("ButtonSection", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ButtonSection />);
    expect(baseElement).toBeTruthy();
  });
});
